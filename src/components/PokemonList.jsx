import MOCK_DATA from "../data/mokadata";
import { ListDiv } from "../styles/StyledComponents";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";

const PokemonList = () => {
  const { searchTerm } = useSelector((state) => state.search);
  const { showAllPokemon } = useSelector((state) => state.pokemonView);
  const counterReducer = useSelector((state) => state.pokemon.myPokemon);

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
    <div>
      <ListDiv>
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </ListDiv>
    </div>
  );
};

export default PokemonList;
