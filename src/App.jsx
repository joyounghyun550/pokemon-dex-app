// 전역 스타일을 적용하기 위해 GlobalStyle 컴포넌트를 가져옵니다.
import GlobalStyle from "./GlobalStyle";

// 애플리케이션의 라우팅을 담당하는 Router 컴포넌트를 가져옵니다.
import Router from "./shared/Router";

// App 컴포넌트는 애플리케이션의 루트 컴포넌트 역할을 합니다.
function App() {
  return (
    <>
      {/* GlobalStyle 컴포넌트를 렌더링하여 전역 스타일을 적용합니다. */}
      <GlobalStyle />

      {/* Router 컴포넌트를 렌더링하여 애플리케이션의 라우팅을 관리합니다. */}
      <Router />
    </>
  );
}

// App 컴포넌트를 내보내서 다른 파일에서 사용할 수 있도록 합니다.
export default App;
