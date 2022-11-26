import styled from "styled-components";

const Recruit = () => {
  return (
    <Container>
      <div>
        <div>
          채용공고
          <span>
            놀이가 작품이 되고, 상상이 현실이 되는 곳에서 함께 성장하세요!
          </span>
        </div>
        <button>채용사이트 바로가기</button>
      </div>
    </Container>
  );
};

export default Recruit;

const Container = styled.div`
  background-color: #e72f2c;
`;
