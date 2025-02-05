import { useSelector } from "react-redux";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import PokemonSearch from "../components/PokemonSearch";
import { RootDiv } from "../styles/StyledComponents";

const Dex = () => {
  const { showAllPokemon } = useSelector((state) => state.pokemonView);

  return (
    <RootDiv>
      <div className="app-container">
        <PokemonSearch />
        <>{showAllPokemon ? <PokemonList /> : <Dashboard />}</>
        {/* Dashboard 컴포넌트 */}
        {/* <Dashboard /> */}
        {/* PokemonList 컴포넌트 */}
        {/* <PokemonList /> */}
      </div>
    </RootDiv>
  );
};

export default Dex;
