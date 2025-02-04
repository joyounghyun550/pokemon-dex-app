import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const PokemonDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const img_url = queryParams.get("img_url");
  const name = queryParams.get("name");
  const type1 = queryParams.get("type1");
  const type2 = queryParams.get("type2");
  const description = queryParams.get("description");

  return (
    <DetailBox>
      <div>
        <img src={img_url} alt={name} />
        <h2>{name}</h2>
        <p className="pokemonType">
          {type1 && type2
            ? `특성 : ${type1}, ${type2}`
            : type1
            ? `특성 : ${type1}`
            : type2
            ? `특성 : ${type2}`
            : "타입 정보 없음"}
        </p>
        <p className="pokemonDp">설명 : {description}</p>
        <button
          onClick={() => {
            navigate("/dex");
          }}
        >
          뒤로가기
        </button>
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
