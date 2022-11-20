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
import { article } from "../components/article/article";

const Article = () => {
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

      <div style={{ margin: "100px 10% 50px" }}>
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

        <ul
          style={{
            width: "100%",
            padding: "0",
            margin: "0",
            listStyle: "none",
          }}
        >
          {article.map((value) => {
            return (
              <li
                id={value.id}
                style={{
                  display: "flex",
                  border: "1px solid black",

                  marginBottom: "20px",
                  width: "100%",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>{value.title}</div>
                  <div>{value.content}</div>
                </div>
                {value.photo ? <img src={value.photo} /> : null}
              </li>
            );
          })}
        </ul>
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
