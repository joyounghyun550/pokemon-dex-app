import { createContext, useState } from "react";

// null은 초기값
export const PokemonContext = createContext(null);

export function PokemonProvider({ children }) {
  const [myPokemon, setMyPokemon] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);

  return (
    <PokemonContext.Provider
      value={{
        myPokemon,
        setMyPokemon,
        pokemonList,
        setPokemonList,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
