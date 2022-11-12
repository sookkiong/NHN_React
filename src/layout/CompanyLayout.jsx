import { Outlet } from "react-router";
import Header from "../components/header";
import { useNavigate, useLocation } from "react-router";
import {
  FContainer,
  FLink,
  FLinkContainer,
  FList,
  FLogo,
  Footer,
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
    const id = location.pathname.includes(value) ? "nowOn" : undefined;
    return id;
  };

  return (
    <>
      <Header />

      <IntroTop>
        <IntroInner>
          <IntroSpan size="62px" fw="500" spacing="3px">
            {location.pathname.includes("intro")
              ? tabMenu[0].name
              : tabMenu[1].name}
          </IntroSpan>
          <IntroSpan size="16px" spacing="1px">
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

      <GoTop>↑</GoTop>

      <Outlet />

      <Footer>
        <FContainer>
          <FLogo>
            <img src="/img/f_logo.png" />
          </FLogo>
          <FLinkContainer>
            <FList>
              <FLink href="#">개인정보처리방침</FLink>
            </FList>
            <FList id="sepa">|</FList>
            <FList>
              <FLink href="#">대표메일</FLink>
            </FList>
          </FLinkContainer>
        </FContainer>

        <FContainer>
          <Fsns bg="1" href="#"></Fsns>
          <Fsns bg="2" href="#"></Fsns>
          <Fsns bg="3" href="#"></Fsns>
        </FContainer>
      </Footer>
    </>
  );
};

export default CompanyLayout;
