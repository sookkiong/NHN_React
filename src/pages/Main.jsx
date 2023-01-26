import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Sliders from "../components/MainSlider";
import { sliderItem } from "../components/main/main";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <MainStyle>
      {/* 데스크탑 */}
      <Sliders />

      {/* 태블릿 */}
      <MobileWrap>
        <MainItemsMobile>
          {sliderItem.map((v) => {
            return (
              <ItemMobile
                bg={v.id}
                onClick={() => {
                  window.open(v.url);
                }}
              >
                <ItemTitle>{v.name}</ItemTitle>
                {v.text.split("\n").map((v) => {
                  return (
                    <div style={{ fontSize: "16px", lineHeight: "1.2" }}>
                      {v}
                    </div>
                  );
                })}
              </ItemMobile>
            );
          })}
        </MainItemsMobile>

        <GoPageBoxes>
          <PageBox onClick={() => navigate("/recruit")}>
            NHN
            <br />
            채용정보
          </PageBox>
          <PageBox id="border" onClick={() => navigate("/article")}>
            NHN
            <br />
            뉴스광장
          </PageBox>
        </GoPageBoxes>
      </MobileWrap>

      <Footer>
        <FooterInner>
          <FooterLinks>
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
          </FooterLinks>
          <div id="f_right" style={{ color: "#fff", fontSize: "14px" }}>
            Copyright ⓒ NHN Co., Ltd. All rights reserved.
          </div>
        </FooterInner>
      </Footer>
    </MainStyle>
  );
};

export default MainPage;

const MainStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #e72f2c;
  overflow-y: hidden;
  overflow-x: hidden;
  @media all and (max-width: 960px) {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow-y: scroll;
  }
`;

const Footer = styled.footer`
  width: 65%;
  padding-top: 50px;
  @media all and (max-width: 960px) {
    width: 80%;
  }
  @media all and (max-width: 550px) {
    padding-top: 60px;
    padding-bottom: 30px;
  }
`;
const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  @media all and (max-width: 550px) {
    justify-content: center;
  }
`;
const FooterLinks = styled.div`
  display: flex;
  @media all and (max-width: 550px) {
    display: none;
  }
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
  @media all and (max-width: 960px) {
    &#f_link {
      display: none;
    }
  
`;

const SnsList = styled.li`
  background: url(${(props) => props.bg}) no-repeat center center;
  background-size: contain;
  width: 18px;
  height: 18px;
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

/* 반응형 */
/* 모바일 */
const MobileWrap = styled.div`
  display: none;
  @media all and (max-width: 550px) {
    display: block;
    width: 80%;
  }
`;
const MainItemsMobile = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const ItemMobile = styled.li`
  width: 100%;
  height: 160px;
  background: url("/img/mob${(props) => props.bg}.jpg") no-repeat center center;
  background-size: cover;
  margin-bottom: 30px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  cursor: pointer;
`;
const ItemTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 5px;
`;
const GoPageBoxes = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const PageBox = styled.div`
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #fff;
  color: #e72f2c;
  font-weight: 600;
  font-size: 20px;
  &#border {
    background: none;
    border: 1px solid #fff;
    color: #fff;
  }
`;
