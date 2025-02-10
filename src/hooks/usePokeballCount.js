import { useSelector } from "react-redux";

const usePokeballCount = () => {
  const { searchTerm } = useSelector((state) => state.search);
  const myPokemonList = useSelector((state) => state.pokemon.myPokemon);

  if (searchTerm !== "") return 0; // 검색어가 있으면 포켓볼 표시 X

  const pokeballCount = Math.max(0, 6 - myPokemonList.length); // 남은 포켓볼 개수 계산

  return pokeballCount; // JSX가 아닌 숫자(개수)만 반환
};

export default usePokeballCount;
