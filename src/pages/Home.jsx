import { useNavigate } from "react-router-dom";
import { StyRootDiv } from "../styles/StyledComponents";

const Home = () => {
  // useNavigate 훅을 사용하여 페이지 이동 기능을 가져옵니다.
  const navigate = useNavigate();

  return (
    <StyRootDiv>
      <div>
        {/* 포켓몬 로고 이미지 */}
        <img
          src="/src/assets/pokemon-logo-RN0wntMB.png"
          alt="Pokemon Logo"
          className="logoImage"
        />

        {/* 버튼 클릭 시 /dex 페이지로 이동 */}
        <button
          onClick={() => {
            navigate("/dex");
          }}
          className="statButton"
        >
          포켓몬 도감 시작하기
        </button>
      </div>
    </StyRootDiv>
  );
};

export default Home;
