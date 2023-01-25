import styled from "styled-components";
import Sliders from "../components/MainSlider";

const MainPage = () => {
  return (
    <MainStyle>
      {/* 데스크탑 */}
      <Sliders />

      {/* 태블릿 */}
      <WrapperTab>
        <div></div>
      </WrapperTab>

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
  overflow-x: hidden;
  border: none;
`;

const Footer = styled.footer`
  width: 65%;
  padding-top: 50px;
  @media all and (max-width: 960px) {
    width: 80%;
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
/* 태블릿 */
const WrapperTab = styled.div`
  width: 90%;
  display: none;
  @media all and (max-width: 960px) {
    diplay: block;
  }
`;
