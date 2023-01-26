import { useState } from "react";
import styled from "styled-components";
import { CircleData, EthicData } from "../components/company/menus";

const Ethics = () => {
  let [circle, setCircle] = useState("");
  return (
    <Container>
      <ContentsBox>
        <CircleWrap>
          <Title>NHN 임직원의 기본 윤리</Title>
          <CircleUL>
            {CircleData.map((value) => {
              return (
                <CircleList
                  key={value.title}
                  id={circle === value.title ? "hoverCircle" : undefined}
                  onMouseOver={() => setCircle(value.title)}
                  onMouseLeave={() => setCircle("")}
                >
                  {circle === value.title ? value.content : value.title}
                </CircleList>
              );
            })}
          </CircleUL>
        </CircleWrap>

        <EthicsUL>
          {EthicData.map((value) => {
            return (
              <EthicsRow>
                <RowTitle>{value.title}</RowTitle>

                <RowBox>
                  <Box bg={value.background_1}>
                    <SubTitle>{value.subTitle1}</SubTitle>
                    <SubContent>{value.subContent1}</SubContent>
                  </Box>
                  <Box bg={value.background_2}>
                    <SubTitle>{value.subTitle2}</SubTitle>
                    <SubContent>{value.subContent2}</SubContent>
                  </Box>
                </RowBox>
              </EthicsRow>
            );
          })}
        </EthicsUL>
      </ContentsBox>
    </Container>
  );
};

export default Ethics;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 100px;
  @media all and (max-width: 960px) {
    margin-top: 0;
  }
`;
const ContentsBox = styled.div`
  width: 76%;
  display: flex;
  flex-direction: column;
`;
const CircleWrap = styled.div`
  display: block;
  @media all and (max-width: 960px) {
    display: none;
  }
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

const CircleUL = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 50px;
`;
const CircleList = styled.li`
  border-radius: 50%;
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #e72f2c;
  border: 2px solid #e72f2c;
  font-weight: 500;
  font-size: 18px;
  &#hoverCircle {
    background: #e72f2c;
    color: #fff;
  }
  @media all and (max-width: 960px) {
    width: 110px;
    height: 110px;
    font-size: 16px;
  }
`;

const EthicsUL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 150px;
  @media all and (max-width: 960px) {
    margin-top: 80px;
  }
`;

const SubTitle = styled.span`
  color: #e72f2c;
  font-weight: 600;
`;
const SubContent = styled.p`
  color: #7c7c7c;
  font-size: 14px;
  line-height: 22px;
`;

const EthicsRow = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  width: 100%;
  @media all and (max-width: 960px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const RowTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  width: 30%;
  @media all and (max-width: 960px) {
    width: 100%;
  }
`;

const RowBox = styled.div`
  display: flex;
  width: 70%;
  height: 200px;
  justify-content: space-between;
  @media all and (max-width: 960px) {
    margin-top: 20px;
    width: 100%;
  }
`;

const Box = styled.div`
  width: 40%;
  border-bottom: 1px solid #ccc;
  background: url("/img/bl_${(props) => props.bg}.png") no-repeat right 85%;
  background-size: 40px auto;
  @media all and (max-width: 960px) {
    width: 40%;
  }
`;
