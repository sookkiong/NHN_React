import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/header";

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Header />
      <div style={{ height: "100vh", background: "red" }}>
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ paddingTop: "500px" }}>메인 페이지 입니다</div>
            }
          />
          <Route path="/intro" element={<div>소개 페이지 입니다</div>} />
          <Route path="/service" element={<div>서비스 페이지 입니다</div>} />
          <Route path="/article" element={<div>보도자료 페이지 입니다</div>} />
          <Route path="/recruit" element={<div>채용 페이지 입니다 😀</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
