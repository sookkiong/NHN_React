import { useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { langOnState } from "../store/state";

const MainPage = () => {
  const list = [1, 2, 3];
  let [slideNum, setSlideNum] = useState(list);

  return (
    <>
      <MainStyle>
        <CarouselBox>
          <div className="flexbox" style={{ display: "flex", height: "100%" }}>
            <div
              className="img"
              style={{
                background: `url("/img/slide1_img.png") no-repeat center center`,
                width: "100%",
                border: "1px solid blue",
                flex: "none",
              }}
            ></div>
            <div
              className="img"
              style={{
                background: `url("/img/slide2_img.png") no-repeat center center`,
                width: "100%",
                flex: "none",
              }}
            ></div>
            <div
              className="img"
              style={{
                background: `url("/img/slide3_img.png") no-repeat center center`,
                width: "100%",
                flex: "none",
              }}
            ></div>
            <div
              className="img"
              style={{
                background: `url("/img/slide4_img.png") no-repeat center center`,
                backgroundSize: "contain",
                width: "100%",
                flex: "none",
              }}
            ></div>
          </div>
        </CarouselBox>
      </MainStyle>
    </>
  );
};

export default MainPage;

const MainStyle = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  background: #e72f2c;
`;

const CarouselBox = styled.div`
  width: 65%;
  height: 62%;
  background: #000;
  -overflow: hidden;
`;
