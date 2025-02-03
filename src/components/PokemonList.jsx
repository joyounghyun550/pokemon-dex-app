import styled from "styled-components";
import MOCK_DATA from "../data/mokadata";
import { useState } from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([...MOCK_DATA]);

  console.log("pokemonList", pokemonList);
  return (
    <ListDiv>
      {pokemonList.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </ListDiv>
  );
};

const ListDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
`;

export default PokemonList;
