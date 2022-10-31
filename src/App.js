import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import GlobalStyle from "./GlobalStyle";
import { useRecoilState } from "recoil";
import { langOnState } from "./store/state";
import styled from "styled-components";
import MainPage from "./components/MainPage";

function App() {
  const [, setLangOn] = useRecoilState(langOnState);
  const handleClick = () => {
    setLangOn(false);
  };
  return (
    <>
      <GlobalStyle />
      <Container onClick={handleClick}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <MainPage />
              </div>
            }
          />
          <Route path="/intro" element={<div>소개 페이지 입니다</div>} />
          <Route path="/service" element={<div>서비스 페이지 입니다</div>} />
          <Route path="/article" element={<div>보도자료 페이지 입니다</div>} />
          <Route path="/recruit" element={<div>채용 페이지 입니다 😀</div>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  -background: #e72f2c;
`;
