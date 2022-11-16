import styled from "styled-components";
import { ServiceList } from "../components/service/service";

const Service = () => {
  return (
    <>
      <Container>
        <div style={{ paddingTop: "50px" }}>
          <TitleSpan id="title">서비스</TitleSpan>
          <TitleSpan id="subTitle">
            NHN이 제공하는 다양한 서비스들을 만나보세요!
          </TitleSpan>
        </div>

        <UL>
          {ServiceList.map((value) => {
            return <List>{value}</List>;
          })}
        </UL>
      </Container>
    </>
  );
};

export default Service;

const Container = styled.div`
  height: 100vh;
  background-color: #e72f2c;
  padding: 0 10%;
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
const UL = styled.ul`
  list-style: none;
  margin-top: 60px;
  padding: 0;
`;

const List = styled.li`
  border: 1px solid #fff;
  font-size: 56px;
`;
