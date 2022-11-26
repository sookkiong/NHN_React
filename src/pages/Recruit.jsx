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

        <GoMain>채용 사이트 바로가기</GoMain>
      </Title>

      <ul>
        {card.map((value) => {
          return (
            <>
              <Card>
                <span>{value.category}</span>
                <span>{value.content}</span>
                <span>{value.detail}</span>
              </Card>
            </>
          );
        })}
      </ul>
    </Container>
  );
};

export default Recruit;

const Container = styled.div`
  background-color: #e72f2c;
  padding: 0 18%;
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
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #000;
    font-weight: 900;
  }
`;

const Card = styled.li``;
