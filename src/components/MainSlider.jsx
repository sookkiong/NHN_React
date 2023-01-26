import Slider from "react-slick";
import styled from "styled-components";
import { useEffect } from "react";
import { sliderItem } from "./main/main";
import "../slick/slick.css";
import "../slick/slick-theme.css";
import { useState } from "react";

const Sliders = () => {
  const [up, setUp] = useState("");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
  };

  useEffect(() => {
    setUp("up");
  }, []);

  return (
    <Wrapper>
      <MainSlideStyle {...settings}>
        {sliderItem.map((v) => {
          return (
            <div onClick={() => window.open(v.url)}>
              <TextBox>
                {v.title.split("\n").map((v) => {
                  return <Title>{v}</Title>;
                })}
                <Banner>
                  <img
                    src={`/img/maintxt${v.id}.png`}
                    alt="슬라이드 텍스트"
                    width="100%"
                  />
                </Banner>
                {v.text.split("\n").map((v) => {
                  return <Explain>{v}</Explain>;
                })}
                <Link>{v.link}</Link>
              </TextBox>

              <SlideBg id={up} bg={v.id}></SlideBg>
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
  height: 31rem;
  margin-top: 7%;
  cursor: pointer;
  display: block;
  @media all and (max-width: 960px) {
    width: 80%;
    height: 23rem;
    margin-top: 0;
  }
  @media all and (max-width: 550px) {
    display: none;
  }
`;

const TextBox = styled.div`
  position: absolute;
  left: 0;
  top: 5%;
  color: #fff;
  z-index: 5;
`;
const Title = styled.div`
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 1.2;
  @media all and (max-width: 960px) {
    font-size: 3.2rem;
  }
`;
const Banner = styled.div`
  width: 60%;
  margin: 15px 0 30px 1px;
  @media all and (max-width: 960px) {
    display: none;
  }
`;
const Explain = styled.div`
  font-size: 1.3rem;
  @media all and (max-width: 960px) {
    font-size: 1rem;
  }
`;
const Link = styled.div`
  display: none;
  @media all and (max-width: 960px) {
    display: block;
    margin-top: 30px;
    font-size: 0.9rem;
    color: #e72f2c;
    background: #fff;
    width: fit-content;
    font-weight: 500;
    padding: 0 10px;
  }
`;
const SlideBg = styled.div`
  background: url("/img/slide${(props) => props.bg}.png") no-repeat right bottom;
  background-size: contain;
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0%;
  z-index: 1;
  transition: all 1s;
  &#up {
    bottom: 0;
  }
`;
const MainSlideStyle = styled(Slider)`
  .slick-slide {
    position: relative;
    height: 32rem;

    @media all and (max-width: 960px) {
      height: 25rem;
    }
  }
  .slick-dots {
    position: absolute;
    display: block;
    width: fit-content;
    height: fit-content;
    right: -15%;
    top: 35%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    @media all and (max-width: 960px) {
      left: 0;
      top: 85%;
    }
  }
  .slick-dots li {
    @media all and (max-width: 960px) {
      float: left;
    }
  }
`;
