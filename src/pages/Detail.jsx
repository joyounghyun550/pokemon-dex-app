import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addPokemon, removePokemon } from "../redux/slices/pokemonSlice";
import Swal from "sweetalert2";
import { DetailBox } from "../styles/StyledComponents";

const Detail = () => {
  // 페이지 이동을 위한 navigate와 URL 쿼리 파라미터를 가져오기 위한 location 사용
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  // URL의 쿼리 파라미터에서 포켓몬 정보를 추출
  const queryParams = new URLSearchParams(location.search);
  const pokemonInfo = {
    id: +queryParams.get("id"), // 숫자로 변환하여 id 저장
    img_url: queryParams.get("img_url"),
    korean_name: queryParams.get("korean_name"),
    type1: queryParams.get("type1"),
    type2: queryParams.get("type2"),
    description: queryParams.get("description"),
  };

  // 리덕스를 통해 포켓몬 목록을 가져오기 위한 dispatch와 selector 사용
  const dispatch = useDispatch();
  const counterReducer = useSelector((state) => {
    return state.pokemon.myPokemon;
  });

  // 포켓몬을 삭제하는 함수
  const handleRemovePokemon = (pokemonId) => {
    // 삭제 전에 경고창을 띄워서 사용자가 신중하게 선택하도록 유도
    Swal.fire({
      title: "정말로 포켓몬을 풀어주시겠습니까?",
      text: "다시 되돌릴 수 없습니다. 신중하세요.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "승인",
      cancelButtonText: "취소",
      reverseButtons: true, // 버튼 순서 거꾸로 설정
    }).then((result) => {
      // 사용자가 '승인' 버튼을 클릭하면 포켓몬을 삭제
      if (result.isConfirmed) {
        Swal.fire("승인이 완료되었습니다.", "화끈하시네요~!", "success");
        // 리덕스를 통해 상태 업데이트 (포켓몬 삭제)
        dispatch(removePokemon(pokemonId));
      }
    });
  };

  return (
    <DetailBox>
      <div>
        {/* 포켓몬의 이미지와 이름을 표시 */}
        <img src={pokemonInfo.img_url} alt={pokemonInfo.korean_name} />
        <h2>{pokemonInfo.korean_name}</h2>

        {/* 포켓몬 타입 정보가 있을 경우 보여주기, 없으면 '타입 정보 없음' 출력 */}
        <p className="pokemonType">
          {pokemonInfo.type1 && pokemonInfo.type2
            ? `특성 : ${pokemonInfo.type1}, ${pokemonInfo.type2}`
            : pokemonInfo.type1
            ? `특성 : ${pokemonInfo.type1}`
            : pokemonInfo.type2
            ? `특성 : ${pokemonInfo.type2}`
            : "타입 정보 없음"}
        </p>

        {/* 포켓몬 설명 출력 */}
        <p className="pokemonDp">설명 : {pokemonInfo.description}</p>

        <div>
          {/* 포켓몬이 이미 내 포켓몬 목록에 있으면 삭제 버튼, 아니면 추가 버튼 */}
          {counterReducer.some(
            (myPokemon) => myPokemon.id === pokemonInfo.id
          ) ? (
            <button
              className="detail-add-btn"
              onClick={() => {
                handleRemovePokemon(pokemonInfo.id);
              }}
            >
              삭제하기
            </button>
          ) : (
            <button
              className="detail-add-btn"
              onClick={() => {
                // 포켓몬을 내 목록에 추가
                dispatch(addPokemon(pokemonInfo));
              }}
            >
              추가하기
            </button>
          )}

          {/* 뒤로가기 버튼, 이전 페이지로 돌아가기 */}
          <button
            onClick={() => {
              navigate(-1); // 한 단계 뒤로 가기
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </DetailBox>
  );
};

export default Detail;
