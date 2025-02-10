import { useEffect } from "react";

const useScrollGet = () => {
  // 페이지 로드 후 스크롤 위치 복원
  useEffect(() => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(scrollPosition, 10)); // 이전 위치로 스크롤 복원
      }, 0);
    }
  }, []); // 의존성 배열이 빈 배열이므로 컴포넌트가 처음 렌더링될 때만 실행
};

export default useScrollGet;
