import { Outlet } from "react-router";
import Header from "../components/header";
import {
  GoTop,
  IntroInner,
  IntroSpan,
  IntroTop,
  TabList,
  TabUl,
} from "../components/IntroPage";

const CompanyLayout = () => {
  return (
    <>
      <Header />
      <IntroTop>
        <IntroInner>
          <IntroSpan size="62px" fw="500" spacing="3px">
            회사소개
          </IntroSpan>
          <IntroSpan size="16px" spacing="1px">
            글로벌 IT기업 NHN은 Next Human Network의 뜻을 가집니다.
          </IntroSpan>
          <TabUl>
            <TabList id="TabListNum1">회사소개</TabList>
            <TabList>기업윤리경영</TabList>
          </TabUl>
        </IntroInner>
      </IntroTop>
      <GoTop>↑</GoTop>
      <Outlet />
    </>
  );
};

export default CompanyLayout;
