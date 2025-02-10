import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, StyledButton } from "../styles/StyledComponents";
import useAddAlert from "../hooks/useAddAlert";
import useRemoveAlert from "../hooks/useRemoveAlert";
import useScrollMemo from "../hooks/useScrollMemo";
import usePokemonIdCheck from "../hooks/usePokemonIdCheck";

const PokemonCard = ({ pokemon }) => {
  // 포켓몬을 추가 및 알림 메세지를 가져오는 함수
  const addShowAlert = useAddAlert();
  // 포켓몬을 제거 및 알림 메세지를 가져오는 함수
  const remoteShowAlret = useRemoveAlert();
  // 스크롤 최상단 이동
  const handleLinkClick = useScrollMemo();
  // 나의 포켓몬 리스트에 현재선택된 포켓몬이 있는지 체크
  const isOwned = usePokemonIdCheck(pokemon);

  return (
    <>
      {/* 포켓몬 정보를 카드 형태로 렌더링 */}
      <Card key={pokemon.id}>
        <Link onClick={handleLinkClick} to={`/Detail?id=${pokemon.id}`}>
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
          $backgroundColor={isOwned ? "#cfe033" : "#4b8a8c"}
          $hoverBackgroundColor={isOwned ? "#adbc2c" : "#025336"}
          onClick={() => {
            !isOwned ? addShowAlert(pokemon) : remoteShowAlret(pokemon.id);
          }}
        >
          {isOwned ? "보유" : "포획"}
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
