import { createSlice } from "@reduxjs/toolkit";

// 초기 상태 설정
const initialState = {
  showAllPokemon: true, // true: 모든 포켓몬 보기, false: 내 포켓몬만 보기
};

// 포켓몬 목록 표시 상태를 관리하는 슬라이스 생성
const toggleSlice = createSlice({
  name: "pokemonView",
  initialState,
  reducers: {
    // 포켓몬 목록 표시 상태를 토글하는 액션
    togglePokemonView(state) {
      state.showAllPokemon = !state.showAllPokemon;
    },
  },
});

// 액션 생성자 내보내기
export const { togglePokemonView } = toggleSlice.actions;

// 리듀서 내보내기 (스토어에서 사용)
export default toggleSlice.reducer;
