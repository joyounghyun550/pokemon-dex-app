import { useDispatch, useSelector } from "react-redux";
import { removePokemon } from "../redux/slices/pokemonSlice";
import Swal from "sweetalert2";
import { StDiv } from "../styles/StyledComponents";

const Dashboard = () => {
  const dispatch = useDispatch();
  const counterReducer = useSelector((state) => {
    return state.pokemon.myPokemon;
  });

  // 남은 포켓볼 슬롯을 렌더링하는 함수
  const renderPokeballs = () => {
    const pokeballCount = 6 - counterReducer.length; // 최대 6개의 슬롯에서 현재 myPokemon 개수를 뺀 나머지 개수만큼 포켓볼을 추가
    const pokeballs = [];

    // 남은 슬롯만큼 포켓볼 이미지를 배열에 추가
    for (let i = 0; i < pokeballCount; i++) {
      pokeballs.push(
        <div className="BallDiv" key={i}>
          {/* 포켓볼 이미지 출력 */}
          <img src="/src/assets/pokeball-13iwdk7Y.png" alt="포켓볼" />
        </div>
      );
    }
    return pokeballs; // 포켓볼 div 배열 반환
  };

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
    <StDiv>
      <h2>나만의 포켓몬</h2>
      {/* 선택한 포켓몬 목록 */}
      <div id="pokemon-dash-list">
        {/* myPokemon 배열을 순회하며 각 포켓몬을 표시 */}
        {counterReducer.map((item) => (
          <div className="MypokemonDiv" key={item.id}>
            <img src={item.img_url} alt={item.korean_name} />
            <div>
              <p className="pokemonName">{item.korean_name}</p>
              <p className="pokemonNo">No. {"00" + item.id}</p>
            </div>
            <button
              onClick={() => {
                handleRemovePokemon(item.id);
              }}
            >
              삭제
            </button>
          </div>
        ))}

        {/* 남은 슬롯을 포켓볼 이미지로 채움 */}
        {renderPokeballs()}
      </div>
    </StDiv>
  );
};

export default Dashboard;
