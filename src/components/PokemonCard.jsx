import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPokemon } from "../redux/slices/pokemonSlice";
import PropTypes from "prop-types";
import { Card, StyledButton } from "../styles/StyledComponents";

const PokemonCard = ({ pokemon }) => {
  // navigate는 React Router에서 페이지 이동을 위해 사용
  const navigate = useNavigate();
  // 리덕스를 사용하여 포켓몬을 추가하는 dispatch 함수
  const dispatch = useDispatch();

  return (
    <>
      <Card key={pokemon.id}>
        <div
          onClick={() => {
            // 포켓몬 상세 페이지로 이동하는 URL 쿼리 파라미터 생성
            const queryParams = new URLSearchParams({
              id: pokemon.id,
              korean_name: pokemon.korean_name,
              img_url: pokemon.img_url,
              description: pokemon.description,
              type1: pokemon.types[0] || "", // 첫 번째 타입이 없으면 빈 문자열로 처리
              type2: pokemon.types[1] || "", // 두 번째 타입이 없으면 빈 문자열로 처리
            });

            // 생성된 쿼리 파라미터와 함께 상세 페이지로 이동
            navigate(`/Detail?${queryParams.toString()}`);
          }}
        >
          {/* 포켓몬 이미지와 이름, 번호를 출력 */}
          <img src={pokemon.img_url} alt={pokemon.korean_name} />
          <div>
            <p className="pokemonName">{pokemon.korean_name}</p>
            <p className="pokemonNo">No. {"00" + pokemon.id}</p>
          </div>
        </div>

        {/* 포켓몬을 내 목록에 추가하는 버튼 */}
        <StyledButton
          onClick={() => {
            // 리덕스를 사용하여 포켓몬 추가
            dispatch(addPokemon(pokemon));
          }}
        >
          추가
        </StyledButton>
      </Card>
    </>
  );
};

// PokemonCard 컴포넌트의 propTypes 설정: pokemon 객체는 필수로 특정 형태를 가져야 함
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
