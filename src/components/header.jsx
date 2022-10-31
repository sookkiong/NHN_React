import { useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { langOnState } from "../store/state";

const Header = () => {
  const navigate = useNavigate();
  const tabList = [
    { id: "intro", name: "소개" },
    { id: "service", name: "서비스" },
    { id: "article", name: "보도자료" },
    { id: "recruit", name: "채용" },
  ];

  let [langOn, setLangOn] = useRecoilState(langOnState);

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
            <li
              style={{
                width: "25%",
                textAlign: "center",
                color: "#fff",
                fontWeight: "500",
              }}
              onClick={() => navigate(`/${tab.id}`)}
            >
              {tab.name}
            </li>
          ))}
        </ul>

        <div
          id="h_right"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "8%",
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
          <SideButton id="smallPage">
            <img src="/img/side.png" />
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
  padding-top: 50px;
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
