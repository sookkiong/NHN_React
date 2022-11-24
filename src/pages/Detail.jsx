import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { articles } from "../components/article/article";

const ArticleIn = () => {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const article = articles.find((element) => element.id === id);

  return (
    <>
      <Container>
        <Back>
          <ArtiTop>
            <Title>{article.title}</Title>
            <Date>{article.date}</Date>
            <Summary>{article.summary}</Summary>

            <Image>
              <img src={article.image} width="100%" />
            </Image>

            <Content>{article.content}</Content>
          </ArtiTop>

          <ArtiBottom>
            <ButtonWrap>
              <ButtonSpan>이전 글</ButtonSpan>
              <GoButton
                onClick={() => {
                  navigate(`/article/detail?id=${Number(article.id) - 1}`);
                }}
              ></GoButton>
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
                onClick={() => {
                  navigate(`/article/detail?id=${Number(article.id) + 1}`);
                }}
              ></GoButton>
            </ButtonWrap>
          </ArtiBottom>
        </Back>
      </Container>
    </>
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

const Back = styled.div`
  background-color: #fff;
  width: 70%;
  padding: 100px;
`;

const ArtiTop = styled.div``;
const ArtiBottom = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const ButtonWrap = styled.div`
  width: 350px;
  &#next {
    text-align: right;
  }
`;
const ButtonSpan = styled.span`
  display: block;
  font-weight: 600;
`;
const GoButton = styled.span`
  color: #7c7c7c;
  &:hover {
    color: #000;
    text-decoration: underline;
  }
`;

const GoList = styled.button`
  background: none;
  border: 1px solid #7c7c7c;
  padding: 0 30px;
  cursor: pointer;
  &:hover {
    background: #e72f2c;
    color: #fff;
    border: 1px solid #e72f2c;
    font-weight: 500;
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
`;
const Summary = styled.div`
  line-height: 28px;
`;
const Image = styled.div`
  width: 80%;

  padding: 80px 0;
  text-align: center;
`;

const Content = styled.div`
  padding-bottom: 70px;
  border-bottom: 1px solid #ccc;
  line-height: 25px;
`;
