import { useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { addPokemon } from "../redux/slices/pokemonSlice";
import { Card } from "../styles/StyledComponents";
import PropTypes from "prop-types";

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
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
    </>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    korean_name: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default React.memo(PokemonCard);
