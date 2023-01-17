import { useNavigate, useLocation } from "react-router";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { langOnState, sideOnState } from "../store/state";
import SideBox from "./main/SideInfo";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabList = [
    { id: "company/intro", name: "소개" },
    { id: "service", name: "서비스" },
    { id: "article", name: "보도자료" },
    { id: "recruit", name: "채용" },
  ];

  let [langOn, setLangOn] = useRecoilState(langOnState);
  let [sideOn, setSideOn] = useRecoilState(sideOnState);

  return (
    <StyledHeader id={location.pathname === "/" ? "home" : undefined}>
      <HeaderInner>
        <MainLogo src="/img/mainlogo.png" onClick={() => navigate("/")} />

        <MainNav>
          {tabList.map((tab) => (
            <MenuList onClick={() => navigate(`/${tab.id}`)}>
              {tab.name}
            </MenuList>
          ))}
        </MainNav>

        <LangNNews>
          <SideButton
            id="lang"
            onClick={(e) => {
              e.stopPropagation();
              setLangOn(!langOn);
            }}
          >
            <img src="/img/lang.png" />
            {langOn ? (
              <LangBox>
                <LangList>한국어</LangList>
                <LangList>ENG</LangList>
              </LangBox>
            ) : null}
          </SideButton>

          <SideButton
            id="smallPage"
            onClick={(e) => {
              e.stopPropagation();
              setSideOn(!sideOn);
            }}
          >
            <img src="/img/side.png" />
            {sideOn ? <SideBox /> : null}
          </SideButton>
        </LangNNews>
      </HeaderInner>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 60px 0;
  z-index: 1;
  background: #e72f2c;
  position: relative;
  top: 0;
  &#home {
    position: absolute;
    top: 0;
  }
`;
const HeaderInner = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;

const MainLogo = styled.img`
  width: 9%;
  height: auto;
  cursor: pointer;
`;
const MainNav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 45%;
  justify-content: space-between;
`;
const LangNNews = styled.div`
  display: flex;
  justify-content: space-between;
  width: 7%;
`;

const SideButton = styled.button`
  background: none;
  border: none;
  &#lang {
    position: relative;
  }
  cursor: pointer;
`;
const LangBox = styled.ul`
  position: absolute;
  padding: 0;
  bottom: -85px;
  right: -25px;
  background-color: rgba(255, 255, 255, 0.5);
`;

const LangList = styled.li`
  list-style: none;
  width: 80px;
  padding: 0px 5px;
  margin: 10px 0px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const SideInfo = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 20%;
  height: 100%;
  background: #e72f2c;
`;

const MenuList = styled.li`
  width: 20%;
  text-align: center;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  padding: 3px 0;
  &:hover {
    background: #fff;
    color: #e72f2c;
    border-radius: 14px;
    font-weight: 600;
  }
`;
