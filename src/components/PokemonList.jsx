// styled-components를 가져와서 스타일링을 적용할 수 있도록 합니다.
import styled from "styled-components";

// PropTypes를 가져와서 prop의 타입을 검증합니다.
import PropTypes from "prop-types";

// 가상의 포켓몬 데이터(MOCK_DATA)를 가져옵니다.
import MOCK_DATA from "../data/mokadata";

// useState 훅을 가져와서 컴포넌트의 상태를 관리할 수 있도록 합니다.
import { useState } from "react";

// 개별 포켓몬 카드를 렌더링하는 PokemonCard 컴포넌트를 가져옵니다.
import PokemonCard from "./PokemonCard";

// PokemonList 컴포넌트 정의
const PokemonList = ({ myPokemon, setMyPokemon }) => {
  // 포켓몬 목록을 상태로 관리합니다.
  // 초기값으로 MOCK_DATA 배열을 복사하여 설정합니다.
  const [pokemonList] = useState([...MOCK_DATA]);

  return (
    <ListDiv>
      {/* pokemonList에 있는 모든 포켓몬을 PokemonCard 컴포넌트로 렌더링 */}
      {pokemonList.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id} // 각 요소의 고유 키 설정 (React의 리스트 렌더링 최적화)
            pokemon={pokemon} // 현재 포켓몬 데이터를 전달
            myPokemon={myPokemon} // 현재 선택된 포켓몬 목록을 전달
            setMyPokemon={setMyPokemon} // 포켓몬 목록을 업데이트하는 함수 전달
          />
        );
      })}
    </ListDiv>
  );
};

// PokemonList 컴포넌트의 스타일을 정의
const ListDiv = styled.div`
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

// PropTypes를 사용하여 PokemonList 컴포넌트의 props 타입을 검증
PokemonList.propTypes = {
  myPokemon: PropTypes.array.isRequired, // 선택된 포켓몬 배열 (필수)
  setMyPokemon: PropTypes.func.isRequired, // 포켓몬을 추가하는 상태 업데이트 함수 (필수)
};

// PokemonList 컴포넌트를 내보냅니다.
export default PokemonList;
