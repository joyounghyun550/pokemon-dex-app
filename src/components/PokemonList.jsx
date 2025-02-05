import MOCK_DATA from "../data/mokadata";
import PokemonCard from "./PokemonCard";
import { ListDiv } from "../styles/StyledComponents";

const PokemonList = () => {
  return (
    <ListDiv>
      {/* MOCK_DATA 배열에 있는 모든 포켓몬 데이터를 PokemonCard 컴포넌트로 렌더링 */}
      {MOCK_DATA.map((pokemon) => {
        // 각 포켓몬마다 PokemonCard 컴포넌트를 생성하고 pokemon 데이터를 전달
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </ListDiv>
  );
};

export default PokemonList;
