import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const tabList = [
    { id: "intro", name: "소개" },
    { id: "service", name: "서비스" },
    { id: "article", name: "보도자료" },
    { id: "recruit", name: "채용" },
  ];
  return (
    <header style={{ position: "fixed" }}>
      <h1
        id="mainlogo"
        onClick={() => {
          navigate("/");
        }}
      >
        홈
      </h1>
      <nav>
        <ul className="gnb">
          {tabList.map((tab) => (
            <li onClick={() => navigate(`/${tab.id}`)}>{tab.name}</li>
          ))}
        </ul>
      </nav>

      <div id="h_right">
        <button id="lang"></button>
        <button id="smallPage"></button>
      </div>
    </header>
  );
};

export default Header;
