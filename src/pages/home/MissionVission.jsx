import styled from "styled-components";
import "animate.css/animate.min.css";
import handsImage from "./../../assets/Images/mission11.png";
import vintageDenimImage from "./../../assets/Images/img.png";

function MissionVission() {
  return (
    <Wrapper>
      <div className="mission-vision-container container-fluid">
        <div className="text-section">
          <div className="mission wow animate__animated animate__fadeInLeft">
            <h2>OUR MISSION</h2>
            <p>
            
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              repudiandae asperiores numquam dolorem voluptates animi eum
              ratione soluta a in blanditiis earum, maiores ab laboriosam dolore
              facilis tempora dolores ipsam quis? Tempore, itaque. Hic fuga quia
              expedita, neque saepe velit? Labore animi veniam voluptas quos sed
              at! Cupiditate repellendus natus omnis sunt optio debitis quisquam
              totam, excepturi iusto doloremque quasi vero alias quas minus?
              Eius, laborum. Illum rem similique suscipit quo expedita doloribus
              ex libero nobis quae aperiam quia officiis quasi vitae,
             
            </p>
          </div>
          <div className="vision wow animate__animated animate__fadeInRight">
            <h2>OUR VISION</h2>
            <p>
              “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              repudiandae asperiores numquam dolorem voluptates animi eum
              ratione soluta a in blanditiis earum, maiores ab laboriosam dolore
              facilis tempora dolores ipsam quis? Tempore, itaque. Hic fuga quia
              expedita, neque saepe velit? Labore animi veniam voluptas quos sed
              at! Cupiditate repellendus natus omnis sunt optio debitis quisquam
              totam, excepturi iusto doloremque quasi vero alias quas minus?
              Eius, laborum. Illum rem similique suscipit quo expedita doloribus
              ex libero nobis quae aperiam quia officiis quasi vitae,.”
            </p>
          </div>
        </div>
        <div className="image-section main_part ">
          <div className="wow animate__animated animate__zoomIn first_img">
            <img src={handsImage} alt="Hands" className="immg1" />
          </div>
          <div className="wow animate__animated animate__zoomIn second_img">
            <img
              src={vintageDenimImage}
              alt="Vintage Denim"
              className="immg2"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .container-fluid {
    padding: 20px 100px !important;
  }
  .mission-vision-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 40px;
  }

  .text-section {
    flex: 1;
    max-width: 50%;
  }

  .mission,
  .vision {
    margin-bottom: 20px;
  }

  h2 {
    font-size: 34px;
    margin-bottom: 15px;
    font-weight: 600;
    font-family: serif;
  }

  p {
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    text-align: justify;
    padding-right: 20px;
  }

  .image-section {
    /* flex: 1; */
    width: 50% !important;
    /* display: flex;
    justify-content: start;
    align-items: start; */
    /* flex-direction: row; */
    gap: 0px;
  }

  .image-section img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .main_part {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .first_img .immg1 {
    height: 500px;
    width: 350px;
    margin-right: -200px;
  }
  .second_img .immg2 {
    height: 290px;
    width: 360px;
  }

  @media (max-width: 1024px) {
    .mission-vision-container {
      flex-direction: column;
      width: 100%;
    }
    .text-section {
      max-width: 100%;
    }

    .image-section {
      max-width: 100% !important;
    }
    p {
      padding-right: 0px;
    }
  }

  @media (max-width: 768px) {
    .first_img .immg1 {
      height: 400px;
      width: 250px;
      margin-right: -150px;
    }
    .second_img .immg2 {
      height: 190px;
      width: 260px;
    }
  }
  @media (max-width: 500px) {
    .first_img .immg1 {
      height: 300px;
      width: 180px;
      /* margin-right: 0px; */
      /* margin-left: 50px !important; */
    }
    .second_img .immg2 {
      height: 150px;
      width: 180px;

      margin-left: 50px !important;
    }
  }
  @media (max-width: 425px) {
    .container-fluid {
      padding: 20px 60px !important;
    }

    /* .image-section {
      width: 100% !important;
      align-items: center;
    } */
  }
`;

export default MissionVission;
