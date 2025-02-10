import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "../slices/pokemonSlice";
import searchSlice from "../slices/searchSlice";
import toggleSlice from "../slices/toggleSlice";

// Redux 스토어 생성 및 설정
const store = configureStore({
  reducer: {
    pokemon: pokemonSlice, // 포켓몬 관련 상태 관리
    search: searchSlice, // 검색어 관련 상태 관리
    toggle: toggleSlice, // UI 토글 상태 관리
  },
});

// 생성한 스토어를 내보내기
export default store;
