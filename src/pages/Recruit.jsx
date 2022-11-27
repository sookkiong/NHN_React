import styled from "styled-components";
import { card } from "../components/recruit/recruit";

const Recruit = () => {
  return (
    <Container>
      <Title>
        <div>
          <span
            style={{
              color: "#fff",
              fontSize: "56px",
              fontWeight: "500",
              letterSpacing: "1.8px",
            }}
          >
            채용공고
          </span>
          <span
            style={{
              display: "block",
              color: "#fff",
              letterSpacing: "1.8px",
              paddingTop: "10px",
            }}
          >
            놀이가 작품이 되고, 상상이 현실이 되는 곳에서 함께 성장하세요!
          </span>
        </div>

        <GoMain
          onClick={() =>
            window.open("https://recruit.nhn.com/ent/recruitings?type=company")
          }
        >
          채용 사이트 바로가기
        </GoMain>
      </Title>

      <Cards>
        {card.map((value) => {
          return (
            <>
              <Card bg={value.id}>
                <Category>{value.category}</Category>
                <Content id={"card" + value.id} bg={value.id}>
                  {value.content}
                </Content>
                <Detail>{value.detail}</Detail>
              </Card>
            </>
          );
        })}
      </Cards>
    </Container>
  );
};

export default Recruit;

const Container = styled.div`
  background-color: #e72f2c;
  padding: 0 16%;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 0 30px;
  align-items: flex-end;
`;

const GoMain = styled.button`
  padding: 0;
  background: none;
  border: 1px solid #fff;
  padding: 5px 30px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #000;
    font-weight: 600;
  }
`;

const Cards = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 460px;
`;

const Card = styled.li`
  width: 30%;
  background: url("/img/card${(props) => props.bg}.png") no-repeat center center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 3.8%;
`;

const Category = styled.span`
  padding-bottom: 20px;
  display: block;
  font-weight: 500;
`;

const Content = styled.span`
  display: block;
  font-size: 23px;
  font-weight: 600;
  background: url("/img/cardbg${(props) => props.bg}.png") no-repeat 83% center;
  background-size: 12% auto;
  &#card2 {
    background-size: 17% auto;
  }
  &#card3 {
    background-size: 18% auto;
  }
`;
const Detail = styled.span`
  padding-top: 35px;
  display: block;
  color: #7c7c7c;
`;
