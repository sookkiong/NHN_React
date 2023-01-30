import { useNavigate, useSearchParams } from "react-router-dom";
import { notice } from "../components/recruit/recruit";
import styled from "styled-components";
import {
  FContainer,
  FLink,
  FLinkContainer,
  FList,
  FLogo,
  Footer,
  Fsns,
} from "./service";
import { useEffect } from "react";

const Notice = () => {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const nowNotice = notice.find((value) => value.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <PageBg>
      <WhiteWrapper>
        <Title>{nowNotice.title}</Title>
        <Date>{nowNotice.date}</Date>
        <Content>{nowNotice.content}</Content>

        <GoBack onClick={() => navigate("/recruit")}>목록</GoBack>
      </WhiteWrapper>

      <Footer>
        <FContainer>
          <FLogo>
            <img src="/img/logo.png" width="100%" alt="footer 로고" />
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
    </PageBg>
  );
};

export default Notice;

const PageBg = styled.div`
  background: #e72f2c;
  padding-top: 30px;
`;
const WhiteWrapper = styled.div`
  background: #fff;
  width: 70%;
  margin: 0 auto 160px;
  padding: 85px;
  @media all and (max-width: 960px) {
    width: 80%;
    padding: 60px;
  }
  @media all and (max-width: 550px) {
    width: 80%;
    padding: 40px;
    margin-bottom: 100px;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 20px;
`;
const Date = styled.div`
  font-weight: 500;
  color: #7c7c7c;
  padding-bottom: 20px;
  border-bottom: 3px solid #7c7c7c;
`;

const Content = styled.div`
  margin-top: 60px;
`;

const GoBack = styled.button`
  border: 1px solid #7c7c7c;
  background: none;
  padding: 10px 30px;
  display: block;
  margin: 120px auto 0;
  cursor: pointer;
  &:hover {
    background: #e72f2c;
    color: #fff;
    border: 1px solid #e72f2c;
  }
`;
