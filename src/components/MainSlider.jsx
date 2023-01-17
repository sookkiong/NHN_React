import Slider from "react-slick";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { sliderItem } from "./main/main";
import "../slick/slick.css";
import "../slick/slick-theme.css";

const Sliders = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <Wrapper>
      <MainSlideStyle {...settings}>
        {sliderItem.map((v) => {
          return (
            <div onClick={() => window.open(v.url)}>
              <TextBox>
                <div
                  style={{
                    fontSize: "70px",
                    fontWeight: "900",
                    lineHeight: "1.2",
                  }}
                >
                  {v.title}
                </div>
                <div style={{ width: "60%", margin: "15px 0 30px 1px" }}>
                  <img
                    src={`/img/maintxt${v.id}.png`}
                    alt="슬라이드 텍스트"
                    width="100%"
                  />
                </div>
                {v.text.split("\n").map((v) => {
                  return <div style={{ fontSize: "20px" }}>{v}</div>;
                })}
              </TextBox>

              <SlideBg bg={v.id}></SlideBg>
            </div>
          );
        })}
      </MainSlideStyle>
    </Wrapper>
  );
};

export default Sliders;

const Wrapper = styled.div`
  width: 65%;
  height: 65%;
  margin-top: 5%;
  cursor: pointer;
`;

const TextBox = styled.div`
  width: 45%;
  position: absolute;
  left: 0;
  top: 10%;
  color: #fff;
`;
const SlideBg = styled.div`
  background: url("/img/slide${(props) => props.bg}.png") no-repeat right bottom;
  background-size: contain;
  width: 70%;
  height: 100%;
  position: absolute;
  right: 0;
  z-index: 1;
`;
const MainSlideStyle = styled(Slider)`
  .slick-slide {
    position: relative;
    height: 32vw;
  }
  .slick-dots {
    position: absolute;
    display: block;
    width: fit-content;
    right: -15%;
    top: 45%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }
`;
