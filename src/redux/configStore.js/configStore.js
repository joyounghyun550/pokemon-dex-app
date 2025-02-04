import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "../slices/pokemonSlice";

// store 생성
const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
  },
});

// 3) 만든 store를 내보냄
export default store;
