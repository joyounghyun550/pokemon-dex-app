import { useSelector } from "react-redux";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import PokemonSearch from "../components/PokemonSearch";
import { RootDiv, ScrollToTopButton } from "../styles/StyledComponents";
import { useEffect } from "react";
import useTopBtn from "../hooks/useTopBtn";

const Dex = () => {
  // Redux 상태에서 showAllPokemon 값을 가져옴
  const { showAllPokemon } = useSelector((state) => state.toggle);
  const { useToTop } = useTopBtn();

  // 페이지가 변경될 때 스크롤 위치 저장
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem("scrollPosition", 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // 페이지 로드 후 스크롤 위치 복원
  useEffect(() => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(scrollPosition, 10)); // 이전 위치로 스크롤 복원
      }, 0);
    }
  }, []); // 의존성 배열이 빈 배열이므로 컴포넌트가 처음 렌더링될 때만 실행

  return (
    <RootDiv>
      <div className="app-container">
        {/* 포켓몬 검색창 렌더링 */}
        <PokemonSearch />

        {/* showAllPokemon 값에 따라 포켓몬 리스트 또는 대시보드 렌더링 */}
        {showAllPokemon ? <PokemonList /> : <Dashboard />}
      </div>
      <ScrollToTopButton onClick={useToTop}>
        <img src="/src/assets/image/toTop.png" />
      </ScrollToTopButton>
    </RootDiv>
  );
};

export default Dex;
