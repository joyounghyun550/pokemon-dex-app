import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark;
    color: #ffffffde;
    background-color: #ffe4b8;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}

#root {
	max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
}

body {
	margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
}
`;

export default GlobalStyle;
