import { useSelector } from "react-redux";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import PokemonSearch from "../components/PokemonSearch";
import { RootDiv } from "../styles/StyledComponents";

const Dex = () => {
  // Redux 상태에서 showAllPokemon 값을 가져옴
  const { showAllPokemon } = useSelector((state) => state.toggle);

  return (
    <RootDiv>
      <div className="app-container">
        {/* 포켓몬 검색창 렌더링 */}
        <PokemonSearch />

        {/* showAllPokemon 값에 따라 포켓몬 리스트 또는 대시보드 렌더링 */}
        {showAllPokemon ? <PokemonList /> : <Dashboard />}
      </div>
    </RootDiv>
  );
};

export default Dex;
