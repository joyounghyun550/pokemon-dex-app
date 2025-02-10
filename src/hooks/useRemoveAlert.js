import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { removePokemon } from "../redux/slices/pokemonSlice";

const useRemoveAlert = () => {
  const dispatch = useDispatch();

  /**
   * 포켓몬을 목록에서 삭제하는 함수
   * 삭제 확인 후 리덕스를 통해 상태 업데이트
   * @param {number} pokemonId - 삭제할 포켓몬의 ID
   */
  const handleRemovePokemon = (pokemonId) => {
    // 삭제 확인 경고 창 표시
    Swal.fire({
      title: "정말로 포켓몬을 풀어주시겠습니까?",
      text: "다시 되돌릴 수 없습니다. 신중하세요.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "승인",
      cancelButtonText: "취소",
      reverseButtons: true,
    }).then((result) => {
      // 사용자가 승인 버튼을 클릭했을 때
      if (result.isConfirmed) {
        // 승인 알림 표시
        Swal.fire("승인이 완료되었습니다.", "화끈하시네요~!", "success");

        // 리덕스를 통해 상태 업데이트 (포켓몬 삭제)
        dispatch(removePokemon(pokemonId));
      }
    });
  };

  return handleRemovePokemon;
};

export default useRemoveAlert;
