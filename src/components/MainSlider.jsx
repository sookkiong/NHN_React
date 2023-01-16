import Slider from "react-slick";
import styled from "styled-components";
import { sliderItem } from "./main/main";
import "../slick/slick.css";
import "../slick/slick-theme.css";

const Sliders = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <div
      style={{
        width: "70%",
        height: "65%",
        zIndex: "100",
        marginTop: "5%",
      }}
    >
      <MainSlideStyle {...settings}>
        {sliderItem.map((v) => {
          return (
            <div style={{}}>
              <TextBox>
                <div>{v.title}</div>
                <div>{v.text}</div>
                <div>{v.link}</div>
              </TextBox>

              <SlideBg bg={v.id}></SlideBg>
            </div>
          );
        })}
      </MainSlideStyle>
    </div>
  );
};

export default Sliders;

const MainSlideStyle = styled(Slider)`
  .slick-slide {
    position: relative;
    height: 33vw;
    border: 1px solid blue;
  }
`;

const TextBox = styled.div`
  width: 30%;
  height: 500px;
  border: 1px solid blue;
  position: absolute;
  left: 0;
`;
const SlideBg = styled.div`
  background: url("/img/slide${(props) => props.bg}.png") no-repeat center
    center;
  background-size: contain;
  width: 50%;
  height: 500px;
  border: 1px solid #fff;
  position: absolute;
  right: 0;
`;
