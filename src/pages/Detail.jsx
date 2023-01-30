import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { articles } from "../components/article/article";
import { useEffect } from "react";

const ArticleIn = () => {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const article = articles.find((element) => element.id === id);
  const prevArticle = articles.find((element) => element.id === id - 1)?.title;
  const nextArticle = articles.find((element) => element.id === id + 1)?.title;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <Container>
      <WhiteWrapper>
        <ArtiTop>
          <Title>{article.title}</Title>
          <Date>{article.date}</Date>
          <Summary>{article.summary}</Summary>

          <Image>
            <File src={article.image} alt="기사 이미지" />
          </Image>

          <Content>{article.content}</Content>
        </ArtiTop>

        <GoListTabMob
          onClick={() => {
            navigate("/article");
          }}
        >
          목록
        </GoListTabMob>

        <ArtiBottom>
          <ButtonWrap>
            <ButtonSpan>이전 글</ButtonSpan>
            <GoButton
              onClick={() => {
                navigate(`/article/detail?id=${id - 1}`);
              }}
              disabled={!prevArticle}
            >
              {prevArticle || "이전 글이 없습니다."}
            </GoButton>
          </ButtonWrap>

          <GoList
            onClick={() => {
              navigate("/article");
            }}
          >
            목록
          </GoList>

          <ButtonWrap id="next">
            <ButtonSpan>다음 글</ButtonSpan>
            <GoButton
              id="right"
              onClick={() => {
                navigate(`/article/detail?id=${id + 1}`);
              }}
              disabled={!nextArticle}
            >
              {nextArticle || "다음 글이 없습니다."}
            </GoButton>
          </ButtonWrap>
        </ArtiBottom>
      </WhiteWrapper>
    </Container>
  );
};
export default ArticleIn;

const Container = styled.div`
  background-color: #e72f2c;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0 120px;
`;

const WhiteWrapper = styled.div`
  background-color: #fff;
  width: 70%;
  padding: 80px;
  @media all and (max-width: 960px) {
    width: 80%;
    padding: 60px;
  }
  @media all and (max-width: 550px) {
    padding: 40px;
  }
`;

const ArtiTop = styled.div``;
const ArtiBottom = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonWrap = styled.div`
  width: 20rem;
  height: fit-content;
  &#next {
    text-align: right;
  }
`;
const ButtonSpan = styled.span`
  display: block;
  font-weight: 600;
`;
const GoButton = styled.button`
  color: #7c7c7c;
  border: none;
  text-align: left;
  background: none;
  padding: 0;
  cursor: pointer;
  width: 100%;
  height: 3rem;
  &:hover {
    color: #000;
    text-decoration: underline;
  }
  &:disabled {
    text-decoration: none;
    color: #7c7c7c;
    cursor: default;
  }
  &#right {
    text-align: right;
  }
`;

const GoList = styled.button`
  background: none;
  border: 1px solid #7c7c7c;
  width: 120px;
  height: 35px;
  cursor: pointer;
  &:hover {
    background: #e72f2c;
    color: #fff;
    border: 1px solid #e72f2c;
    font-weight: 500;
  }
  @media all and (max-width: 960px) {
    display: none;
  }
`;
const GoListTabMob = styled.button`
  display: none;
  @media all and (max-width: 960px) {
    display: block;
    background: none;
    border: 1px solid #7c7c7c;
    width: 120px;
    height: 35px;
    margin: 30px auto 0;
    cursor: pointer;
    &:hover {
      background: #e72f2c;
      color: #fff;
      border: 1px solid #e72f2c;
      font-weight: 500;
    }
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
const Date = styled.div`
  display: block;
  padding: 20px 0;
  border-bottom: 2px solid #000;
  font-weight: 500;
  color: #7c7c7c;
  margin-bottom: 50px;
  @media all and (max-width: 550px) {
    margin-bottom: 30px;
  }
`;
const Summary = styled.div`
  line-height: 28px;
  text-align: justify;
`;
const Image = styled.div`
  width: 100%;
  padding: 80px 0;
  text-align: center;

  @media all and (max-width: 960px) {
    padding: 50px 0;
  }
`;
const File = styled.img`
  width: 70%;
  @media all and (max-width: 960px) {
    width: 90%;
  }
  @media all and (max-width: 550px) {
    width: 100%;
  }
`;

const Content = styled.div`
  padding-bottom: 70px;
  border-bottom: 1px solid #ccc;
  line-height: 25px;
  text-align: justify;
  @media all and (max-width: 550px) {
    line-height: 30px;
  }
`;
