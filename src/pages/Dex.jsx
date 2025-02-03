import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  return (
    <RootDiv>
      <div className="app-container">
        <Dashboard />
        <PokemonList />
      </div>
    </RootDiv>
  );
};

const RootDiv = styled.div`
  width: 100%;

  .app-container {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
`;

export default Dex;
