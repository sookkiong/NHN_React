import { useState } from "react";
import styled from "styled-components";
import { CircleData } from "../components/company/menus";

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

        <div></div>
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
  font-weight: 600;
  font-size: 18px;
  &#hoverCircle {
    background: #e72f2c;
    color: #fff;
  }
`;
