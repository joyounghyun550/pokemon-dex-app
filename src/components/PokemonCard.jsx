// styled-components를 가져와서 스타일링을 적용할 수 있도록 합니다.
import styled from "styled-components";

// PropTypes를 가져와서 prop의 타입을 검증합니다.
import PropTypes from "prop-types";

// PokemonCard 컴포넌트 정의
const PokemonCard = ({ pokemon, myPokemon, setMyPokemon }) => {
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
      {/* 포켓몬 이미지 출력 */}
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <div>
        {/* 포켓몬 이름 */}
        <p className="pokemonName">{pokemon.korean_name}</p>
        {/* 포켓몬 번호 (앞에 "00"을 추가하여 3자리로 표시) */}
        <p className="pokemonNo">No. {"00" + pokemon.id}</p>
      </div>
      {/* 포켓몬 추가 버튼 */}
      <button onClick={addPokemon}>추가</button>
    </Card>
  );
};

// PokemonCard 컴포넌트의 스타일을 정의
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

  /* 포켓몬 이미지 스타일 */
  img {
    width: 100px;
    height: 100px;
  }

  div {
    margin-top: 10px;

    /* 포켓몬 이름 스타일 */
    .pokemonName {
      font-size: 14px;
      font-weight: bold;
      margin: 5px 0px;
      color: black;
    }

    /* 포켓몬 번호 스타일 */
    .pokemonNo {
      font-size: 12px;
      color: rgb(102, 102, 102);
    }
  }

  /* 포켓몬 추가 버튼 스타일 */
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
    id: PropTypes.number.isRequired, // 포켓몬 ID (숫자)
    img_url: PropTypes.string.isRequired, // 포켓몬 이미지 URL (문자열)
    korean_name: PropTypes.string.isRequired, // 포켓몬 이름 (문자열)
  }).isRequired,
  myPokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // 포켓몬 ID (숫자)
      img_url: PropTypes.string.isRequired, // 포켓몬 이미지 URL (문자열)
      korean_name: PropTypes.string.isRequired, // 포켓몬 이름 (문자열)
    })
  ).isRequired,
  setMyPokemon: PropTypes.func.isRequired, // 포켓몬을 추가하는 상태 업데이트 함수 (필수)
};

// PokemonCard 컴포넌트를 내보냅니다.
export default PokemonCard;
