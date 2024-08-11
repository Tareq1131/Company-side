import React from "react";
import styled from "styled-components";
import productImg1 from "./../../assets/Images/img2.png";
import productImg2 from "./../../assets/Images/img3.jpg";
import productImg3 from "./../../assets/Images/mt.jpg";
import productImg4 from "./../../assets/Images/rms-product-4.png";
import productImg5 from "./../../assets/Images/rms-product-5.png";
import productImg6 from "./../../assets/Images/rms-product-6.png";

const Products = () => {
  return (
    <Wrapper>
      <div className="products my-5">
        <div className="container">
          <div className="mb-5 wow animate__animated animate__fadeInUp">
            <h1>Products</h1>
            <p>
              Trims are like the brand’ s signature. Showcasing not only the
              product’ s excellence but also representing the brand’ s distinctive
              character. We do not just put trims on our products; we use them
              to tell a story about the brand and safeguard the brand’ s unique
              identity.
            </p>
          </div>

          <div className="all_products">
            <div className="products_items mb-4 wow animate__animated animate__fadeInLeft">
              <div className="d-flex justify-content-between align-items-center resv_part">
                <div className="textt" style={{ width: "45%" }}>
                  <h3 className="text-center">CARE LABEL</h3>
                </div>

                <div style={{ width: "55%" }} className="imgg">
                  <img src={productImg1} alt="" className="product-image" />
                </div>
              </div>
            </div>

            <div
              className="products_items mb-4 wow animate__animated animate__fadeInRight"
              data-wow-delay="0.2s"
            >
              <div className="d-flex justify-content-between align-items-center resv_part">
                <div className="textt" style={{ width: "45%" }}>
                  <h3 className="text-center">LINEN CANVAS</h3>
                </div>
                <div style={{ width: "55%" }} className="imgg">
                  <img src={productImg2} alt="" className="product-image" />
                </div>
              </div>
            </div>

            <div
              className="products_items2 mb-4 wow animate__animated animate__fadeInLeft"
              data-wow-delay="0.4s"
            >
              <div className="d-flex justify-content-between align-items-center resv_part2">
                <div style={{ width: "55%" }} className="imgg">
                  <img src={productImg3} alt="" className="product-image" />
                </div>

                <div className="textt" style={{ width: "45%" }}>
                  <h3 className="text-center">ADHESIVE LABEL</h3>
                </div>
              </div>
            </div>

            <div
              className="products_items2 mb-4 wow animate__animated animate__fadeInRight"
              data-wow-delay="0.6s"
            >
              <div className="d-flex justify-content-between align-items-center resv_part2">
                <div style={{ width: "55%" }} className="imgg">
                  <img src={productImg4} alt="" className="product-image" />
                </div>

                <div className="textt" style={{ width: "45%" }}>
                  <h3 className="text-center">PATCH & BADGE</h3>
                </div>
              </div>
            </div>

            <div
              className="products_items mb-4 wow animate__animated animate__fadeInLeft"
              data-wow-delay="0.8s"
            >
              <div className="d-flex justify-content-between align-items-center resv_part">
                <div className="textt" style={{ width: "45%" }}>
                  <h3 className="text-center">ADHESIVE LABEL</h3>
                </div>
                <div style={{ width: "55%" }} className="imgg">
                  <img src={productImg5} alt="" className="product-image" />
                </div>
              </div>
            </div>

            <div
              className="products_items mb-4 wow animate__animated animate__fadeInRight"
              data-wow-delay="1s"
            >
              <div className="d-flex justify-content-between align-items-center resv_part">
                <div className="textt" style={{ width: "45%" }}>
                  <h3 className="text-center">TAPE & CORD</h3>
                </div>
                <div style={{ width: "55%" }} className="imgg">
                  <img src={productImg6} alt="" className="product-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .products h1 {
    font-size: 60px;
    font-family: Roboto Serif;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
  }
  .products p {
    font-size: 16px;
    text-align: justify;
  }
  .all_products {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .imgg {
    padding: 10px;
  }
  .products_items h3,
  .products_items2 h3 {
    font-family: Roboto Serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 22px;
    text-align: center;
  }

  .products_items,
  .products_items2 {
    border: 1px solid black;
    border-radius: 5px;
  }
  .product-image {
    width: 100%;
    height: 270px;
    transition: transform 0.3s ease, filter 0.3s ease; /* Transition for smooth effect */
  }
  .product-image:hover {
    transform: scale(1.08); /* Slightly enlarge the image */
    /* filter: brightness(0.9);  */
  }

  @media only screen and (max-width: 769px) {
    .all_products {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media only screen and (max-width: 425px) {
    .products h1 {
      font-size: 40px;
    }
    .resv_part {
      flex-direction: column-reverse !important;
      gap: 30px !important;
    }
    .resv_part2 {
      flex-direction: column !important;
      gap: 30px !important;
    }
    .imgg {
      width: 100% !important;
    }
    .product-image {
      width: 100% !important;
    }
    .textt {
      width: 100% !important;
      margin-bottom: 25px !important;
    }
  }
`;

export default Products;
