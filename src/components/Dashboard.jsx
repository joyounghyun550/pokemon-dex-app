import { useDispatch, useSelector } from "react-redux";
import { removePokemon } from "../redux/slices/pokemonSlice";
import Swal from "sweetalert2";
import { StDiv, StyledButton } from "../styles/StyledComponents";
import MOCK_DATA from "../data/mokadata";

const Dashboard = () => {
  // 리덕스에서 상태를 업데이트하거나 가져오기 위한 dispatch와 selector 사용
  const dispatch = useDispatch();

  const { searchTerm } = useSelector((state) => state.search);
  const { showAllPokemon } = useSelector((state) => state.pokemonView);

  // 현재 보유한 포켓몬 목록을 리덕스 스토어에서 가져오기
  const counterReducer = useSelector((state) => {
    return state.pokemon.myPokemon;
  });

  // 남은 포켓볼 슬롯을 렌더링하는 함수
  const renderPokeballs = () => {
    if (searchTerm === "") {
      const pokeballCount = 6 - counterReducer.length; // 최대 6개의 슬롯에서 현재 myPokemon 개수를 뺀 남은 슬롯만큼 포켓볼을 추가
      const pokeballs = [];

      // 남은 슬롯만큼 포켓볼 이미지를 배열에 추가
      for (let i = 0; i < pokeballCount; i++) {
        pokeballs.push(
          <div className="BallDiv" key={i}>
            {/* 포켓볼 이미지 출력 */}
            <img src="src/assets/image/pokeball-13iwdk7Y.png" alt="포켓볼" />
          </div>
        );
      }
      return pokeballs; // 생성된 포켓볼 div 배열을 반환
    }
  };

  // 포켓몬을 풀어주는 함수 (삭제 요청)
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
      reverseButtons: true,
    }).then((result) => {
      // 사용자가 '승인' 버튼을 클릭하면 포켓몬을 삭제
      if (result.isConfirmed) {
        Swal.fire("승인이 완료되었습니다.", "화끈하시네요~!", "success");
        // 리덕스를 통해 상태 업데이트 (포켓몬 삭제)
        dispatch(removePokemon(pokemonId));
      }
    });
  };

  // 필터링된 포켓몬 목록을 가져오는 함수
  const getPokemonsToRender = () => {
    const pokemons = showAllPokemon ? MOCK_DATA : counterReducer; // 모든 포켓몬 보기 vs 나의 포켓몬 보기
    if (searchTerm === "") {
      return pokemons; // 검색어가 없으면 모든 포켓몬을 반환
    }
    return pokemons.filter(
      (pokemon) =>
        pokemon.korean_name.toLowerCase().includes(searchTerm.toLowerCase()) // 검색어에 맞는 포켓몬 필터링
    );
  };

  const filteredPokemons = getPokemonsToRender();

  return (
    <StDiv>
      {/* 보유한 포켓몬 목록을 렌더링 */}
      <div id="pokemon-dash-list">
        {/* myPokemon 배열을 순회하며 각 포켓몬을 표시 */}
        {filteredPokemons.map((item) => (
          <div className="MypokemonDiv" key={item.id}>
            <img src={item.img_url} alt={item.korean_name} />
            <div>
              <p className="pokemonName">{item.korean_name}</p>
              <p className="pokemonNo">No. {"00" + item.id}</p>
            </div>
            {/* 각 포켓몬마다 삭제 버튼을 눌러 포켓몬을 삭제할 수 있음 */}
            <StyledButton
              onClick={() => {
                handleRemovePokemon(item.id);
              }}
            >
              삭제
            </StyledButton>
          </div>
        ))}

        {/* 남은 슬롯을 포켓볼 이미지로 채움 */}
        {renderPokeballs()}
      </div>
    </StDiv>
  );
};

export default Dashboard;
