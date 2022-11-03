import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const IntroPage = () => {
  return (
    <>
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

      <div style={{ position: "fixed", zIndex: "100", marginTop: "800px" }}>
        소개 글입니다요
      </div>
    </>
  );
};

export default IntroPage;

const IntroTop = styled.div`
  width: 100%;
  height: 85vh;
  background: #e72f2c;
  position: fixed;
  background: url("./img/introbg.png") no-repeat center bottom;
  background-size: cover;
`;
const IntroInner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IntroSpan = styled.span`
  color: #fff;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.fw};
  letter-spacing: ${(props) => props.spacing};
`;

const TabUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  color: #fff;
  text-align: center;
  display: flex;
  margin-top: 30px;
  width: 16%;
  justify-content: space-between;
`;

const TabList = styled.li`
  width: 45%;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  color: #fff;
  &#TabListNum1 {
    background: #fff;
    color: #e72f2c;
    font-weight: 600;
  }
  &:hover {
    text-decoration: underline;
    font-weight: 500;
  }
`;
