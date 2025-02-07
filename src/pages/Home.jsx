import { Link } from "react-router-dom";
import { StyRootDiv } from "../styles/StyledComponents";

const Home = () => {
  return (
    <StyRootDiv>
      <div>
        {/* 포켓몬 로고 이미지 */}
        <img
          src="src/assets/image/pokemon-logo-RN0wntMB.png"
          alt="Pokemon Logo"
          className="logoImage"
        />

        {/* 버튼 클릭 시 /dex 페이지로 이동 */}
        <Link to={"./Dex"}>
          <button className="statButton">포켓몬 도감 시작하기</button>
        </Link>
      </div>
    </StyRootDiv>
  );
};

export default Home;
