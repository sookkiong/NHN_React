import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import HistoryContent from "./History";

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

      <Para>
        <div style={{ width: "45%" }}>
          <p style={{ fontSize: "32px", fontWeight: "500" }}>
            NHN은 게임, 결제, 엔터테인먼트, IT, 광고 등 IT 기반의 다양한
            사업분야에 진출, 성장해 나가고 있는 글로벌 IT 기업입니다.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "28px", color: "#7c7c7c" }}>
            2013년 8월 1일, 대한민국 최대 인터넷 기업인 NHN(주)에서 분할해
            'NHN엔터테인먼트'라는 사명으로 출범했으며, 사명을 NHN으로 다시
            바꾸며 한국 IT 기업의 상진인 'NHN'의 가치를 계승해 글로벌 IT기술
            기업으로 재도약하고 있습니다. 또한 클라우드/커머스/콘텐츠/페이먼트
            4대 핵심사업을 주축으로 2030년까지 글로벌 테크 컴퍼니로의 성장
            비전을 선포했습니다.
          </p>
        </div>
      </Para>

      <Para id="slogan">
        <img
          src="/img/bodybg.png"
          style={{
            position: "absolute",
            top: "-180px",
            left: "200px",
            width: "650px",
          }}
        />
        <div style={{ width: "60%" }}>
          <span
            style={{
              display: "block",
              marginBottom: "10px",
              paddingRight: "15px",
              color: "#7c7c7c",
              width: "100%",
              textAlign: "right",
            }}
          >
            NHN이 제공하는 결제 서비스
          </span>
          <div
            style={{
              width: "100%",
              height: "48vh",
              background: `url("./img/sect2img.jpg") no-repeat center center`,
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <span
              style={{
                display: "block",
                position: "absolute",
                left: "0",
                bottom: "-30px",
                color: "#7c7c7c",
              }}
            >
              PAYCO
            </span>
          </div>

          <p
            style={{
              fontSize: "28px",
              fontWeight: "500",
              width: "100%",
              textAlign: "right",
              marginTop: "60px",
              paddingRight: "50px",
            }}
          >
            <span style={{ color: "#e72f2c", display: "block" }}>
              Toward Art, Science &amp; Tech
            </span>
            새로운 세상을 만들기 위해 도전합니다.
          </p>
        </div>
      </Para>

      <Para id="history">
        <div
          style={{
            width: "100%",
          }}
        >
          <span
            style={{
              color: "#e72f2c",
              fontSize: "22px",
              fontWeight: "600",
              letterSpacing: "1px",
              marginBottom: "40px",
              display: "block",
            }}
          >
            Corporate History
          </span>

          <div>
            <HistoryContent
              id="left"
              year="2013"
              img="history1"
              month1="AUG"
              month2="OCT"
              sub1="NHN(주)에서 NHN엔터테인먼트(주)로 인적분할"
              sub2="웹툰 서비스 코미코(Comico) 출시"
            />

            <HistoryContent
              id="right"
              year="2014"
              img="history2"
              month1="FEB"
              month2="DEC"
              sub1="게임 개발 전문 자회사 설림(NHN 픽셀큐브(주))"
              sub2="NHN CLOUD 출시"
            />

            <HistoryContent
              id="left"
              year="2017"
              img="history3"
              month1="APR"
              month2="JUL"
              sub1="NHN페이코(주) 설립"
              sub2="디지털 전문 광고기업 (주)NHN ACE 설립"
            />

            <HistoryContent
              id="right"
              year="2019"
              img="history4"
              month1="FEB"
              month2="APR"
              sub1="2018 연간매출 1조원 돌파"
              sub2="NHN(주)로 사명변경"
            />
          </div>
        </div>
      </Para>

      <Para id="ethics"></Para>
    </>
  );
};

export default IntroPage;

const IntroTop = styled.div`
  width: 100%;
  height: 88%;
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

const Para = styled.div`
  z-index: 100;
  width: 100%;
  margin-top: 120px;
  padding-left: 10%;
  display: flex;
  justify-content: flex-start;
  &#slogan {
    margin-top: 280px;
    padding-left: 0;
    justify-content: flex-end;
    position: relative;
  }
  &#history {
    padding: 0 10%;
  }

  &#ethics {
    padding: 0 20%;
  }
`;

const Year = styled.span`
  font-size: 22px;
  font-weight: 500;
  margin-right: 80px;
  display: block;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    background-color: #e72f2c;
    right: -40px;
    top: 10px;
    border-radius: 50%;
  }
  &#right {
    margin-right: 0;
    margin-left: 80px;
    &::after {
      display: none;
    }
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 10px;
      height: 10px;
      background-color: #e72f2c;
      left: -40px;
      top: 10px;
      border-radius: 50%;
    }
  }
`;

const HistoryContainer = styled.div`
  display: flex;
  &#left {
    justify-content: flex-start;
    margin-bottom: 100px;
  }
  &#right {
    justify-content: flex-end;
    margin-bottom: 100px;
  }
`;

const HistoryBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  &::before {
    position: absolute;
    content: "";
    display: block;
    width: 1px;
    height: 90%;
    background-color: #ececec;
    left: -45px;
    bottom: 0;
  }
  &#right {
    align-items: flex-end;
    text-align: right;
    &::before {
      display: none;
    }
    &::after {
      position: absolute;
      content: "";
      display: block;
      width: 1px;
      height: 90%;
      background-color: #ececec;
      right: -45px;
      bottom: 0;
    }
  }
`;

const YearTable = styled.table`
  margin-top: 20px;
  border-spacing: 0 10px;
`;

const YearTh = styled.th`
  margin-right: 20px;
  display: inline-block;
  font-weight: 500;
  color: #000;
  &#right {
    color: #7c7c7c;
  }
`;

const YearTd = styled.td`
  color: #7c7c7c;
  &#right {
    color: #000;
  }
`;
