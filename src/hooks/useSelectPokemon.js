import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import MOCK_DATA from "../data/mokadata";

const useSelectPokemon = () => {
  // Redux 상태 관리
  const myPokemonList = useSelector((state) => state.pokemon.myPokemon);
  // URL에서 포켓몬 ID 가져오기
  const [query] = useSearchParams();
  const detailPokemonId = +query.get("id");
  // 선택한 포켓몬 데이터 찾기
  const selectPokemon = MOCK_DATA.find(
    (pokemon) => pokemon.id === detailPokemonId
  );
  // 현재 포켓몬이 내 목록에 있는지 확인
  const isPokemonInMyList = myPokemonList.some(
    (myPokemon) => myPokemon.id === selectPokemon.id
  );
  return {
    selectPokemon,
    isPokemonInMyList,
  };
};

export default useSelectPokemon;
