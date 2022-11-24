import {
  FContainer,
  FLink,
  FLinkContainer,
  FList,
  FLogo,
  Footer,
  Fsns,
  IntroInner,
  IntroSpan,
  IntroTop,
} from "./Intro";
import { article, articles } from "../components/article/article";
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

      <div style={{ margin: "100px 18% 50px" }}>
        <div
          style={{
            width: "100%",
            fontWeight: "500",
            borderBottom: "2px solid #000",
            paddingBottom: "20px",
          }}
        >
          전체 <span style={{ color: "#e72f2c", fontWeight: "600" }}>7</span>건
        </div>

        <ArtUL>
          {articles.map((value) => {
            return (
              <ArtList
                onClick={() => {
                  navigate(`/article/detail?id=${value.id}`);
                }}
              >
                <ArtiLeft>
                  <div
                    id="artiTitle"
                    style={{ marginBottom: "20px", fontWeight: "500" }}
                  >
                    {value.title}
                  </div>
                  <div
                    style={{
                      color: "#7c7c7c",
                      fontSize: "14px",
                      marginBottom: "50px",
                    }}
                  >
                    {value.list}
                  </div>
                  <div style={{ color: "#7c7c7c", fontSize: "12px" }}>
                    {value.date}
                  </div>
                </ArtiLeft>

                {value.image ? <ImgBox id={"arti" + value.id}></ImgBox> : null}
              </ArtList>
            );
          })}
        </ArtUL>
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

const ArtUL = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ArtList = styled.li`
  display: flex;
  border-bottom: 1px solid #ccc;
  width: 100%;
  padding: 50px 0;
  cursor: pointer;
  &:hover {
    #artiTitle {
      text-decoration: underline;
    }
  }
`;

const ImgBox = styled.div`
  width: 500px;
  margin-left: 30px;
  &#arti1 {
    background: url("/img/article_photo1.png") no-repeat center center;
    background-size: cover;
  }
  &#arti3 {
    background: url("/img/article_photo3.png") no-repeat center center;
    background-size: cover;
  }
  &#arti6 {
    background: url("/img/article_photo6.png") no-repeat center -70px;
    background-size: cover;
  }
`;

const ArtiLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
