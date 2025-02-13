import useSearchToRender from "../hooks/useFilteredPokemons";
import usePokeballCount from "../hooks/usePokeballCount";
import useHandleRemovePokemon from "../hooks/useRemoveAlert";
import { StDiv, StyledButton } from "../styles/StyledComponents";
import { Link } from "react-router-dom";
import pokeBall from "../assets/image/pokeball-13iwdk7Y.png";

const Dashboard = () => {
  // 필터링된 포켓몬 목록을 가져옵니다.
  const filteredPokemons = useSearchToRender();
  // 포켓몬 삭제를 위한 훅을 가져옵니다.
  const handleRemovePokemon = useHandleRemovePokemon();
  // 포켓볼 렌더링 훅을 가져옵니다.
  const pokeballCount = usePokeballCount();

  return (
    <StDiv>
      {/* 보유 포켓몬 목록을 렌더링하는 영역 */}
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
            방생
          </StyledButton>
        </div>
      ))}
      {/* 남은 포켓볼 슬롯을 렌더링 */}
      {Array.from({ length: pokeballCount }).map((_, i) => (
        <div className="BallDiv" key={i}>
          <img src={pokeBall} alt="포켓볼" />
          <span>몬스터 볼</span>
        </div>
      ))}
    </StDiv>
  );
};

export default Dashboard;
