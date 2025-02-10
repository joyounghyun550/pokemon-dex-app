import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/slices/searchSlice";
import { debounce } from "../util/debounce";
import { useState, useEffect } from "react";

const useSearch = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state) => state.search); // 현재 검색어
  const { showAllPokemon } = useSelector((state) => state.toggle); // 모든 포켓몬 표시 여부
  const [inputValue, setInputValue] = useState(searchTerm); // 검색어 입력 값 상태

  useEffect(() => {
    // debounce 함수로 검색어 처리, 500ms 대기 후 검색어 업데이트
    const debouncedSearch = debounce((query) => {
      dispatch(setSearchTerm(query)); // 검색어를 리덕스 상태에 저장
    }, 500);

    // 검색어 입력값이 변경될 때마다 디바운스를 적용하여 리덕스 상태 업데이트
    debouncedSearch(inputValue);

    // 메모리 누수 방지: 컴포넌트 언마운트 시 기존 타이머 취소
    return () => {
      debouncedSearch.cancel();
    };
  }, [inputValue, dispatch]);

  const handleSearchChange = (e) => {
    setInputValue(e.target.value); // 입력된 값으로 상태 업데이트
  };

  return {
    inputValue, // 현재 입력된 검색어
    handleSearchChange, // 검색어 입력 핸들러
    showAllPokemon, // 모든 포켓몬 표시 여부
  };
};

export default useSearch;
