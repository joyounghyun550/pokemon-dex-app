import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Card, StyledButton } from "../styles/StyledComponents";
import useAlert from "../hooks/useAlert";

const PokemonCard = ({ pokemon }) => {
  // 리덕스 디스패치 함수: 포켓몬을 내 목록에 추가하는 데 사용
  const dispatch = useDispatch();

  // 내 포켓몬 목록의 개수를 리덕스에서 가져옵니다.
  const myPokemonList = useSelector((state) => state.pokemon.myPokemon);

  // 알림을 처리하는 훅을 사용하여 addShowAlert 함수 가져오기
  const { addShowAlert } = useAlert();

  // '추가' 버튼 클릭 시 호출되는 핸들러 함수
  const addBtnHandler = (pokemon) => {
    addShowAlert(pokemon, myPokemonList, dispatch); // 포켓몬 추가 알림 처리
  };

  return (
    <>
      {/* 포켓몬 정보를 카드 형태로 렌더링 */}
      <Card key={pokemon.id}>
        <Link to={`/Detail?id=${pokemon.id}`}>
          <div>
            {/* 포켓몬 이미지와 이름, 번호를 표시 */}
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
            <div>
              <p className="pokemonName">{pokemon.korean_name}</p>
              <p className="pokemonNo">No. {"00" + pokemon.id}</p>
            </div>
          </div>
        </Link>
        {/* '추가' 버튼: 포켓몬을 내 목록에 추가 */}
        <StyledButton
          onClick={() => {
            addBtnHandler(pokemon); // 포켓몬 추가 함수 호출
          }}
        >
          추가
        </StyledButton>
      </Card>
    </>
  );
};

// PokemonCard 컴포넌트에 전달되는 props에 대한 타입을 정의
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    korean_name: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PokemonCard;
