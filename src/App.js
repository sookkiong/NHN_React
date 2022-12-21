import "./App.css";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { useRecoilState } from "recoil";
import { langOnState, sideOnState } from "./store/state";
import styled from "styled-components";
import MainPage from "./pages/Main";
import IntroPage from "./pages/Intro";
import MainLayout from "./layout/MainLayout";
import CompanyLayout from "./layout/CompanyLayout";
import Ethics from "./pages/Ethics";
import Service from "./pages/service";
import Article from "./pages/Article";
import { Privacy, Mails } from "./components/service/service";
import Detail from "./pages/Detail";
import Recruit from "./pages/Recruit";
import Notice from "./pages/notice";

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
      <Container onClick={handleClick}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path="service" element={<Service />} />
            <Route path="/article" element={<Article />} />
            <Route path="/article/detail" element={<Detail />} />
            <Route path="/recruit" element={<Recruit />} />
            <Route path="/recruit/notice" element={<Notice />} />
          </Route>
          <Route path="/company" element={<CompanyLayout />}>
            <Route index element={<IntroPage />} />
            <Route path="intro" element={<IntroPage />} />
            <Route path="ethics" element={<Ethics />} />
          </Route>
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/mails" element={<Mails />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
`;
