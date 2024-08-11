import React from "react";
import styled from "styled-components";

function WhyRMS() {
  return (
    <Wrapper>
      <div className="Container wow animate__animated animate__fadeIn">
        <h1 className="title wow animate__animated animate__fadeInDown">
          WHY PSM?
        </h1>
        <ul className="list">
          <li
            className="item wow animate__animated animate__fadeInLeft"
            data-wow-delay="0.2s"
          >
            We guarantee: Excellent Service
          </li>
          <li
            className="item wow animate__animated animate__fadeInLeft"
            data-wow-delay="0.4s"
          >
            We guarantee: High Quality
          </li>
          <li
            className="item wow animate__animated animate__fadeInLeft"
            data-wow-delay="0.6s"
          >
            We guarantee: Sustainable Standards
          </li>
          <li
            className="item wow animate__animated animate__fadeInLeft"
            data-wow-delay="0.8s"
          >
            We guarantee: Dependability
          </li>
          <li
            className="item wow animate__animated animate__fadeInLeft"
            data-wow-delay="1s"
          >
            We guarantee: Competitive Pricing
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .Container {
    background-image: url(/bbgg.jpg);
    text-align: start;
    padding: 60px 100px;
    /* background-color: #f7f5f5d8; */
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }

  .title {
    font-size: 5em;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .list {
    /* list-style: none; */
    padding: 0px 30px;
  }

  .item {
    font-size: 1.4em;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 4em;
    }
    .item {
      font-size: 1.2em;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 600px) {
    .Container {
      padding: 40px 60px;
      /* text-align: center; */
      /* align-items: center; */
    }
    .title {
      font-size: 3.5em;
    }
    .item {
      font-size: 1.2em;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 500px) {
    .Container {
      padding: 30px 35px;
    }
    .title {
      font-size: 3.2em;
      text-align: center;
    }
    .item {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 425px) {
    .Container {
      padding: 25px 30px;
    }
    .title {
      font-size: 3em;
      text-align: center;
    }
    .item {
      font-size: 16px;
      margin-bottom: 8px;
    }
  }
  @media (max-width: 375px) {
    .Container {
      padding: 20px 25px;
    }
    .title {
      font-size: 2.5em;
      text-align: center;
    }
    .item {
      font-size: 14px;
      margin-bottom: 8px;
    }
  }
`;
export default WhyRMS;
