import styled from "styled-components";

export const serviceList = [
  [
    { id: "#" },
    { id: "게임" },
    {
      id: "프렌즈팝",
      url: "https://play.google.com/store/apps/details?id=com.nhnpixelcube.friendspop&hl=ko&gl=US",
    },
    { id: "한게임", url: "https://www.hangame.com/" },
    {
      id: "건즈업!",
      url: "https://play.google.com/store/apps/details?id=com.nhn.gunsup&hl=ko&gl=US",
    },
  ],
  ["결제", "페이코", "NHN KCP", "컨텐츠"],
  ["코미코", "티켓링크", "벅스", "커머스"],
  ["샵바이", "IT", "NHN클라우드", "에듀테크"],
  ["아이엠스쿨", "기타", "핑크다이어리"],
];

export const Mails = () => {
  return (
    <div style={{ overflowY: "hidden" }}>
      <h1
        style={{
          backgroundColor: "#e72f2c",
          padding: "24px",
          fontSize: "24px",
          color: "#fff",
          fontWeight: "500",
        }}
      >
        대표메일
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            margin: "0",
            padding: "0",
            width: "300px",
          }}
        >
          <MailList>
            <Mail href="https://mail.naver.com/" target="_blank">
              [네이버] nhn@naver.com
            </Mail>
          </MailList>
          <MailList>
            <Mail
              href="https://mail.google.com/mail/u/0/?ogbl#inbox"
              target="_blank"
            >
              [구글] nhn@google.com
            </Mail>
          </MailList>
          <MailList>
            <Mail href="https://mail.daum.net/login?url=https%3A%2F%2Fmail.daum.net%2F">
              [다음] nhn@daum.net
            </Mail>
          </MailList>
        </ul>

        <MailClose onClick={() => window.close()}>닫기</MailClose>
      </div>
    </div>
  );
};

