import { createSlice } from "@reduxjs/toolkit";
import localStorageUtil, { STORAGE_KEYS } from "../../util/localStorageUtil";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    myPokemon: localStorageUtil.get(STORAGE_KEYS.MYPOKEMON), // 사용자가 보유한 포켓몬 리스트 (로컬 스토리지에서 불러옴)
    searchTerm: "",
    showAllPokemon: true,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    togglePokemonView(state) {
      state.showAllPokemon = !state.showAllPokemon;
    },
    // 사용자가 포켓몬을 추가하는 액션
    addPokemon: (state, action) => {
      state.myPokemon.push(action.payload);
      localStorageUtil.set(STORAGE_KEYS.MYPOKEMON, state.myPokemon); // 로컬 스토리지 업데이트
    },

    // 사용자가 포켓몬을 삭제하는 액션
    removePokemon: (state, action) => {
      state.myPokemon = state.myPokemon.filter(
        (pokemon) => pokemon.id !== action.payload
      );
      localStorageUtil.remove(STORAGE_KEYS.MYPOKEMON, action.payload); // 로컬 스토리지에서 해당 포켓몬 삭제
    },
  },
});

export const {setSearchTerm, togglePokemonView, addPokemon, removePokemon} = uiSlice.actions;

export default uiSlice.reducer;
