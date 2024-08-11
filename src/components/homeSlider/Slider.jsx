import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import styled from "styled-components";
import slider1 from "./../../assets/Images/img2.png";
import slider2 from "./../../assets/Images/img3.jpg";
import slider3 from "./../../assets/Images/img.png";
import slider4 from "./../../assets/Images/img2.png";

import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <Wrapper>
      <Swiper
        className="swiper-wrapper"
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        pagination={{
          el: ".testimonial-dot",
          clickable: true,
        }}
        mousewheel
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        <SwiperSlide className="swiper-slide ">
          <Link>
            <img src={slider1} alt="slider1" className="img-fluid" />
          </Link>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide ">
          <Link>
            <img src={slider2} alt="slider2" className="img-fluid" />
          </Link>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide ">
          <Link>
            <img src={slider3} alt="slider3" className="img-fluid" />
            {/* <div
              className="carousel-caption  d-md-block"
              style={{ color: "black", textAlign: "center" }}
            >
              <h5>committed to provide 100% original & halal food</h5>
              <p style={{ color: "black" }}>
                Naturiko one of the trusted place to buy natural healthy foods.
              </p>
            </div> */}
          </Link>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide ">
          <Link>
            <img src={slider4} alt="slider4" className="img-fluid" />
          </Link>
        </SwiperSlide>
        {/* Add navigation buttons */}

        <div className="swiper-button-next" style={{ color: "#ffff" }}>
          &gt;
        </div>
        <div className="swiper-button-prev" style={{ color: "#ffff" }}>
          &lt;
        </div>
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 130px;

  .swiper-button-prev {
    background: transparent !important;
    color: #000 !important;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
  .swiper-button-next {
    background: transparent !important;
    color: #000 !important;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-family: Arial;
    font-size: 0;
  }

  .img-fluid {
    width: 100%;
    height: 600px;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    margin-top: 100px;
  }
  @media (max-width: 500px) {
    margin-top: 90px;
  }

  @media (max-width: 550px) {
    .img-fluid {
      height: 300px;
      object-fit: cover;
      background-color: #bd1f1f;
    }
  }
`;

export default Slider;
