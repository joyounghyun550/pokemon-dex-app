import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const PokemonCard = () => {
  const navigate = useNavigate();
  const { pokemonList, myPokemon, setMyPokemon } = useContext(PokemonContext);

  // 포켓몬 추가 함수
  const addPokemon = (pokemon) => {
    // 최대 6개까지만 선택 가능하도록 제한
    if (myPokemon.length > 5) {
      return alert("최대 6개의 포켓몬만 선택 할 수 있습니다.");
    }

    // 이미 선택된 포켓몬인지 확인
    if (myPokemon.some((item) => item.id === pokemon.id)) {
      alert("해당 포켓몬이 이미 존재합니다.");
    } else {
      // 선택되지 않은 포켓몬이면 myPokemon 배열에 추가
      setMyPokemon([...myPokemon, pokemon]);
    }
  };

  return (
    <>
      {pokemonList.map((pokemon) => {
        return (
          <Card key={pokemon.id}>
            <div
              onClick={() => {
                const queryParams = new URLSearchParams({
                  id: pokemon.id,
                  name: pokemon.korean_name,
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
                addPokemon(pokemon);
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

export default PokemonCard;
