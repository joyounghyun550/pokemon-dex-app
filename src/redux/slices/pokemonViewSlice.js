import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAllPokemon: true, // 초기값: 모든 포켓몬 보기
};

const pokemonViewSlice = createSlice({
  name: "pokemonView",
  initialState,
  reducers: {
    togglePokemonView(state) {
      state.showAllPokemon = !state.showAllPokemon; // 상태 토글
    },
  },
});

export const { togglePokemonView } = pokemonViewSlice.actions;
export default pokemonViewSlice.reducer;
