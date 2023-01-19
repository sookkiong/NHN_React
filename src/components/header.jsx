import { useNavigate, useLocation } from "react-router";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { langOnState, sideOnState } from "../store/state";
import SideBox from "./main/SideInfo";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabList = [
    { id: "company", name: "소개" },
    { id: "service", name: "서비스" },
    { id: "article", name: "보도자료" },
    { id: "recruit", name: "채용" },
  ];

  let [langOn, setLangOn] = useRecoilState(langOnState);
  let [sideOn, setSideOn] = useRecoilState(sideOnState);

  return (
    <Wrapper id={location.pathname === "/" ? "home" : undefined}>
      <HeaderInner>
        <MainLogo src="/img/mainlogo.png" onClick={() => navigate("/")} />
        <MainNav>
          {tabList.map((tab) => (
            <MenuList
              id={location.pathname.includes(tab.id) ? "selected" : undefined}
              onClick={() => {
                navigate(`/${tab.id}`);
              }}
            >
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

        <MainNav_tab />
        <MainLogo_tab onClick={() => navigate("/")} />
        <LangNNews_tab>
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
        </LangNNews_tab>
      </HeaderInner>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
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
  width: 110px;
  height: auto;
  cursor: pointer;
  @media all and (max-width: 960px) {
    display: none;
  }
`;
const MainNav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 45%;
  justify-content: space-between;
  @media all and (max-width: 960px) {
    display: none;
  }
`;
const LangNNews = styled.div`
  display: flex;
  justify-content: space-between;
  width: 7%;
  @media all and (max-width: 960px) {
    display: none;
  }
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
  &#selected {
    background: #fff;
    color: #e72f2c;
    border-radius: 14px;
    font-weight: 600;
  }
`;

// 반응형(태블릿:960px / 모바일:550px)
const MainNav_tab = styled.div`
  display: none;
  width: 30px;
  height: 30px;
  background: url("/img/ham.png") no-repeat center center;
  background-size: contain;
  @media all and (max-width: 960px) {
    display: block;
  }
`;
const MainLogo_tab = styled.div`
  display: none;
  width: 30%;
  height: 30px;
  background: url("/img/mainlogo.png") no-repeat center center;
  background-size: contain;
  @media all and (max-width: 960px) {
    display: block;
  }
`;
const LangNNews_tab = styled.div`
  display: none;
  @media all and (max-width: 960px) {
    display: flex;
    width: 11%;
    justify-content: space-between;
  }
`;