export const Privacy = () => {
  return (
    <>
      <TopTitle>개인정보 처리방침</TopTitle>

      <Container>
        <div id="top_notice">
          <div class="tn_1">엔에이치엔 개인정보 처리방침 (ver 6.0)</div>
          <div class="tn_2">
            NHN 주식회사(http://www.nhn.com 이하 “회사”라 함)는
            정보통신서비스제공자가 준수하여야 하는 대한민국의 관계 법령 및<br />
            개인정보보호 규정을 준수하며, 관련 법령에 의거한 개인정보처리방침을
            정하여 이용자 권익 보호에 최선을 다하고 있습니다.
            <br />
            <br />
            회사의 개인정보처리방침은 다음과 같은 내용을 담고 있습니다.
          </div>
        </div>

        <div class="rule">
          <SubTitle>1. 처리하는 개인정보 항목</SubTitle>
          <div class="rule1_text">
            첫째, 회사는 입사지원, 입사와 관련된 문의 응답, 취업보호 대상자의
            확인을 위해 아래와 같은 개인정보를 수집하고 있습니다.
            <br />
            <br />
            - 필수정보: 성명, 입사 지원 수정용 비밀번호, 이메일 주소, 생년월일,
            성별, 휴대전화번호, 국적, 학력사항, 경력사항(경력직), 병역
            사항(면제사유 및 복무계획)
            <br />
            - 선택정보: 경력사항(신입), 자격사항, 수상내역, 어학사항, 봉사활동,
            보훈 사항(보훈 대상의 경우 보훈번호 포함), 장애사항(장애구분,
            장애유형, 장애정도, 장애 등록 번호: 단. 장애가 있는 경우에 한함)
            <br />
            <br />
            둘째, 회사는 제휴제안 접수를 위하여 아래와 같은 개인정보를 수집하고
            있습니다. <br />
            - 필수정보: 회사(기관)명, 제안자명, 전화번호, 이메일 주소
            <br />
            <br />
            셋째, 회사는 기업윤리상담센터 상담/신고하기 접수를 위하여 아래와
            같은 개인정보를 수집하고 있습니다. 단, 익명으로 작성 시 개인정보를
            수집하지 않고 있습니다.
            <br />
            - 필수정보: 전화번호, 이메일주소, 성명, 비밀번호
            <br />
            <br />
            넷째, 회사 소재지 등 방문 시, 방문 신청 접수 및 출입증 발급,
            보안관리를 위해 아래와 같은 개인정보를 수집하고 있습니다.
            <br />
            가. 플레이뮤지엄 방문 신청 접수 시<br />
            - 필수정보: 이름, 소속회사/부서, CCTV영상정보, 출입기록
            <br />
            - 중요방문객의 경우 차량 이용 시: 차종, 색상, 차량번호
            <br />
            <br />
            나. 플레이허브(NCC1) 방문 신청 접수 시<br />
            - 필수정보: 이름, 소속회사/부서, CCTV영상정보, 출입기록
            <br />
            - 선택정보: 차종, 차량번호
            <br />
            <br />
            다. 출입증 발급 시<br />
            - 필수정보: 이름, 영문이름, 소속회사, CCTV영상정보, 출입기록
            <br />
            - 장기 출입증 발급 시 추가 수집 정보: 사진, 재직증명서
            <br />
            <br />
            라. 통제구역 출입 등 관리대장 기록 시<br />
            - 필수정보: 이름, 소속회사/부서, 휴대폰번호
            <br />
            <br />
            마. 일일 주차 신청 접수 시<br />
            - 필수정보: 성명, 차종, 차량번호
            <br />
            <br />
            바. NHN KR2 데이터센터 서버룸
            <br />
            - 필수정보: 성명, 소속, 연락처
            <br />
            <br />
          </div>
        </div>

        <div class="rule">
          <SubTitle>2. 개인정보의 처리 목적</SubTitle>
          <div class="rule2_text">
            가. 입사전형 진행, 입사 지원서 수정, 자격요건의 확인, 합격 여부
            확인, 지원자와의 원활한 의사소통 경로 확보
            <br />
            나. 제휴제안 접수 및 처리결과 회신
            <br />
            다. 기업윤리상담센터의 상담/신고 접수 및 처리결과 회신
            <br />
            라. 회사 소재지 등 방문 신청 접수 및 관리, 개인식별, 차량 확인, 주차
            신청 접수
          </div>
        </div>

        <div class="rule">
          <SubTitle>3. 개인정보의 제 3자 제공</SubTitle>
          <div class="rule3_text">
            회사는 개인정보를 "2. 개인정보의 처리목적"에서 고지한 범위내에서
            사용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나
            원칙적으로 이용자의 개인정보를 외부에 공개하지 않습니다. 다만,
            아래의 경우에는 예외로 합니다.
            <br />
            <br />
            - 이용자들이 사전에 공개에 동의한 경우
            <br />
            - 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와
            방법에 따라 수사기관의 요구가 있는 경우
            <br />
            <br />
            간혹 입사지원자에게 회사와 특수관계에 있는 회사(자회사, 계열사 등)에
            입사제안을 드릴 수 있으며, 이 경우 반드시 사전에 입사지원자에게 개별
            연락하여 동의 절차를 거친 후 입사지원서를 해당 회사로 이관합니다.
          </div>
        </div>

        <div id="bottom_notice">
          -공고 일자: 2021년 8월 31일
          <br />
          -시행 일자: 2021년 9월 7일
        </div>
        <Close onClick={() => window.close()}>닫기</Close>
      </Container>
    </>
  );
};

const TopTitle = styled.h1`
  background-color: #e72f2c;
  padding: 24px;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
`;
const Container = styled.div`
  padding: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

const Close = styled.button`
  padding: 12px 30px;
  cursor: pointer;
  display: block;
  background-color: #fff;
  color: #7c7c7c;
  border: 1px solid #7c7c7c;
  margin: 50px auto 30px;
  &:hover {
    background-color: #e72f2c;
    color: #fff;
    border: 1px solid #e72f2c;
  }
`;

const MailList = styled.li`
  width: 100%;
`;
const Mail = styled.a`
  display: block;
  width: 100%;
  text-align: center;
  padding: 15px 0;
  border: 1px solid #e72f2c;
  margin-bottom: 20px;
  color: #7c7c7c;
  text-decoration: none;
  background-color: #fff;
  &:hover {
    color: #fff;
    background-color: #e72f2c;
  }
`;

const MailClose = styled.button`
  padding: 10px 30px;
  margin-top: 10px;
  display: block;
  background-color: #fff;
  color: #7c7c7c;
  border: 1px solid #7c7c7c;
  cursor: pointer;
  &:hover {
    background-color: #e72f2c;
    color: #fff;
    border: 1px solid #e72f2c;
  }
`;
