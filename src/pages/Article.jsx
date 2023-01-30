import {
  FLinkContainer,
  FList,
  FLogo,
  Footer,
  FooterLeft,
  FooterRight,
  Fsns,
  GoTop,
  IntroInner,
  IntroSpan,
  IntroTop,
} from "./Intro";
import { articles } from "../components/article/article";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Article = () => {
  const navigate = useNavigate();

  return (
    <>
      <IntroTop>
        <IntroInner>
          <IntroSpan size="62px" fw="500" spacing="3px">
            보도자료
          </IntroSpan>
          <IntroSpan id="explain" size="16px" spacing="1px">
            NHN의 다양한 소식을 만나보세요.
          </IntroSpan>
        </IntroInner>
      </IntroTop>

      <GoTop onClick={() => window.scrollTo(0, 0)}>↑</GoTop>

      <ContentsWrap>
        <CountingBox>
          전체{" "}
          <span style={{ color: "#e72f2c", fontWeight: "600" }}>
            {articles.length}
          </span>
          건
        </CountingBox>

        <div>
          {articles.map((v) => {
            return (
              <Item onClick={() => navigate(`/article/detail?id=${v.id}`)}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <ArticleTexts>
                    <div id="title" style={{ fontWeight: "500" }}>
                      {v.title}
                    </div>

                    <ArticleContent>{v.list}</ArticleContent>
                  </ArticleTexts>

                  {v.id % 2 !== 0 ? <ImgBox bg={v.id} /> : undefined}
                </div>

                <Date style={{ fontSize: "14px", color: "#7c7c7c" }}>
                  {v.date}
                </Date>
              </Item>
            );
          })}
        </div>
      </ContentsWrap>

      <Footer>
        <FooterLeft>
          <FLogo>
            <img src="/img/f_logo.png" alt="footer 로고" width="100%" />
          </FLogo>

          <FLinkContainer>
            <FList
              onClick={() => {
                window.open("/privacy", "", "width=800 height=800");
              }}
            >
              개인정보처리방침
            </FList>
            <FList id="sepa">|</FList>
            <FList
              onClick={() => {
                window.open("/mails", "", "width=500,height=500");
              }}
            >
              대표메일
            </FList>
          </FLinkContainer>
        </FooterLeft>

        <FooterRight>
          <Fsns bg="1" href="#"></Fsns>
          <Fsns bg="2" href="#"></Fsns>
          <Fsns bg="3" href="#"></Fsns>
        </FooterRight>
      </Footer>
    </>
  );
};

export default Article;

const ContentsWrap = styled.div`
  margin: 100px 18% 50px;
  @media all and (max-width: 960px) {
    margin: 100px 10% 50px;
  }
`;
const CountingBox = styled.div`
  width: 100%;
  font-weight: 500;
  border-bottom: 2px solid #000;
  padding-bottom: 20px;
`;

const ImgBox = styled.div`
  width: 30rem;
  height: 10rem;
  background: url("/img/article_photo${(props) => props.bg}.png") no-repeat
    center center;
  background-size: cover;
  margin-left: 20px;
  margin-top: 6px;
  @media all and (max-width: 550px) {
    display: none;
  }
`;
const Item = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  &:hover {
    #title {
      text-decoration: underline;
    }
  }
  @media all and (max-width: 550px) {
    padding: 20px 0;
  }
`;
const ArticleTexts = styled.div`
  width: 100%;
  &#havePhoto {
    width: 70%;
  }
`;
const ArticleContent = styled.div`
  margin: 20px 0 45px;
  color: #7c7c7c;
  font-size: 15px;
  text-align: justify;
  @media all and (max-width: 550px) {
    margin: 20px 0 30px;
  }
`;
const Date = styled.div`
  font-size: 14px;
  color: #7c7c7c;
  @media all and (max-width: 550px) {
    text-align: right;
  }
`;
