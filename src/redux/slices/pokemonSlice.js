import { createSlice } from "@reduxjs/toolkit";
import localStorageUtil, { STORAGE_KEYS } from "../../util/localStorageUtil";

// 초기 상태 정의
const initialState = {
  myPokemon: localStorageUtil.get(STORAGE_KEYS.MYPOKEMON), // 사용자가 보유한 포켓몬 리스트 (로컬 스토리지에서 불러옴)
};

// Redux Toolkit을 사용하여 포켓몬 관련 상태를 관리하는 슬라이스 생성
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
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

// 액션 생성자 내보내기
export const { addPokemon, removePokemon } = pokemonSlice.actions;

// 리듀서 내보내기 (스토어에서 사용)
export default pokemonSlice.reducer;
