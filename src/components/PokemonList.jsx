import PokemonCard from "./PokemonCard";
import { ListDiv } from "../styles/StyledComponents";
import useFilteredPokemons from "../hooks/useFilteredPokemons";

const PokemonList = () => {
  // useFilteredPokemons 훅을 사용하여 필터링된 포켓몬 목록을 가져옴
  const filteredPokemons = useFilteredPokemons();

  return (
    <div>
      {/* 포켓몬 목록을 출력할 리스트 컨테이너 */}
      <ListDiv>
        {/* 필터링된 포켓몬 배열을 순회하여 각 포켓몬에 대해 PokemonCard 컴포넌트를 렌더링 */}
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <h1 className="nodataAlert">
            존재하는
            <br /> 포켓몬이
            <br /> 없습니다.
          </h1>
        )}
      </ListDiv>
    </div>
  );
};

export default PokemonList;
