import { useState } from "react";
import styled from "styled-components";

const Dashboard = () => {
  const [myPokemon, setMyPokemon] = useState([
    { id: 1, img_url: "/src/assets/pokeball-13iwdk7Y.png" },
    { id: 2, img_url: "/src/assets/pokeball-13iwdk7Y.png" },
    { id: 3, img_url: "/src/assets/pokeball-13iwdk7Y.png" },
    { id: 4, img_url: "/src/assets/pokeball-13iwdk7Y.png" },
    { id: 5, img_url: "/src/assets/pokeball-13iwdk7Y.png" },
    { id: 6, img_url: "/src/assets/pokeball-13iwdk7Y.png" },
  ]);

  return (
    <StDiv>
      <h2>나만의 포켓몬</h2>
      <div id="pokemon-dash-list">
        {myPokemon.map((item) => (
          <div key={item.id}>
            <img src={item.img_url} alt="포켓볼" />
          </div>
        ))}
      </div>
    </StDiv>
  );
};

const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgb(248, 248, 248);
  margin-bottom: 20px;
  border-radius: 10px;

  h2 {
    margin-bottom: 20px;
    color: rgb(255, 0, 0);
  }

  #pokemon-dash-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    width: 100%;
    justify-items: center;

    div {
      width: 100px;
      height: 100px;
      background-color: rgb(255, 255, 255);
      border: 2px dashed rgb(204, 204, 204);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;

      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;

export default Dashboard;
