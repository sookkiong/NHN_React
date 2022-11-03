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
            <SlideBox
              className="img"
              bg="'/img/slide1_img.png'"
              size="63%"
            ></SlideBox>
            <SlideBox
              className="img"
              bg="'/img/slide2_img.png'"
              size="44%"
            ></SlideBox>
            <SlideBox
              className="img"
              bg="'/img/slide3_img.png'"
              size="63%"
            ></SlideBox>
            <SlideBox
              className="img"
              bg="'/img/slide4_img.png'"
              size="55%"
            ></SlideBox>
          </div>
        </CarouselBox>

        <Footer>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div id="f_left" style={{ display: "flex" }}>
              <CustomUI id="f_link">
                <LinkList id="f_list1">개인정보처리방침</LinkList>
                <LinkList id="f_list2">|</LinkList>
                <LinkList>대표메일</LinkList>
              </CustomUI>
              <CustomUI id="sns">
                <SnsList bg='"/img/fsns1_w.png"' mr="23px"></SnsList>
                <SnsList bg='"/img/fsns2_w.png"' mr="20px"></SnsList>
                <SnsList bg='"/img/fsns3_w.png"'></SnsList>
              </CustomUI>
            </div>
            <div id="f_right" style={{ color: "#fff", fontSize: "14px" }}>
              Copyright ⓒ NHN Co., Ltd. All rights reserved.
            </div>
          </div>
        </Footer>
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

const Footer = styled.footer`
  width: 65%;
  padding-top: 50px;
`;

const CustomUI = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  color: #fff;
  margin-right: 30px;
  &#f_link {
    margin-right: 30px;
    font-size: 15px;
  }
`;

const SnsList = styled.li`
  background: url(${(props) => props.bg}) no-repeat center center;
  background-size: contain;
  width: 18px;
  height: 100%;
  margin-right: ${(props) => props.mr};
`;

const LinkList = styled.li`
  &#f_list1 {
    margin-right: 20px;
  }
  &#f_list2 {
    margin-right: 20px;
    font-size: 12px;
    line-height: 20px;
  }
`;

const SlideBox = styled.div`
  background: url(${(props) => props.bg}) no-repeat right bottom;
  background-size: ${(props) => props.size};
  width: 100%;
  flex: none;
`;
