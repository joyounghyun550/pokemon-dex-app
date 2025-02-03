import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  return (
    <StyRootDiv>
      <div>
        <img
          src="/src/assets/pokemon-logo-RN0wntMB.png"
          alt="Pokemon Logo"
          className="logoImage"
        ></img>
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

const StyRootDiv = styled.div`
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;

    img {
      width: 600px;
      margin-bottom: 20px;
    }

    button {
      padding: 10px 20px;
      font-size: 18px;
      cursor: pointer;
      border-radius: 5px;
      background-color: rgb(255, 0, 0);
      color: white;
      border: none;
      transition: background-color 0.3s;
    }
  }
`;

export default Home;
