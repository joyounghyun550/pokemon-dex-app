import { useSelector } from "react-redux";
import MOCK_DATA from "../data/mokadata";

const useFilteredPokemons = () => {
  // Redux 상태에서 필요한 데이터 가져오기
  const { searchTerm } = useSelector((state) => state.search); // 검색어 상태
  const { showAllPokemon } = useSelector((state) => state.toggle); // 포켓몬 전체 보기 여부
  const counterReducer = useSelector((state) => state.pokemon.myPokemon); // 내가 잡은 포켓몬 목록

  /**
   * 필터링된 포켓몬 목록을 반환하는 함수
   * @returns {Array} 검색 및 필터링된 포켓몬 리스트
   */
  const getPokemonsToRender = () => {
    // 전체 포켓몬 목록 또는 내가 잡은 포켓몬 목록 선택
    const pokemons = showAllPokemon ? MOCK_DATA : counterReducer;

    // 검색어가 없으면 전체 리스트 반환
    if (searchTerm === "") {
      return pokemons;
    }

    // 검색어가 포함된 포켓몬만 필터링하여 반환
    return pokemons.filter((pokemon) =>
      pokemon.korean_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return getPokemonsToRender();
};

export default useFilteredPokemons;
