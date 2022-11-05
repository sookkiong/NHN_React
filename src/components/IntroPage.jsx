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

      <div style={{ zIndex: "100", marginTop: "200px" }}>
        <p>
          NHN은 게임, 결제, 엔터테인먼트, IT, 광고 등 IT 기반의 다양한
          사업분야에 진출, 성장해 나가고 있는 글로벌 IT 기업입니다.
        </p>
        <p>
          2013년 8월 1일, 대한민국 최대 인터넷 기업인 NHN(주)에서 분할해
          'NHN엔터테인먼트'라는 사명으로 출범했으며, 사명을 NHN으로 다시 바꾸며
          한국 IT 기업의 상진인 'NHN'의 가치를 계승해 글로벌 IT기술 기업으로
          재도약하고 있습니다. 또한 클라우드/커머스/콘텐츠/페이먼트 4대
          핵심사업을 주축으로 2030년까지 글로벌 테크 컴퍼니로의 성장 비전을
          선포했습니다.
        </p>
      </div>

      <div style={{ marginTop: "100px" }}>
        <span>NHN이 제공하는 결제 서비스</span>
        <div></div>
        <p>
          <span>Toward Art, Science &amp; Tech</span>
          새로운 세상을 만들기 위해 도전합니다.
        </p>
      </div>
    </>
  );
};

export default IntroPage;

const IntroTop = styled.div`
  width: 100%;
  height: 85%;
  background: #e72f2c;
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
