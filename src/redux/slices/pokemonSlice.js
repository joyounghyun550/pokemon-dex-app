import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
// import { localStorageUtil, STORAGE_KEYS } from "../../util/localStorageUtil";
// 초기 상태
const initialState = {
  pokemonList: [], // 전체 포켓몬 리스트
  myPokemon: [], // 사용자가 잡은 포켓몬
};

// 슬라이스 생성
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    // 초기 포켓몬 리스트 설정
    setPokemonList: (state, action) => {
      state.pokemonList = action.payload;
    },
    // 포켓몬 추가
    addPokemon: (state, action) => {
      if (state.myPokemon.length >= 6) {
        Swal.fire({
          icon: "error",
          title: `포켓볼 개수 부족`,
          text: "포켓몬을 놔주시고 다시 포획을 시도하세요!! ",
        });
        return;
      }

      if (state.myPokemon.some((pokemon) => pokemon.id === action.payload.id)) {
        Swal.fire({
          icon: "error",
          title: `${action.payload.korean_name}`,
          text: "이미 잡은 포켓몬입니다.",
        });
        return;
      }
      state.myPokemon.push(action.payload);
      Swal.fire({
        icon: "success",
        title: `${action.payload.korean_name}`,
        text: "포획에 성공하셨습니다.",
      });
    },
    // 포켓몬 제거
    removePokemon: (state, action) => {
      state.myPokemon = state.myPokemon.filter(
        (pokemon) => pokemon.id !== action.payload
      );
    },
  },
});

// action creator
export const { setPokemonList, addPokemon, removePokemon } =
  pokemonSlice.actions;

// 리듀서(함수)
export default pokemonSlice.reducer;
