import styled from "styled-components";
import { serviceList } from "../components/service/service";

const Service = () => {
  return (
    <>
      <Container>
        <div style={{ paddingTop: "50px" }}>
          <TitleSpan id="title">서비스</TitleSpan>
          <TitleSpan id="subTitle">
            태그를 클릭해 NHN이 제공하는 다양한 서비스들을 만나보세요!
          </TitleSpan>
        </div>

        <TagContainer>
          {serviceList.map((row) => {
            return (
              <TagRow
                id={
                  row.find((element) => element.id === "기타")
                    ? "end"
                    : undefined
                }
              >
                {row.map((value) => {
                  return (
                    <Tag
                      id={value.id === "#" ? "샵" : value.id}
                      onClick={
                        value.url
                          ? () => {
                              window.open(value.url);
                            }
                          : undefined
                      }
                    >
                      {value.id}
                    </Tag>
                  );
                })}
              </TagRow>
            );
          })}
        </TagContainer>
      </Container>

      <Footer>
        <FContainer>
          <FLogo>
            <img src="/img/logo.png" />
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
          <Fsns
            bg="1"
            href="https://www.instagram.com/accounts/login/?next=%2Finside_nhn%2F&source=omni_redirect"
            target="_blank"
          ></Fsns>
          <Fsns
            bg="2"
            href="https://twitter.com/nhn_ent"
            target="_blank"
          ></Fsns>
          <Fsns
            bg="3"
            href="https://www.facebook.com/NHNCloud/"
            target="_blank"
          ></Fsns>
        </FContainer>
      </Footer>
    </>
  );
};

export default Service;

const Container = styled.div`
  background-color: #e72f2c;
  padding: 0 10% 160px;
`;

const TitleSpan = styled.span`
  display: block;
  color: #fff;
  &#title {
    font-size: 56px;
    font-weight: 500;
    letter-spacing: 2px;
  }
  &#subTitle {
    letter-spacing: 1.8px;
    padding-top: 5px;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
`;

const TagRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
  &#end {
    justify-content: flex-start;
  }
`;

const Tag = styled.div`
  border: 5px solid #fff;
  font-size: 56px;
  font-weight: 500;
  color: #fff;
  border-radius: 50px;
  padding: 5px 40px;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #e72f2c;
  }
  &#아이엠스쿨,
  &#기타 {
    margin-right: 50px;
  }
  &#샵,
  &#게임,
  &#결제,
  &#컨텐츠,
  &#커머스,
  &#IT,
  &#에듀테크,
  &#기타 {
    background-color: #fff;
    color: #e72f2c;
    cursor: default;
  }
`;

export const Footer = styled.footer`
  padding: 40px 12%;
  border-top: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  background-color: #e72f2c;
`;

export const FContainer = styled.div`
  display: flex;
`;
export const FLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const FLinkContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  margin-left: 100px;
  align-items: center;
`;

export const FList = styled.li`
  margin-right: 20px;
  &#sepa {
    color: #ccc;
    font-size: 13px;
  }
`;
export const FLink = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;
export const Fsns = styled.a`
  display: block;
  width: 22px;
  height: 22px;
  margin-left: 50px;
  background: url("/img/fsns${(props) => props.bg}_w.png") no-repeat center
    center;
  background-size: contain;
`;
