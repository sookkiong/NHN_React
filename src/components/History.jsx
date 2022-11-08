import styled from "styled-components";

const HistoryContent = ({ id, year, img, month1, month2, sub1, sub2 }) => {
  return id === "left" ? (
    <HistoryContainer id={id}>
      <Year>{year}</Year>
      <HistoryBox>
        <img src={`/img/${img}.jpg`} />
        <YearTable>
          <tr>
            <YearTh>{month1}</YearTh>
            <YearTd>{sub1}</YearTd>
          </tr>

          <tr>
            <YearTh>{month2}</YearTh>
            <YearTd>{sub2}</YearTd>
          </tr>
        </YearTable>
      </HistoryBox>
    </HistoryContainer>
  ) : (
    <HistoryContainer id={id}>
      <HistoryBox id={id}>
        <img src={`/img/${img}.jpg`} />
        <YearTable>
          <tr>
            <YearTh id={id}>{sub1}</YearTh>
            <YearTd id={id}>{month1}</YearTd>
          </tr>

          <tr>
            <YearTh id={id}>{sub2}</YearTh>
            <YearTd id={id}>{month2}</YearTd>
          </tr>
        </YearTable>
      </HistoryBox>
      <Year id={id}>{year}</Year>
    </HistoryContainer>
  );
};

export default HistoryContent;

const Year = styled.span`
  font-size: 22px;
  font-weight: 500;
  margin-right: 80px;
  display: block;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    background-color: #e72f2c;
    right: -40px;
    top: 10px;
    border-radius: 50%;
  }
  &#right {
    margin-right: 0;
    margin-left: 80px;
    &::after {
      display: none;
    }
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 10px;
      height: 10px;
      background-color: #e72f2c;
      left: -40px;
      top: 10px;
      border-radius: 50%;
    }
  }
`;

const HistoryContainer = styled.div`
  display: flex;
  &#left {
    justify-content: flex-start;
    margin-bottom: 100px;
  }
  &#right {
    justify-content: flex-end;
    margin-bottom: 100px;
  }
`;

const HistoryBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  &::before {
    position: absolute;
    content: "";
    display: block;
    width: 1px;
    height: 90%;
    background-color: #ececec;
    left: -45px;
    bottom: 0;
  }
  &#right {
    align-items: flex-end;
    text-align: right;
    &::before {
      display: none;
    }
    &::after {
      position: absolute;
      content: "";
      display: block;
      width: 1px;
      height: 90%;
      background-color: #ececec;
      right: -45px;
      bottom: 0;
    }
  }
`;

const YearTable = styled.table`
  margin-top: 20px;
  border-spacing: 0 10px;
`;

const YearTh = styled.th`
  display: inline-block;
  font-weight: 500;
  color: #000;
  &#right {
    color: #7c7c7c;
    font-weight: 400;
    margin-right: 30px;
  }
`;

const YearTd = styled.td`
  color: #7c7c7c;
  font-weight: 400;
  &#right {
    color: #000;
    font-weight: 500;
  }
`;
