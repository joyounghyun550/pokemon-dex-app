import MOCK_DATA from "../data/mokadata";
import PokemonCard from "./PokemonCard";
import { ListDiv } from "../styles/StyledComponents";

const PokemonList = () => {
  console.log("리스트 렌더링");

  return (
    <ListDiv>
      {/* pokemonList에 있는 모든 포켓몬을 PokemonCard 컴포넌트로 렌더링 */}
      {MOCK_DATA.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </ListDiv>
  );
};

export default PokemonList;
