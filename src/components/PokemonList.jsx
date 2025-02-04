import styled from "styled-components";
import PropTypes from "prop-types";
import MOCK_DATA from "../data/mokadata";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ myPokemon, setMyPokemon }) => {
  const [pokemonList, setPokemonList] = useState(null);

  useEffect(() => {
    setPokemonList(MOCK_DATA);
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  if (!pokemonList) return <p>Loading...</p>; // 데이터 로딩 중 표시

  return (
    <ListDiv>
      {/* pokemonList에 있는 모든 포켓몬을 PokemonCard 컴포넌트로 렌더링 */}
      {pokemonList.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            myPokemon={myPokemon}
            setMyPokemon={setMyPokemon}
          />
        );
      })}
    </ListDiv>
  );
};

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
  myPokemon: PropTypes.array.isRequired,
  setMyPokemon: PropTypes.func.isRequired,
};

export default PokemonList;
