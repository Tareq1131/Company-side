import React from "react";
import styled from "styled-components";
import valuePosition from "./../../assets/Images/valueposition.jpg";

function ValueProposition() {
  return (
    <Wrapper>
      <div className="Container1 my-4 wow animate__animated animate__fadeIn">
        <h1 className="title">Value Proposition – Core Competencies</h1>
        <div className="Container wow animate__animated animate__zoomIn">
          <img src={valuePosition} alt="" className="diagram" />
          <div className="subtitle">
            <p className="text-center mb-0">SUPPLIER TO SOME OF THE</p>
            <p>SUPPLIER TO SOME OF THE WORLD'S MOST EXCLUSIVE BRANDS</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .Container1 {
    padding: 35px 100px 10px;
  }
  .Container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* height: 100vh; */
  }

  .title {
    font-size: 33px;
    font-weight: bold;
    margin-bottom: 20px;
    font-family: serif;
  }

  .diagram {
    width: 360px;
    height: 360px;
    margin-bottom: 30px;
    align-items: center;
  }

  .subtitle {
    font-size: 33px;
    font-weight: 600;
    text-align: justify;
    font-family: serif;
  }

  @media (max-width: 1440px) {
    .title {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .diagram {
      width: 340px;
      height: 340px;
      margin-bottom: 30px;
      align-items: center;
    }

    .subtitle {
      font-size: 30px;
    }
  }
  @media (max-width: 1024px) {
    .diagram {
      width: 300px;
      height: 300px;
      margin-bottom: 30px;
      align-items: center;
    }

    .subtitle {
      font-size: 20px;
    }
  }

  @media (max-width: 768px) {
    .Container1 {
      padding: 30px 80px 10px !important;
    }
    .title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 20px;
      text-align: center;
    }

    .diagram {
      width: 250px;
      height: 250px;
      margin-bottom: 25px;
      align-items: center;
    }

    .subtitle {
      font-size: 16px;
    }
  }
  @media (max-width: 600px) {
    .Container1 {
      padding: 30px 60px 10px !important;
    }
    .title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 20px;
      text-align: center;
    }

    .subtitle {
      font-size: 14px;
    }
  }
  @media (max-width: 425px) {
    .Container1 {
      padding: 20px 40px 10px !important;
    }
    .title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
      text-align: center;
    }

    .diagram {
      width: 180px;
      height: 180px;
      margin-bottom: 25px;
      align-items: center;
    }
    .subtitle {
      font-size: 8px;
      font-weight: bold;
    }
  }
  @media (max-width: 375px) {
    .Container1 {
      padding: 20px 40px 10px !important;
    }
    .title {
      font-size: 14px;
    }

    .diagram {
      width: 150px;
      height: 150px;
      margin-bottom: 25px;
      align-items: center;
    }
    .subtitle {
      font-size: 8px;
      font-weight: bold;
    }
  }
  @media (max-width: 320px) {
    .Container1 {
      padding: 20px 40px 10px !important;
    }
    .title {
      font-size: 10px;
    }

    .diagram {
      width: 140px;
      height: 140px;
      margin-bottom: 20px;
      align-items: center;
    }
    .subtitle {
      font-size: 6px;
      font-weight: bold;
    }
  }
`;
export default ValueProposition;
