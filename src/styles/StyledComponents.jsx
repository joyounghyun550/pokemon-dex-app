import styled from "styled-components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const StyRootDiv = styled.div`
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

  @media (max-width: 600px) {
    .logoImage {
      width: 300px;
    }
  }
`;

export const ScrollToTopButton = styled.div`
  width: 100px;
  height: 100px;
  position: fixed;
  bottom: 20px; /* 화면 하단에서 20px 만큼 띄우기 */
  right: 20px; /* 화면 오른쪽에서 20px 만큼 띄우기 */
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  /* 스크롤을 내린 상태에서 버튼이 보이도록 */
  z-index: 1000;

  img {
    width: 100px;
    height: 100px;
  }
`;

export const RootDiv = styled.div`
  width: 100%;
  height: 100vh;

  .app-container {
    display: flex; // flexbox를 사용하여 요소 배치
    flex-direction: column; // 세로 방향 정렬
    padding: 20px; // 내부 여백 추가
  }
`;

export const StDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  gap: 20px;
  background-color: #b0e0b1;
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;

  .MypokemonDiv {
    border: 1px solid rgb(221, 221, 221);
    background-color: #f5f5f5;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;

    img {
      width: 100px;
      height: 100px;
    }

    div {
      margin-top: 10px;
    }

    .pokemonName {
      font-size: 14px;
      font-weight: bold;
      margin: 5px 0px;
      color: black;
    }

    .pokemonNo {
      font-size: 12px;
      color: rgb(102, 102, 102);
    }

    button {
      margin-top: 10px;
      padding: 5px 10px;
      font-size: 12px;
      cursor: pointer;
      border: none;
      background-color: rgb(255, 0, 0);
      color: rgb(255, 255, 255);
      border-radius: 5px;
    }
  }

  .BallDiv {
    border: 1px solid rgb(221, 221, 221);
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;

    img {
      width: 100px;
      height: 100px;
    }

    span {
      color: black;
    }
  }
`;

export const ListDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(150px, 1fr)
  ); // 자동으로 열을 채우도록 설정
  gap: 20px; // 카드 간격 설정
  background-color: #b0e0b1; /* Pale Green */
  padding: 20px; // 내부 여백 설정
  border: 1px solid rgb(221, 221, 221); // 테두리 설정
  border-radius: 10px; // 모서리를 둥글게 설정
`;

export const Card = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  .DetailLink {
    text-decoration: none;
  }

  img {
    width: 100px;
    height: 100px;
  }

  div {
    margin-top: 10px;

    .pokemonName {
      font-size: 14px;
      font-weight: bold;
      margin: 5px 0px;
      color: black;
    }

    .pokemonNo {
      font-size: 12px;
      color: rgb(102, 102, 102);
    }
  }

  button {
    margin-top: 10px;
    padding: 5px 10px;
    font-size: 12px;
    cursor: pointer;
    border: none;
    background-color: rgb(255, 0, 0);
    color: rgb(255, 255, 255);
    border-radius: 5px;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 12px; // 마우스 오버 시 그림자 강화
  }
`;

export const DetailBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: black;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    div {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
  }

  .pagebtn {
    width: 200px;
    height: 200px;
  }

  h2 {
    margin: 20px 0px;
    color: rgb(255, 0, 0);
  }

  p {
    color: black;
    flex-wrap: wrap;
  }

  button {
    color: white;
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    flex-wrap: nowrap;
  }

  @media (max-width: 800px) {
    .pagebtn {
      width: 80px;
      height: 80px;
      max-width: 100%;
    }
  }
`;

export const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #b0e0b1; /* Pale Green */
  margin-bottom: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 부드러운 그림자 */
  transition: all 0.3s ease;
`;

export const StyledButton = styled(Button)`
  background-color: ${(props) => props.$backgroundColor || "red"} !important;
  &:hover {
    background-color: ${(props) =>
      props.$hoverBackgroundColor || "red"} !important;
    transform: scale(1.05) !important;
  }
  color: white !important;
  font-weight: bold !important;
  padding: 5px 10px !important;
  border-radius: 5px !important;
  transition: background-color 0.3s, transform 0.2s !important;
  margin: 20px !important;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3) !important;

  &:active {
    transform: scale(0.95) !important;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 300px;
  margin: 20px;
  width: 50%;
  height: 20%;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid black;
  padding: 10px;

  & .MuiOutlinedInput-root {
    font-size: 16px;
    background-color: white;
    border-radius: 8px;
  }
`;

export const PokemonSearchTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: black;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-image: url("https://example.com/background-image.jpg"); /* 배경 이미지 URL */
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
