import { useDispatch } from "react-redux";
import { togglePokemonView } from "../redux/slices/toggleSlice";

const useToggle = () => {
  const dispatch = useDispatch();
  const togglePokemon = () => {
    dispatch(togglePokemonView()); // 포켓몬 목록 표시 상태를 토글
  };

  return togglePokemon;
};

export default useToggle;
