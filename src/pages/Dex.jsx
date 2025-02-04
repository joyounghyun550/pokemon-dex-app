import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { useState } from "react";

const Dex = () => {
  // myPokemon: 사용자가 선택한 포켓몬 목록을 저장하는 배열, setMyPokemon: myPokemon 상태를 업데이트하는 함수
  const [myPokemon, setMyPokemon] = useState([]);

  return (
    <RootDiv>
      <div className="app-container">
        {/* Dashboard 컴포넌트 */}
        <Dashboard myPokemon={myPokemon} setMyPokemon={setMyPokemon} />

        {/* PokemonList 컴포넌트 */}
        <PokemonList myPokemon={myPokemon} setMyPokemon={setMyPokemon} />
      </div>
    </RootDiv>
  );
};

const RootDiv = styled.div`
  width: 100%;

  .app-container {
    display: flex; // flexbox를 사용하여 요소 배치
    flex-direction: column; // 세로 방향 정렬
    padding: 20px; // 내부 여백 추가
  }
`;

export default Dex;
