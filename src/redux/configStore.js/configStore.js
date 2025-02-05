import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "../slices/pokemonSlice";
import searchSlice from "../slices/searchSlice";
import pokemonViewReducer from "../slices/pokemonViewSlice";

// store 생성
const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
    search: searchSlice,
    pokemonView: pokemonViewReducer,
  },
});

// 3) 만든 store를 내보냄
export default store;
