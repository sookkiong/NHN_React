import {
  FContainer,
  FLink,
  FLinkContainer,
  FList,
  FLogo,
  Footer,
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
          <IntroSpan size="16px" spacing="1px">
            NHN의 다양한 소식을 만나보세요.
          </IntroSpan>
        </IntroInner>
      </IntroTop>

      <GoTop onClick={() => window.scrollTo(0, 0)}>↑</GoTop>

      <div style={{ margin: "100px 18% 50px" }}>
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
                <div>
                  <div id="title" style={{ fontWeight: "500" }}>
                    {v.title}
                  </div>
                  <div
                    style={{
                      margin: "20px 0 45px",
                      color: "#7c7c7c",
                      fontSize: "15px",
                      textAlign: "justify",
                    }}
                  >
                    {v.list}
                  </div>
                  <div style={{ fontSize: "14px", color: "#7c7c7c" }}>
                    {v.date}
                  </div>
                </div>

                {v.id % 2 != 0 ? <ImgBox bg={v.id} /> : undefined}
              </Item>
            );
          })}
        </div>
      </div>

      <Footer>
        <FContainer>
          <FLogo>
            <img src="/img/f_logo.png" />
          </FLogo>
          <FLinkContainer>
            <FList>
              <FLink
                onClick={() => {
                  window.open("/privacy", "", "width=800 height=800");
                }}
              >
                개인정보처리방침
              </FLink>
            </FList>
            <FList id="sepa">|</FList>
            <FList>
              <FLink
                onClick={() => {
                  window.open("/mails", "", "width=500,height=500");
                }}
              >
                대표메일
              </FLink>
            </FList>
          </FLinkContainer>
        </FContainer>

        <FContainer>
          <Fsns bg="1" href="#"></Fsns>
          <Fsns bg="2" href="#"></Fsns>
          <Fsns bg="3" href="#"></Fsns>
        </FContainer>
      </Footer>
    </>
  );
};

export default Article;

const CountingBox = styled.div`
  width: 100%;
  font-weight: 500;
  border-bottom: 2px solid #000;
  padding-bottom: 20px;
`;

const ImgBox = styled.div`
  width: 35rem;
  height: 10rem;
  background: url("/img/article_photo${(props) => props.bg}.png") no-repeat
    center center;
  background-size: cover;
  margin-left: 20px;
`;
const Item = styled.div`
  display: flex;
  align-content: center;
  padding: 30px 0;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    #title {
      text-decoration: underline;
    }
  }
`;
