// react-router-dom에서 useNavigate 훅을 가져옵니다.
import { useNavigate } from "react-router-dom";

// styled-components를 가져옵니다.
import styled from "styled-components";

// Home 컴포넌트 정의
const Home = () => {
  // useNavigate 훅을 사용하여 페이지 이동 기능을 가져옵니다.
  const navigate = useNavigate();

  return (
    // 스타일이 적용된 div 컴포넌트를 렌더링합니다.
    <StyRootDiv>
      <div>
        {/* 포켓몬 로고 이미지 */}
        <img
          src="/src/assets/pokemon-logo-RN0wntMB.png"
          alt="Pokemon Logo" // 접근성을 고려하여 alt 텍스트 추가
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

// 스타일이 적용된 컨테이너 div
const StyRootDiv = styled.div`
  width: 100%;

  div {
    display: flex; // 요소들을 flexbox로 배치
    flex-direction: column; // 세로 정렬
    align-items: center; // 수직 중앙 정렬
    justify-content: center; // 수평 중앙 정렬
    width: 100%;
    height: 100vh; // 화면 전체 높이 차지

    img {
      width: 600px; // 로고 크기 설정
      margin-bottom: 20px; // 버튼과 간격 조정
    }

    button {
      padding: 10px 20px; // 버튼 크기 조정
      font-size: 18px; // 글자 크기 설정
      cursor: pointer; // 마우스 오버 시 포인터 변경
      border-radius: 5px; // 버튼 모서리 둥글게
      background-color: rgb(255, 0, 0); // 버튼 배경색 (빨간색)
      color: white; // 버튼 글자색 (흰색)
      border: none; // 테두리 제거
      transition: background-color 0.3s; // 배경색 변경 시 부드럽게 전환
    }
  }
`;

// Home 컴포넌트를 내보냅니다.
export default Home;
