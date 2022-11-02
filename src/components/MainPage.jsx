import { useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import styled from "styled-components";

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
            width: "65%",
            paddingTop: "50px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div id="f_left" style={{ display: "flex" }}>
              <ul
                className="f_link"
                style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                  display: "flex",
                  marginRight: "45px",
                  color: "#fff",
                  fontSize: "15px",
                }}
              >
                <li
                  style={{
                    marginRight: "20px",
                  }}
                >
                  개인정보처리방침
                </li>
                <li>대표메일</li>
              </ul>
              <ul
                className="sns"
                style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                  display: "flex",
                  marginRight: "30px",
                  color: "#fff",
                }}
              >
                <li
                  style={{
                    background: `url("/img/fsns1_w.png") no-repeat center center`,
                    backgroundSize: "contain",
                    width: "18px",
                    height: "100%",
                    marginRight: "23px",
                  }}
                ></li>
                <li
                  style={{
                    background: `url("/img/fsns2_w.png") no-repeat center center`,
                    backgroundSize: "contain",
                    width: "18px",
                    height: "100%",
                    marginRight: "20px",
                  }}
                ></li>
                <li
                  style={{
                    background: `url("/img/fsns3_w.png") no-repeat center center`,
                    backgroundSize: "50%",
                    width: "18px",
                    height: "100%",
                  }}
                ></li>
              </ul>
            </div>
            <div id="f_right" style={{ color: "#fff", fontSize: "14px" }}>
              Copyright ⓒ NHN Co., Ltd. All rights reserved.
            </div>
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
  overflow-y: hidden;
  padding-top: 50px;
  border: none;
`;

const CarouselBox = styled.div`
  width: 65%;
  height: 70%;
  background: #000;
  border-bottom: 1px solid #fff;
`;
