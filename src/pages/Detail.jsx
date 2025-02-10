import { Link } from "react-router-dom";
import { DetailBox } from "../styles/StyledComponents";
import useHandleRemovePokemon from "../hooks/useRemoveAlert";
import useAlert from "../hooks/useAddAlert";
import useSelectPokemon from "../hooks/useSelectPokemon";
import MOCK_DATA from "../data/mokadata";
import left from "../assets/image/left-image-removebg-preview.png";
import right from "../assets/image/right-image-removebg-preview.png";

const Detail = () => {
  // 포켓몬 삭제 및 알림 훅 가져오기
  const handleRemovePokemon = useHandleRemovePokemon();
  // 포켓몬 추가 버튼 핸들러
  const addShowAlert = useAlert();
  const { selectPokemon, isPokemonInMyList } = useSelectPokemon();

  return (
    <DetailBox>
      <Link
        to={
          selectPokemon.id === 1
            ? `/detail?id=${MOCK_DATA.length}`
            : `/detail?id=${selectPokemon.id - 1}`
        }
      >
        <img src={left} />
      </Link>
      <div>
        {/* 포켓몬 이미지 및 이름 표시 */}
        <img src={selectPokemon.img_url} alt={selectPokemon.korean_name} />
        <h2>{selectPokemon.korean_name}</h2>

        {/* 포켓몬 특성 정보 표시 (없을 경우 '타입 정보 없음' 출력) */}
        <p className="pokemonType">
          {selectPokemon.types[0] && selectPokemon.types[1]
            ? `특성 : ${selectPokemon.types[0]}, ${selectPokemon.types[1]}`
            : selectPokemon.types[0]
            ? `특성 : ${selectPokemon.types[0]}`
            : selectPokemon.types[1]
            ? `특성 : ${selectPokemon.types[1]}`
            : "타입 정보 없음"}
        </p>

        {/* 포켓몬 설명 표시 */}
        <p className="pokemonDp">설명 : {selectPokemon.description}</p>

        <div>
          {/* 추가/삭제 버튼 (포켓몬이 내 목록에 있으면 삭제, 없으면 추가) */}
          <button
            className="detail-add-btn"
            onClick={() => {
              isPokemonInMyList
                ? handleRemovePokemon(selectPokemon.id)
                : addShowAlert(selectPokemon);
            }}
          >
            {isPokemonInMyList ? "방생하기" : "포획하기"}
          </button>

          {/* 뒤로가기 버튼 */}
          <Link to={"/dex"}>
            <button>뒤로가기</button>
          </Link>
        </div>
      </div>
      <Link
        to={
          selectPokemon.id === MOCK_DATA.length
            ? `/detail?id=1`
            : `/detail?id=${selectPokemon.id + 1}`
        }
      >
        <img src={right} />
      </Link>
    </DetailBox>
  );
};

export default Detail;
