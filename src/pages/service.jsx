import styled from "styled-components";
import { serviceList, ServiceListMob } from "../components/service/service";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const Service = () => {
  const [up, setUp] = useState("");
  const upRef = useInView();

  const isOdd = (v) => {
    const id = v % 2 === 0 ? "border" : undefined;
    return id;
  };

  useEffect(() => {
    setUp("up");
  }, [upRef.inView]);

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
                className={up}
                ref={upRef.ref}
              >
                {row.map((value) => {
                  return (
                    <Tag
                      id={value.type === "category" ? "category" : "content"}
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

        <TagContainerMob>
          {ServiceListMob.map((v, i) => {
            return (
              <TagMob id={isOdd(i + 1)} onClick={() => window.open(v.url)}>
                {v.name}
              </TagMob>
            );
          })}
        </TagContainerMob>
      </Container>

      <Footer>
        <FContainer>
          <FLogo>
            <img src="/img/logo.png" alt="footer 로고" width="100%" />
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
  @media all and (max-width: 550px) {
    padding-bottom: 100px;
  }
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
  @media all and (max-width: 960px) {
    &#title {
      font-size: 45px;
    }
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  @media all and (max-width: 550px) {
    display: none;
  }
`;
const TagContainerMob = styled.div`
  display: none;
  @media all and (max-width: 550px) {
    display: grid;
    grid-template-columns: 48% 48%;
    margin-top: 30px;
    justify-content: space-between;
  }
`;
const TagMob = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  background: #fff;
  padding: 7px 0;
  border-radius: 30px;
  color: #e72f2c;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  &#border {
    background: none;
    border: 2px solid #fff;
    color: #fff;
  }
`;

const TagRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
  margin-top: 100px;
  transition: all 1s;
  &#end {
    justify-content: flex-start;
  }
  &.up {
    margin-top: 0;
  }
`;

const Tag = styled.div`
  border: 5px solid #fff;
  font-size: 56px;
  font-weight: 500;
  color: #fff;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #e72f2c;
  }
  &#category {
    background-color: #fff;
    color: #e72f2c;
    cursor: default;
  }
  &#content {
    transition: bottom 0.5s;
    position: relative;
    bottom: 0;
    &:hover {
      box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.5);
      bottom: 20px;
    }
  }
  padding: 0.3rem 3rem;
  @media all and (max-width: 1510px) {
    padding: 0.3rem 2rem;
  }
  @media all and (max-width: 1370px) {
    padding: 0.3rem 1rem;
    font-size: 45px;
  }
  @media all and (max-width: 960px) {
    padding: 0.3rem 1rem;
    font-size: 2rem;
    border: 3px solid #fff;
  }
  @media all and (max-width: 724px) {
    font-size: 1.3rem;
    border: 2px solid #fff;
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
  align-items: center;
`;
export const FLogo = styled.div`
  display: flex;
  align-items: center;
  @media all and (max-width: 960px) {
    width: 50px;
  }
`;

export const FLinkContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  margin-left: 100px;
  align-items: center;
  @media all and (max-width: 960px) {
    margin-left: 30px;
  }
  @media all and (max-width: 550px) {
    display: none;
  }
`;

export const FList = styled.li`
  margin-right: 20px;
  &#sepa {
    color: #ccc;
    font-size: 13px;
  }
  @media all and (max-width: 960px) {
    margin-right: 15px;
    font-size: 14px;
  }
`;
export const FLink = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  @media all and (max-width: 960px) {
    font-size: 14px;
  }
`;
export const Fsns = styled.a`
  display: block;
  width: 22px;
  height: 22px;
  margin-left: 50px;
  background: url("/img/fsns${(props) => props.bg}_w.png") no-repeat center
    center;
  background-size: contain;
  @media all and (max-width: 960px) {
    margin-left: 20px;
    width: 18px;
    height: 18px;
  }
`;
