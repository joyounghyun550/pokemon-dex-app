import { createGlobalStyle } from "styled-components";

// 전역 스타일을 정의하는 GlobalStyle 컴포넌트를 생성합니다.
const GlobalStyle = createGlobalStyle`
:root {
	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif; // 기본 폰트 설정
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark; // 다크모드 및 라이트모드 지원
    color: #ffffffde; // 기본 텍스트 색상
    background-color: #ffe4b8; // 전체 배경색
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}

#root {
	max-width: 1280px;
    width: 100%;
    margin: 0 auto; // 가운데 정렬
    text-align: center;
}

body {
	margin: 0;
    display: flex;
    place-items: center; // 화면 중앙 정렬
    min-width: 320px;
    min-height: 100vh; // 최소 높이 설정 (화면 전체 채우기)
}
`;

export default GlobalStyle;
