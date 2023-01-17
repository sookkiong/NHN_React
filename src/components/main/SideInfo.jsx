import styled, { keyframes } from "styled-components";
import { articles } from "../article/article";
import { useRecoilState } from "recoil";
import { sideOnState } from "../../store/state";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SideBox = () => {
  const navigate = useNavigate();
  const [on, setOn] = useRecoilState(sideOnState);
  const [ani, setAni] = useState(1);

  const aniID = (id) => {
    return id === ani ? "ani" : undefined;
  };

  useEffect(() => {
    setTimeout(() => (ani < 5 ? setAni(ani + 1) : setAni(1)), 1500);
  }, [ani]);

  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <Close
        onClick={() => {
          setOn(false);
        }}
      />
      <BoxTitle>NHN의 최근 소식</BoxTitle>
      {articles.slice(0, 5).map((v) => {
        return (
          <List
            id={aniID(v.id)}
            onClick={() => {
              navigate(`/article/detail?id=${v.id}`);
              setOn(false);
            }}
          >
            {v.title}
          </List>
        );
      })}
      <More>뉴스 더 보기</More>
    </Wrapper>
  );
};
export default SideBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 20%;
  height: 100%;
  background: #e72f2c;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 40%);
  cursor: default;
  text-align: left;
  padding: 20px;
`;
const Close = styled.button`
  border: none;
  width: 25px;
  height: 25px;
  cursor: pointer;
  background: url("/img/close.png") no-repeat center center;
  background-size: contain;
  margin: 30px 0 30px auto;
`;
const BoxTitle = styled.div`
  font-size: 24px;
  color: #fff;
  font-weight: 600;
  margin-bottom: 30px;
`;
const ListAni = keyframes`
    0%{
        color: rgba(255,255,255,0.5);
        border-bottom: 1px solid rgba(255,255,255,0.5);
    }
    100%{
        color: #fff;
        border-bottom: 1px solid #fff;
    }
`;

const List = styled.div`
  padding-bottom: 15px;
  font-size: 16px;
  text-align: justify;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  &:hover {
    color: #fff;
    border-bottom: 1px solid #fff;
    font-weight: 600;
  }
  &#ani {
    animation: ${ListAni} 1s ease-out infinite;
    animation-direction: alternate;
    font-weight: 600;
    animation-fill-mode: fowards;
  }
`;
const More = styled.div`
  cursor: pointer;
  padding-right: 30px;
  margin-left: auto;
  margin-top: 20px;
  background: url("/img/sidemore.png") no-repeat right center;
  background-size: contain;
  color: #fff;
  font-weight: 500;
  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
`;
