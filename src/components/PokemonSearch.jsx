import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/slices/searchSlice";
import { togglePokemonView } from "../redux/slices/pokemonViewSlice";
import { debounce } from "../util/debounce"; // 수정된 debounce 함수 가져오기
import { useEffect, useState } from "react";
import { PokemonSearchTitle, SearchDiv, StyledButton, StyledTextField } from "../styles/StyledComponents";

const PokemonSearch = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state) => state.search);
  const { showAllPokemon } = useSelector((state) => state.pokemonView);
  const [inputValue, setInputValue] = useState(searchTerm);

  useEffect(() => {
    const debouncedSearch = debounce((query) => {
      dispatch(setSearchTerm(query));
    }, 500);

    debouncedSearch(inputValue);

    // 메모리 누수 방지: cleanup에서 debouncedSearch.cancel() 호출
    return () => {
      debouncedSearch.cancel(); // 기존 타이머 제거
    };
  }, [inputValue, dispatch]);

  const handleSearchChange = (e) => {
    setInputValue(e.target.value);
  };

  const togglePokemonList = () => {
    dispatch(togglePokemonView());
  };

  return (
    <SearchDiv>
      <PokemonSearchTitle>포켓몬 검색</PokemonSearchTitle>
      <StyledTextField
        type="text"
        placeholder="포켓몬을 검색하세요..."
        autoFocus
        value={inputValue}
        onChange={handleSearchChange}
      ></StyledTextField>
      <StyledButton className="myPokemonBtn" onClick={togglePokemonList}>
        {showAllPokemon ? "나의 포켓몬 보기" : "모든 포켓몬 보기"}
      </StyledButton>
    </SearchDiv>
  );
};

export default PokemonSearch;
