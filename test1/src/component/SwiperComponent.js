import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import NextButtonImg from "../assets/images/next.svg";
import PrevButtonImg from "../assets/images/prev.svg";
import Phone1 from "./Phone1";
import Phone2 from "./Phone2";

import "swiper/swiper.scss";
import "./swiper.css";

SwiperCore.use([Navigation]);

const SwiperContainer = styled.div`
  position: absolute;
  top: 20%;
  background: rgb(255, 255, 255);
  box-shadow: rgb(192 192 192) 0px 3px 8px 2px;
  z-index: 1;
  display: block;
  right: 15%;
  width: 271px;
  height: 585px;
  border-radius: 15px;
  @media (max-width: 1200px) {
    top: 13%;
    right: 5%;
    transform: scale(0.7);
  }
  @media (max-width: 900px) {
    right: 0%;
    transform: scale(0.5);
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const SwiperPrevButton = styled.img.attrs({
  src: PrevButtonImg,
})`
  position: absolute;
  top: 50%;
  left: -100px;
  z-index: 2;
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

const SwiperNextButton = styled(SwiperPrevButton).attrs({
  src: NextButtonImg,
})`
  left: 320px;
`;

function SwiperComponent() {
  return (
    <>
      <SwiperContainer>
        <SwiperNextButton className="swiper-next" />
        <SwiperPrevButton className="swiper-prev" />
        <Swiper
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}>
          <SwiperSlide>
            <Phone1 />
          </SwiperSlide>
          <SwiperSlide>
            <Phone2 />
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
    </>
  );
}

export default SwiperComponent;
