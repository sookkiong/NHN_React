import { useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { langOnState, sideOnState } from "../store/state";

const Header = () => {
  const navigate = useNavigate();
  const tabList = [
    { id: "intro", name: "소개" },
    { id: "service", name: "서비스" },
    { id: "article", name: "보도자료" },
    { id: "recruit", name: "채용" },
  ];

  let [langOn, setLangOn] = useRecoilState(langOnState);
  let [sideOn, setSideOn] = useRecoilState(sideOnState);

  return (
    <StyledHeader>
      <nav
        style={{
          display: "flex",
          width: "80%",
          justifyContent: "space-between",
        }}
      >
        <MainLogo src="/img/mainlogo.png" />
        <ul
          className="gnb"
          style={{
            display: "flex",
            listStyle: "none",
            margin: "0",
            padding: "0",
            width: "45%",
            justifyContent: "space-between",
          }}
        >
          {tabList.map((tab) => (
            <MenuList onClick={() => navigate(`/${tab.id}`)}>
              {tab.name}
            </MenuList>
          ))}
        </ul>

        <div
          id="h_right"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "7%",
          }}
        >
          <SideButton
            id="lang"
            onClick={(e) => {
              e.stopPropagation();
              setLangOn(!langOn);
            }}
          >
            <img src="/img/lang.png" />
            {langOn ? (
              <ul
                style={{
                  position: "absolute",
                  padding: "0",
                  bottom: "-85px",
                  right: "-25px",
                  backgroundColor: "rgba(255,255,255,0.5)",
                }}
              >
                <LangList>한국어</LangList>
                <LangList>ENG</LangList>
              </ul>
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
            {sideOn ? <SideInfo /> : null}
          </SideButton>
        </div>
      </nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 48px 0;
  z-index: 1;
`;

const MainLogo = styled.img`
  width: 8%;
  height: auto;
`;

const SideButton = styled.button`
  background: none;
  border: none;
  &#lang {
    position: relative;
  }
  cursor: pointer;
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
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 40%);
`;

const MenuList = styled.li`
  width: 20%;
  text-align: center;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #e72f2c;
    border-radius: 14px;
    font-weight: 600;
  }
`;
