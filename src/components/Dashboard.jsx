// styled-components를 가져와서 스타일링을 적용할 수 있도록 합니다.
import styled from "styled-components";

// PropTypes를 가져와서 prop의 타입을 검증합니다.
import PropTypes from "prop-types";

// Dashboard 컴포넌트 정의
const Dashboard = ({ myPokemon }) => {
  // 남은 포켓볼 슬롯을 렌더링하는 함수
  const renderPokeballs = () => {
    const pokeballCount = 6 - myPokemon.length; // 최대 6개의 슬롯에서 현재 myPokemon 개수를 뺀 나머지 개수만큼 포켓볼을 추가
    const pokeballs = [];

    for (let i = 0; i < pokeballCount; i++) {
      pokeballs.push(
        <div className="BallDiv" key={i}>
          {/* 포켓볼 이미지 출력 */}
          <img src="/src/assets/pokeball-13iwdk7Y.png" alt="포켓볼" />
        </div>
      );
    }
    return pokeballs; // 포켓볼 div 배열 반환
  };

  return (
    <StDiv>
      {/* 대시보드 제목 */}
      <h2>나만의 포켓몬</h2>

      {/* 선택한 포켓몬 목록을 보여주는 컨테이너 */}
      <div id="pokemon-dash-list">
        {/* myPokemon 배열을 순회하며 각 포켓몬을 표시 */}
        {myPokemon.map((item) => (
          <div className="MypokemonDiv" key={item.id}>
            {/* 포켓몬 이미지 */}
            <img src={item.img_url} alt={item.korean_name} />
            <div>
              {/* 포켓몬 이름 */}
              <p className="pokemonName">{item.korean_name}</p>
              {/* 포켓몬 번호 (앞에 "00"을 추가하여 3자리로 표시) */}
              <p className="pokemonNo">No. {"00" + item.id}</p>
            </div>
            {/* 포켓몬 삭제 버튼 */}
            <button>삭제</button>
          </div>
        ))}

        {/* 남은 슬롯을 포켓볼 이미지로 채움 */}
        {renderPokeballs()}
      </div>
    </StDiv>
  );
};

// Dashboard 컴포넌트의 스타일을 정의
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
    color: rgb(255, 0, 0); /* 제목을 빨간색으로 설정 */
  }

  /* 포켓몬 목록 스타일 */
  #pokemon-dash-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr); /* 6개의 칼럼으로 정렬 */
    gap: 10px;
    width: 100%;
    justify-items: center;

    /* 선택된 포켓몬을 감싸는 컨테이너 스타일 */
    .MypokemonDiv {
      border: 1px solid rgb(221, 221, 221);
      background-color: rgb(255, 255, 255);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
      text-align: center;
      padding: 10px;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;

      img {
        width: 100px;
        height: 100px;
      }

      div {
        margin-top: 10px;
      }

      .pokemonName {
        font-size: 14px;
        font-weight: bold;
        margin: 5px 0px;
        color: black;
      }

      .pokemonNo {
        font-size: 12px;
        color: rgb(102, 102, 102);
      }

      /* 포켓몬 삭제 버튼 스타일 */
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
    }
  }

  /* 빈 슬롯(포켓볼)이 들어가는 div 스타일 */
  .BallDiv {
    width: 100px;
    height: 100px;
    background-color: rgb(255, 255, 255);
    border: 2px dashed rgb(204, 204, 204); /* 점선 테두리로 빈 슬롯을 표현 */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    img {
      width: 50px;
      height: 50px;
    }
  }
`;

// PropTypes를 사용하여 Dashboard 컴포넌트의 props 타입을 검증
Dashboard.propTypes = {
  myPokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // 포켓몬 ID (숫자)
      img_url: PropTypes.string.isRequired, // 포켓몬 이미지 URL (문자열)
      korean_name: PropTypes.string.isRequired, // 포켓몬 이름 (문자열)
    })
  ).isRequired,
};

// Dashboard 컴포넌트를 내보냅니다.
export default Dashboard;
