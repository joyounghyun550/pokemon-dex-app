import styled from "styled-components";

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
`;

export const RootDiv = styled.div`
  width: 100%;

  .app-container {
    display: flex; // flexbox를 사용하여 요소 배치
    flex-direction: column; // 세로 방향 정렬
    padding: 20px; // 내부 여백 추가
  }
`;

export const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgb(248, 248, 248);
  margin-bottom: 20px;
  border-radius: 10px;

  h2 {
    margin-bottom: 20px;
    color: rgb(255, 0, 0);
  }

  #pokemon-dash-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    width: 100%;
    justify-items: center;

    .MypokemonDiv {
      border: 1px solid rgb(221, 221, 221);
      background-color: rgb(255, 255, 255);
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
  }

  .BallDiv {
    width: 100px;
    height: 100px;
    background-color: rgb(255, 255, 255);
    border: 2px dashed rgb(204, 204, 204);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    img {
      width: 50px;
      height: 50px;
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
  background-color: rgb(240, 240, 240); // 배경색 설정
  padding: 20px; // 내부 여백 설정
  border: 1px solid rgb(221, 221, 221); // 테두리 설정
  border-radius: 10px; // 모서리를 둥글게 설정
`;

export const Card = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
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
`;

export const DetailBox = styled.div`
  width: 100%;

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

  img {
    width: 200px;
    height: 200px;
  }

  h2 {
    margin: 20px 0px;
    color: rgb(255, 0, 0);
  }

  p {
    color: black;
  }

  button {
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
  }
`;
