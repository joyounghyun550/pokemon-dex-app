// styled-components를 가져와서 스타일링을 적용할 수 있도록 합니다.
import styled from "styled-components";

// Dashboard와 PokemonList 컴포넌트를 가져옵니다.
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

// useState 훅을 가져와서 상태 관리를 합니다.
import { useState } from "react";

// Dex 컴포넌트 정의
const Dex = () => {
  // myPokemon 상태를 생성합니다.
  // myPokemon: 사용자가 선택한 포켓몬 목록을 저장하는 배열
  // setMyPokemon: myPokemon 상태를 업데이트하는 함수
  const [myPokemon, setMyPokemon] = useState([]);

  return (
    // 스타일이 적용된 컨테이너 컴포넌트
    <RootDiv>
      <div className="app-container">
        {/* Dashboard 컴포넌트에 myPokemon 데이터를 전달하여 선택한 포켓몬 목록을 표시 */}
        <Dashboard myPokemon={myPokemon} />

        {/* PokemonList 컴포넌트에 myPokemon과 setMyPokemon을 전달하여 포켓몬을 추가/삭제할 수 있도록 설정 */}
        <PokemonList myPokemon={myPokemon} setMyPokemon={setMyPokemon} />
      </div>
    </RootDiv>
  );
};

// 스타일이 적용된 RootDiv 컴포넌트
const RootDiv = styled.div`
  width: 100%;

  .app-container {
    display: flex; // flexbox를 사용하여 요소 배치
    flex-direction: column; // 세로 방향 정렬
    padding: 20px; // 내부 여백 추가
  }
`;

// Dex 컴포넌트를 내보냅니다.
export default Dex;
