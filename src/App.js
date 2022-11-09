import "./App.css";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { useRecoilState } from "recoil";
import { langOnState, sideOnState } from "./store/state";
import styled from "styled-components";
import MainPage from "./components/MainPage";
import IntroPage from "./components/IntroPage";
import MainLayout from "./layout/MainLayout";
import CompanyLayout from "./layout/CompanyLayout";

function App() {
  const [, setLangOn] = useRecoilState(langOnState);
  const [, setSideOn] = useRecoilState(sideOnState);
  const handleClick = () => {
    setLangOn(false);
    setSideOn(false);
  };

  return (
    <>
      <GlobalStyle />
      {/* <Container onClick={handleClick}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/service" element={<div>서비스 페이지 입니다</div>} />
          <Route path="/article" element={<div>보도자료 페이지 입니다</div>} />
          <Route path="/recruit" element={<div>채용 페이지 입니다 😀</div>} />
        </Routes>
      </Container> */}
      <Container onClick={handleClick}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route
              path="service"
              element={
                <div style={{ marginTop: "200px" }}>서비스 페이지 입니다</div>
              }
            />
          </Route>
          <Route path="/company" element={<CompanyLayout />}>
            <Route index element={<IntroPage />} />
            <Route path="intro" element={<IntroPage />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
`;
