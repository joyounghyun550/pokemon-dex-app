// react-router-dom에서 BrowserRouter, Route, Routes를 가져옵니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 애플리케이션에서 사용할 페이지 컴포넌트를 가져옵니다.
import Dex from "../pages/Dex";
import Home from "../pages/Home";

// 라우터를 정의하는 컴포넌트입니다.
const Router = () => {
  return (
    // BrowserRouter를 사용하여 라우팅 기능을 제공합니다.
    <BrowserRouter>
      {/* Routes 컴포넌트는 여러 개의 Route를 감싸는 역할을 합니다. */}
      <Routes>
        {/* "/" 경로에 접근하면 Home 컴포넌트를 렌더링합니다. */}
        <Route path="/" element={<Home />} />

        {/* "/dex" 경로에 접근하면 Dex 컴포넌트를 렌더링합니다. */}
        <Route path="/dex" element={<Dex />} />
      </Routes>
    </BrowserRouter>
  );
};

// Router 컴포넌트를 내보내서 다른 곳에서 사용할 수 있도록 합니다.
export default Router;
