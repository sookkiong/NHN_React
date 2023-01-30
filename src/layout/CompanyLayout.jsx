import { Outlet } from "react-router";
import Header from "../components/header";
import { useNavigate, useLocation } from "react-router";
import {
  FLinkContainer,
  FList,
  FLogo,
  Footer,
  FooterLeft,
  FooterRight,
  Fsns,
  GoTop,
  IntroInner,
  IntroSpan,
  IntroTop,
  TabList,
  TabUl,
} from "../pages/Intro";
import { tabMenu } from "../components/company/menus";

// company(intro, ethics) 공통 Layout
const CompanyLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const TabChange = (value) => {
    const id = location.pathname.includes(value)
      ? "nowOn"
      : location.pathname === "/company" && value === "intro"
      ? "nowOn"
      : undefined;
    return id;
  };

  return (
    <>
      <Header />

      <IntroTop>
        <IntroInner>
          <IntroSpan>
            {location.pathname.includes("intro")
              ? tabMenu[0].name
              : tabMenu[1].name}
          </IntroSpan>
          <IntroSpan id="explain" size="16px" spacing="1px">
            {location.pathname.includes("intro")
              ? tabMenu[0].des
              : tabMenu[1].des}
          </IntroSpan>

          <TabUl>
            <TabList
              id={TabChange("intro")}
              onClick={() => {
                navigate("/company/intro");
              }}
            >
              회사소개
            </TabList>
            <TabList
              id={TabChange("ethics")}
              onClick={() => {
                navigate("/company/ethics");
              }}
            >
              기업윤리경영
            </TabList>
          </TabUl>
        </IntroInner>
      </IntroTop>

      <GoTop onClick={() => window.scrollTo(0, 0)}>↑</GoTop>

      <Outlet />

      <Footer>
        <FooterLeft>
          <FLogo>
            <img src="/img/f_logo.png" alt="footer 로고" width="100%" />
          </FLogo>

          <FLinkContainer>
            <FList
              onClick={() => {
                window.open("/privacy", "", "width=800 height=800");
              }}
            >
              개인정보처리방침
            </FList>
            <FList id="sepa">|</FList>
            <FList
              onClick={() => {
                window.open("/mails", "", "width=500,height=500");
              }}
            >
              대표메일
            </FList>
          </FLinkContainer>
        </FooterLeft>

        <FooterRight>
          <Fsns bg="1" href="#"></Fsns>
          <Fsns bg="2" href="#"></Fsns>
          <Fsns bg="3" href="#"></Fsns>
        </FooterRight>
      </Footer>
    </>
  );
};

export default CompanyLayout;
