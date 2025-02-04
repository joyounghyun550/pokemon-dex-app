import styled from "styled-components";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon, myPokemon, setMyPokemon }) => {
  const navigate = useNavigate();

  // 포켓몬 추가 함수
  const addPokemon = () => {
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
      <button onClick={addPokemon}>추가</button>
    </Card>
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

// PropTypes를 사용하여 PokemonCard 컴포넌트의 props 타입을 검증
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img_url: PropTypes.string.isRequired,
    korean_name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  myPokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img_url: PropTypes.string.isRequired,
      korean_name: PropTypes.string.isRequired,
    })
  ).isRequired,
  setMyPokemon: PropTypes.func.isRequired,
};

export default PokemonCard;
