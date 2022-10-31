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
                background: `url("/img/slide1_img.png") no-repeat right bottom`,
                backgroundSize: "63%",
                width: "100%",
                flex: "none",
              }}
            ></div>
            <div
              className="img"
              style={{
                background: `url("/img/slide2_img.png") no-repeat right center`,
                backgroundSize: "44%",
                width: "100%",
                flex: "none",
              }}
            ></div>
            <div
              className="img"
              style={{
                background: `url("/img/slide3_img.png") no-repeat right center`,
                backgroundSize: "50%",
                width: "100%",
                flex: "none",
              }}
            ></div>
            <div
              className="img"
              style={{
                background: `url("/img/slide4_img.png") no-repeat right center`,
                backgroundSize: "50%",
                width: "100%",
                flex: "none",
              }}
            ></div>
          </div>
        </CarouselBox>

        <footer
          style={{
            border: "1px solid #fff",

            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <div>
            <div id="f_left">
              <ul className="f_link">
                <li>개인정보처리방침</li>
                <li>대표메일</li>
              </ul>
              <ul className="sns">
                <li
                  style={{
                    background: `url("/img/fsns1_1.png") no-repeat center center`,
                    width: "20px",
                    height: "20px",
                  }}
                ></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div id="f_right"></div>
          </div>
        </footer>
      </MainStyle>
    </>
  );
};

export default MainPage;

const MainStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  background: #e72f2c;
`;

const CarouselBox = styled.div`
  width: 65%;
  height: 62%;
  background: #000;
`;
