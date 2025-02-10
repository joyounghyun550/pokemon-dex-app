import { useSelector } from "react-redux";

const usePokemonIdCheck = (pokemon) => {
  const myPokemonList = useSelector((state) => {
    return state.pokemon.myPokemon;
  });

  // myPokemonList에 현재 포켓몬의 id가 포함되어 있는지 확인
  const isOwned = myPokemonList.some(
    (myPokemon) => myPokemon.id === pokemon.id
  );

  return isOwned;
};

export default usePokemonIdCheck;
