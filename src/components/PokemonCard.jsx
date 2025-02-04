import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { memo, useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useDispatch } from "react-redux";
import { addPokemon } from "../redux/slices/pokemonSlice";

const PokemonCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pokemonList } = useContext(PokemonContext);

  return (
    <>
      {pokemonList.map((pokemon) => {
        return (
          <Card key={pokemon.id}>
            <div
              onClick={() => {
                const queryParams = new URLSearchParams({
                  id: pokemon.id,
                  korean_name: pokemon.korean_name,
                  img_url: pokemon.img_url,
                  description: pokemon.description,
                  type1: pokemon.types[0] || "",
                  type2: pokemon.types[1] || "",
                });

                navigate(`/PokemonDetail?${queryParams.toString()}`);
              }}
            >
              <img src={pokemon.img_url} alt={pokemon.korean_name} />
              <div>
                <p className="pokemonName">{pokemon.korean_name}</p>
                <p className="pokemonNo">No. {"00" + pokemon.id}</p>
              </div>
            </div>
            <button
              onClick={() => {
                dispatch(addPokemon(pokemon));
              }}
            >
              추가
            </button>
          </Card>
        );
      })}
    </>
  );
};

const Card = styled.div`
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

export default memo(PokemonCard);
