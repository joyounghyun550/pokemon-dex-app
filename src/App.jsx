import GlobalStyle from "./GlobalStyle";
import Router from "./shared/Router";

function App() {
  console.log("App 렌더링");
  return (
    <>
      {/* GlobalStyle 컴포넌트를 렌더링하여 전역 스타일을 적용합니다. */}
      <GlobalStyle />
      {/* Router 컴포넌트를 렌더링하여 애플리케이션의 라우팅을 관리합니다. */}
      <Router />
    </>
  );
}

export default App;
