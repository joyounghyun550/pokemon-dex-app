import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addPokemon } from "../redux/slices/pokemonSlice";

const PokemonDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pokemonInfo = {
    id: +queryParams.get("id"),
    img_url: queryParams.get("img_url"),
    korean_name: queryParams.get("korean_name"),
    type1: queryParams.get("type1"),
    type2: queryParams.get("type2"),
    description: queryParams.get("description"),
  };
  const dispatch = useDispatch();
  const counterReducer = useSelector((state) => {
    return state.pokemon.myPokemon;
  });

  console.log("counterReducer : ", counterReducer);

  return (
    <DetailBox>
      <div>
        <img src={pokemonInfo.img_url} alt={pokemonInfo.korean_name} />
        <h2>{pokemonInfo.korean_name}</h2>
        <p className="pokemonType">
          {pokemonInfo.ype1 && pokemonInfo.type2
            ? `특성 : ${pokemonInfo.type1}, ${pokemonInfo.type2}`
            : pokemonInfo.type1
            ? `특성 : ${pokemonInfo.type1}`
            : pokemonInfo.type2
            ? `특성 : ${pokemonInfo.type2}`
            : "타입 정보 없음"}
        </p>
        <p className="pokemonDp">설명 : {pokemonInfo.description}</p>
        <div>
          <button
            onClick={() => {
              dispatch(addPokemon(pokemonInfo));
            }}
          >
            추가하기
          </button>
          <button
            onClick={() => {
              navigate("/dex");
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </DetailBox>
  );
};

const DetailBox = styled.div`
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    div {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
  }

  img {
    width: 200px;
    height: 200px;
  }

  h2 {
    margin: 20px 0px;
    color: rgb(255, 0, 0);
  }

  p {
    color: black;
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
`;

export default PokemonDetail;
