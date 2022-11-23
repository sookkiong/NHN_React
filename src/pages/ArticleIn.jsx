import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ArticleIn = () => {
  let navigate = useNavigate();
  return (
    <>
      <Container>
        <Back>
          <ArtiTop>
            <div style={{ fontSize: "18px", fontWeight: "600" }}>
              NHN 빅풋-위메이드, 'Project WEMIX Sports' 서비스 계약 체결
            </div>
            <span
              style={{
                display: "block",
                padding: "20px 0",
                borderBottom: "2px solid #000",
                fontWeight: "500",
                color: "#7c7c7c",
                marginBottom: "50px",
              }}
            >
              2022.02.04
            </span>
            <div style={{ lineHeight: "28px" }}>
              - 한게임 노하우 살린 스포츠 예측 게임 'Project WEMIX Sports',
              위믹스에서 서비스 예정
              <br />- 블록체인 플랫폼 내 게임 서비스 제공 이어가며, 게임과
              플랫폼 간 선순환 구조 만들 것
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "80px 0",
              }}
            >
              <img src="/img/article_photo1.png" alt="기사1사진" />
            </div>

            <div
              style={{
                paddingBottom: "70px",
                borderBottom: "1px solid #ccc",
                lineHeight: "25px",
              }}
            >
              [NHN빅풋, 2022-02-04] NHN빅풋(대표 김상호)과 위메이드가 ‘Project
              WEMIX Sports(가칭)’ 게임의 서비스 계약을 체결했다.
              <br />
              <br />
              이를 통해 양사는 NHN빅풋이 개발한 'Project WEMIX Sports'를
              위메이드 자체 블록체인 플랫폼인 위믹스(WEMIX)에서 서비스하는 데
              합의했다.
              <br />
              <br />
              ‘Project WEMIX Sports’는 NHN빅풋이 한게임의 오랜 웹보드 게임 개발
              및 서비스 노하우를 바탕으로 만든 스포츠 예측 게임으로 축구, 야구,
              농구, 아이스하키, 테니스, 탁구 등 전 세계 50종 이상의 방대한
              스포츠 종목에 대한 게임 서비스를 제공한다. 위믹스에서 서비스되는
              ‘Project WEMIX Sports’에서는 실제 경기 데이터를 바탕으로 이용자간
              예측 대전이 진행되며, 위메이드가 제시한 신개념 P&E(play and earn)
              요소를 도입해 한층 차별화 된 즐거움을 제공할 것으로 기대된다.
              <br />
              <br />
              장현국 위메이드 대표는 “위믹스는 모든 장르의 게임을 바로 블록체인
              게임으로 변혁시킬 수 있는 현존하는 유일한 플랫폼"이라며, “‘Project
              WEMIX Sports’가 글로벌 시장에서 대표적 P&E 스포츠 예측 게임의
              포지션을 선점할 수 있도록 최선을 다해 협력하겠다"고 밝혔다.
              <br />
              <br />
              NHN빅풋 김상호 대표는 “위메이드와 협업을 통해 위믹스 플랫폼에 있는
              다양한 글로벌 이용자들과 접점을 만들어 나갈 것으로 기대한다”며,
              “앞으로도 블록체인 플랫폼의 장점을 극대화할 수 있는 게임을 지속
              제공해 나가면서 게임과 플랫폼 간 선순환 구조를 만들어가도록
              노력하겠다"고 말했다.
              <br />
              <br />
              한편, NHN빅풋은 &lt;한게임 포커&gt;, &lt;한게임 섯다&amp;맞고&gt;
              등 웹보드 게임의 서비스 노하우를 비롯한 스포츠게임 분야 전문성을
              바탕으로, 야구 시뮬레이 션 게임 &lt;야구9단&gt; 등을 서비스하고
              있고, 다양한 스포츠 시뮬레이션 게임을 개발하고 있다.
            </div>
          </ArtiTop>

          <ArtiBottom>
            <ButtonWrap>
              <ButtonSpan>이전 글</ButtonSpan>
              <GoButton>이전 글이 없습니다.</GoButton>
            </ButtonWrap>
            <GoList>목록</GoList>
            <ButtonWrap id="next">
              <ButtonSpan>다음 글</ButtonSpan>
              <GoButton>NHN, 게임자회사 'NHN빅풋'으로 통합</GoButton>
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
