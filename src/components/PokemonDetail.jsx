import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addPokemon, removePokemon } from "../redux/slices/pokemonSlice";
import Swal from "sweetalert2";
import { DetailBox } from "../styles/StyledComponents";

const PokemonDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pokemonInfo = {
    id: +queryParams.get("id"),
    img_url: queryParams.get("img_url"),
    korean_name: queryParams.get("korean_name"),
    type1: queryParams.get("type1"),
    type2: queryParams.get("type2"),
    description: queryParams.get("description"),
  };
  const dispatch = useDispatch();
  const counterReducer = useSelector((state) => {
    return state.pokemon.myPokemon;
  });

  const handleRemovePokemon = (pokemonId) => {
    Swal.fire({
      title: "정말로 포켓몬을 풀어주시겠습니까?",
      text: "다시 되돌릴 수 없습니다. 신중하세요.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "승인",
      cancelButtonText: "취소",
      reverseButtons: true, // 버튼 순서 거꾸로
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("승인이 완료되었습니다.", "화끈하시네요~!", "success");
        // 상태를 업데이트할 때 dispatch 사용
        dispatch(removePokemon(pokemonId));
      }
    });
  };

  return (
    <DetailBox>
      <div>
        <img src={pokemonInfo.img_url} alt={pokemonInfo.korean_name} />
        <h2>{pokemonInfo.korean_name}</h2>
        <p className="pokemonType">
          {pokemonInfo.ype1 && pokemonInfo.type2
            ? `특성 : ${pokemonInfo.type1}, ${pokemonInfo.type2}`
            : pokemonInfo.type1
            ? `특성 : ${pokemonInfo.type1}`
            : pokemonInfo.type2
            ? `특성 : ${pokemonInfo.type2}`
            : "타입 정보 없음"}
        </p>
        <p className="pokemonDp">설명 : {pokemonInfo.description}</p>
        <div>
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
                dispatch(addPokemon(pokemonInfo));
              }}
            >
              추가하기
            </button>
          )}
          <button
            onClick={() => {
              navigate("/dex");
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </DetailBox>
  );
};

export default PokemonDetail;
