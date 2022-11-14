import { useState } from "react";
import styled from "styled-components";
import { CircleData, EthicData } from "../components/company/menus";

const Ethics = () => {
  let [circle, setCircle] = useState("");
  return (
    <Container>
      <ContentsBox>
        <div>
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
        </div>

        <div style={{ marginTop: "150px" }}>
          <EthicsUL>
            {EthicData.map((value) => {
              return (
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "80px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      width: "380px",
                    }}
                  >
                    {value.title}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "800px",
                      height: "200px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        width: "40%",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <SubTitle>{value.subTitle1}</SubTitle>
                      <SubContent>{value.subContent1}</SubContent>
                    </div>
                    <div
                      style={{
                        width: "40%",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <SubTitle>{value.subTitle2}</SubTitle>
                      <SubContent>{value.subContent2}</SubContent>
                    </div>
                  </div>
                </li>
              );
            })}
          </EthicsUL>
        </div>
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
`;
const ContentsBox = styled.div`
  width: 76%;
  display: flex;
  flex-direction: column;
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
  width: 210px;
  height: 210px;
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
`;

const EthicsUL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
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
