import { useSelector } from "react-redux";
import MOCK_DATA from "../data/mokadata";

const useToRender = () => {
  const { searchTerm } = useSelector((state) => state.search); // 현재 검색어
  const { showAllPokemon } = useSelector((state) => state.toggle); // 모든 포켓몬 표시 여부
  const counterReducer = useSelector((state) => state.pokemon.myPokemon); // 사용자가 잡은 포켓몬

  /**
   * 표시할 포켓몬 목록을 반환하는 함수
   * - 모든 포켓몬 보기 또는 나의 포켓몬 보기 여부에 따라 처리
   * - 검색어가 있을 경우 해당 검색어에 맞는 포켓몬만 반환
   * @returns {Array} 필터링된 포켓몬 목록
   */
  const getPokemonsToRender = () => {
    // 표시할 포켓몬 목록 결정 (모든 포켓몬 또는 사용자의 포켓몬)
    const pokemons = showAllPokemon ? MOCK_DATA : counterReducer;

    if (searchTerm === "") {
      return pokemons; // 검색어가 없으면 모든 포켓몬 목록을 반환
    }

    // 검색어에 맞는 포켓몬만 필터링하여 반환
    return pokemons.filter(
      (pokemon) =>
        pokemon.korean_name.toLowerCase().includes(searchTerm.toLowerCase()) // 검색어 포함 여부 확인
    );
  };

  return getPokemonsToRender(); // 필터링된 포켓몬 목록 반환
};

export default useToRender;
