import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import React from "react";
import { RootDiv } from "../styles/StyledComponents";

const Dex = () => {
  return (
    <RootDiv>
      <div className="app-container">
        {/* Dashboard 컴포넌트 */}
        <Dashboard />

        {/* PokemonList 컴포넌트 */}
        <PokemonList />
      </div>
    </RootDiv>
  );
};

export default React.memo(Dex);
