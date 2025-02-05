import MOCK_DATA from "../data/mokadata";
import { useContext, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { PokemonContext } from "../context/PokemonContext";
import { ListDiv } from "../styles/StyledComponents";

const PokemonList = () => {
  const { pokemonList, setPokemonList } = useContext(PokemonContext);

  useEffect(() => {
    setPokemonList(MOCK_DATA);
  }, [setPokemonList]); // 컴포넌트가 마운트될 때 한 번만 실행

  if (!pokemonList) return <p>Loading...</p>; // 데이터 로딩 중 표시

  return (
    <ListDiv>
      {/* pokemonList에 있는 모든 포켓몬을 PokemonCard 컴포넌트로 렌더링 */}
      <PokemonCard />
    </ListDiv>
  );
};

export default PokemonList;
