import Swal from "sweetalert2";
import { addPokemon } from "../redux/slices/pokemonSlice";

// 포켓몬 추가 시 알림을 처리하는 커스텀 훅
const useAlert = () => {
  /**
   * 포켓몬 추가 시 알림을 띄우는 함수
   * @param {Object} pokemon - 추가할 포켓몬 객체
   * @param {Array} counterReducer - 현재 포획한 포켓몬 목록
   * @param {Function} dispatch - Redux 액션 디스패치 함수
   */
  const addShowAlert = (pokemon, counterReducer, dispatch) => {
    // 이미 잡은 포켓몬인지 확인
    if (counterReducer.some((myPokemon) => myPokemon.id === pokemon.id)) {
      Swal.fire({
        icon: "error",
        title: `${pokemon.korean_name}`,
        text: "이미 잡은 포켓몬입니다.",
      });
      return;
    }

    // 포켓몬 슬롯(6개) 초과 여부 확인
    if (counterReducer.length >= 6) {
      Swal.fire({
        icon: "error",
        title: `포켓볼 개수 부족`,
        text: "포켓몬을 놔주시고 다시 포획을 시도하세요!!",
      });
      return;
    }

    // 포켓몬 추가 후 성공 알림
    dispatch(addPokemon(pokemon));
    Swal.fire({
      icon: "success",
      title: `${pokemon.korean_name}`,
      text: "포획에 성공하셨습니다.",
    });
  };

  return { addShowAlert };
};

export default useAlert;
