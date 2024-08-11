import React from "react";
import styled from "styled-components";
import {
  FaHeart,
  FaThumbsUp,
  FaLightbulb,
  FaHandsHelping,
  FaLink,
} from "react-icons/fa";

function ValuesSection() {
  const values = [
    { icon: <FaHeart />, text: "Dedication to Customers" },
    { icon: <FaThumbsUp />, text: "Non-compromised Quality" },
    { icon: <FaLightbulb />, text: "Innovation" },
    { icon: <FaHandsHelping />, text: "Responsibility" },
    { icon: <FaLink />, text: "Team Collaboration" },
  ];

  return (
    <Wrapper>
      <div className="values-section container-fluid wow animate__animated animate__fadeIn">
        <h2 className="text-center mt-5">OUR VALUES</h2>
        <div className="values-container">
          {values.map((value, index) => (
            <div
              key={index}
              className="value-card wow animate__animated animate__fadeInUp"
              data-wow-delay={`${index * 0.2}s`}
            >
              <div className="value-icon">{value.icon}</div>
              <div className="value-text">{value.text}</div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .container-fluid {
    padding: 0px 100px !important;
    margin-bottom: 80px;
  }
  .values-section {
    text-align: start;
    padding: 20px;
  }

  .values-section h2 {
    font-size: 34px;
    margin-bottom: 20px;
    font-weight: 600;
    font-family: serif;
  }

  .values-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .value-card {
    text-align: center;
    margin: 10px;
  }

  .value-icon {
    font-size: 75px;
    margin-bottom: 10px;
    color: #1b1a1a;
    transition: 0.4s all ease-in-out;
  }
  .value-icon:hover {
    color: #85929e !important;
  }

  .value-text {
    font-size: 1.3rem;
    font-weight: 800;
    font-family: serif;
    color: #000;
  }

  @media (max-width: 1024px) {
    .value-icon {
      font-size: 35px;
      margin-bottom: 10px;
      color: #1b1a1a;
    }

    .value-text {
      font-size: 1rem;
      /* font-weight: bold; */
      color: #000;
    }
  }
  @media (max-width: 768px) {
    .container-fluid {
      padding: 0px 80px !important;
    }
    .values-section h2 {
      font-size: 26px;
      margin-bottom: 20px;
    }
    .value-icon {
      font-size: 30px;
      margin-bottom: 10px;
      color: #1b1a1a;
    }

    .value-text {
      font-size: 12px;
      /* font-weight: bold; */
      color: #000;
    }
  }
  @media (max-width: 600px) {
    .container-fluid {
      padding: 0px 60px !important;
      margin-bottom: 25px;
    }
    .values-container {
      flex-direction: column !important;
    }
    .value-icon {
      font-size: 35px;
      margin-bottom: 10px;
      color: #1b1a1a;
    }

    .value-text {
      font-size: 15px;
      /* font-weight: bold; */
      color: #000;
    }
  }
`;
export default ValuesSection;
