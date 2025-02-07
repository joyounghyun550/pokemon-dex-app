import usePokemonsToRender from "../hooks/useToRender";
import useHandleRemovePokemon from "../hooks/useRemoveToggle";
import { StDiv, StyledButton } from "../styles/StyledComponents";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Dashboard = () => {
  // 리덕스에서 검색어와 보유 포켓몬 상태를 가져옵니다.
  const { searchTerm } = useSelector((state) => state.search);
  const myPokemonList = useSelector((state) => state.pokemon.myPokemon);

  // 필터링된 포켓몬 목록을 가져옵니다.
  const filteredPokemons = usePokemonsToRender();

  // 포켓몬 삭제를 위한 핸들러 함수를 가져옵니다.
  const handleRemovePokemon = useHandleRemovePokemon();

  // 남은 포켓볼 슬롯을 렌더링하는 함수
  const renderPokeballs = () => {
    // 검색어가 비어있을 경우에만 포켓볼 슬롯을 계산합니다.
    if (searchTerm === "") {
      // 최대 6개의 슬롯에서 현재 보유 포켓몬의 개수를 빼서 남은 포켓볼 개수를 구합니다.
      const pokeballCount = 6 - myPokemonList.length;
      const pokeballs = [];

      // 남은 슬롯만큼 포켓볼 이미지를 추가합니다.
      for (let i = 0; i < pokeballCount; i++) {
        pokeballs.push(
          <div className="BallDiv" key={i}>
            {/* 포켓볼 이미지를 출력 */}
            <img src="src/assets/image/pokeball-13iwdk7Y.png" alt="포켓볼" />
          </div>
        );
      }
      return pokeballs; // 생성된 포켓볼 div 배열을 반환
    }
  };

  return (
    <StDiv>
      {/* 보유 포켓몬 목록을 렌더링하는 영역 */}
      <div id="pokemon-dash-list">
        {/* 필터링된 포켓몬 목록을 순회하면서 각 포켓몬의 정보를 표시 */}
        {filteredPokemons.map((item) => (
          <div className="MypokemonDiv" key={item.id}>
            {/* 포켓몬 상세 페이지로 이동할 수 있는 링크 */}
            <Link to={`/Detail?id=${item.id}`}>
              <div>
                <img src={item.img_url} alt={item.korean_name} />
                <div>
                  <p className="pokemonName">{item.korean_name}</p>
                  <p className="pokemonNo">No. {"00" + item.id}</p>
                </div>
              </div>
            </Link>
            {/* 포켓몬 삭제 버튼 */}
            <StyledButton
              onClick={() => {
                handleRemovePokemon(item.id); // 삭제 버튼 클릭 시 포켓몬을 삭제
              }}
            >
              삭제
            </StyledButton>
          </div>
        ))}
        {/* 남은 포켓볼 슬롯을 렌더링 */}
        {renderPokeballs()} {/* renderPokeballs 함수 호출하여 렌더링 */}
      </div>
    </StDiv>
  );
};

export default Dashboard;
