import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { useState } from "react";
import { PokemonContext } from "../context/PokemonContext";

const Dex = () => {
  // myPokemon: 사용자가 선택한 포켓몬 목록을 저장하는 배열, setMyPokemon: myPokemon 상태를 업데이트하는 함수
  const [pokemonList, setPokemonList] = useState(null);

  return (
    <PokemonContext.Provider
      value={{
        pokemonList,
        setPokemonList,
      }}
    >
      <RootDiv>
        <div className="app-container">
          {/* Dashboard 컴포넌트 */}
          <Dashboard />

          {/* PokemonList 컴포넌트 */}
          <PokemonList />
        </div>
      </RootDiv>
    </PokemonContext.Provider>
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
