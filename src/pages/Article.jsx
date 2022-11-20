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

      <div>
        <div>
          전체 <span>7</span>건
        </div>

        <ul>{}</ul>
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
