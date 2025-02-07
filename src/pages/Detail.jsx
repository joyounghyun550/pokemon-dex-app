import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { DetailBox } from "../styles/StyledComponents";
import MOCK_DATA from "../data/mokadata";
import useHandleRemovePokemon from "../hooks/useRemoveToggle";
import useAlert from "../hooks/useAlert";

const Detail = () => {
  // Redux 상태 관리
  const dispatch = useDispatch();
  const myPokemonList = useSelector((state) => state.pokemon.myPokemon);

  // URL에서 포켓몬 ID 가져오기
  const [query] = useSearchParams();
  const detailPokemonId = +query.get("id");

  // 선택한 포켓몬 데이터 찾기
  const selectPokemon = MOCK_DATA.find(
    (pokemon) => pokemon.id === detailPokemonId
  );

  // 포켓몬 삭제 및 알림 훅 가져오기
  const handleRemovePokemon = useHandleRemovePokemon();
  const { addShowAlert } = useAlert();

  // 포켓몬 추가 버튼 핸들러
  const addBtnHandler = (pokemon) => {
    addShowAlert(pokemon, myPokemonList, dispatch);
  };

  // 포켓몬이 존재하지 않을 경우 예외 처리
  if (!selectPokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  // 현재 포켓몬이 내 목록에 있는지 확인
  const isPokemonInMyList = myPokemonList.some(
    (myPokemon) => myPokemon.id === selectPokemon.id
  );

  return (
    <DetailBox>
      <div>
        {/* 포켓몬 이미지 및 이름 표시 */}
        <img src={selectPokemon.img_url} alt={selectPokemon.korean_name} />
        <h2>{selectPokemon.korean_name}</h2>

        {/* 포켓몬 특성 정보 표시 (없을 경우 '타입 정보 없음' 출력) */}
        <p className="pokemonType">
          {selectPokemon.type1 && selectPokemon.type2
            ? `특성 : ${selectPokemon.type1}, ${selectPokemon.type2}`
            : selectPokemon.type1
            ? `특성 : ${selectPokemon.type1}`
            : selectPokemon.type2
            ? `특성 : ${selectPokemon.type2}`
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
                : addBtnHandler(selectPokemon);
            }}
          >
            {isPokemonInMyList ? "삭제하기" : "추가하기"}
          </button>

          {/* 뒤로가기 버튼 */}
          <Link to={"/dex"}>
            <button>뒤로가기</button>
          </Link>
        </div>
      </div>
    </DetailBox>
  );
};

export default Detail;
