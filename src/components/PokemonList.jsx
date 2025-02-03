import styled from "styled-components";
import MOCK_DATA from "../data/mokadata";
import { useState } from "react";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([...MOCK_DATA]);

  console.log("pokemonList", pokemonList);
  return (
    <ListDiv>
      {pokemonList.map((pokemon) => {
        return (
          <div className="card" key={pokemon.id}>
            <img src={pokemon.img_url} />
            <div>
              <p className="pokemonName">{pokemon.korean_name}</p>
              <p className="pokemonNo">No. {"00" + pokemon.id}</p>
            </div>
            <button>추가</button>
          </div>
        );
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

  .card {
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
  }
`;

export default PokemonList;
