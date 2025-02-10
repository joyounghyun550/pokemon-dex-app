import useDebounce from "../hooks/useDebounce";
import useToggle from "../hooks/useToggle";
import {
  PokemonSearchTitle,
  SearchDiv,
  StyledButton,
  StyledTextField,
} from "../styles/StyledComponents";

const PokemonSearch = () => {
  // useDebounce 훅을 사용하여 검색어 및 토글 상태를 관리하는 변수와 함수들 가져오기
  const { searchTerm, showAllPokemon, handleSearchChange } = useDebounce();
  // 토글
  const togglePokemon = useToggle();

  return (
    <SearchDiv>
      {/* 포켓몬 검색 제목 */}
      <PokemonSearchTitle>포켓몬 검색</PokemonSearchTitle>
      {/* 검색 입력 필드 */}
      <StyledTextField
        type="text"
        placeholder="포켓몬을 검색하세요..."
        autoFocus
        value={searchTerm} // 검색어를 입력 값으로 설정
        onChange={handleSearchChange} // 입력 값 변경 시 검색어 업데이트
      />
      {/* 포켓몬 목록 보기/숨기기 토글 버튼 */}
      <StyledButton className="myPokemonBtn" onClick={togglePokemon}>
        {/* 현재 상태에 따라 버튼 텍스트 변경 */}
        {showAllPokemon ? "나의 포켓몬 보기" : "모든 포켓몬 보기"}
      </StyledButton>
    </SearchDiv>
  );
};

export default PokemonSearch;
