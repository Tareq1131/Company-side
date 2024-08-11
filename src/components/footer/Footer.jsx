import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <footer className="footer">
        <p className="footer-text">
          <Link
            to=""
            target="blank"
            className="text-white text-decoration-none  "
          >
            <small>
              <small className="fs-9">&copy;Copyright {currentYear},</small>
              &nbsp; Designed & Developed By{" "}
              <span style={{ color: "red", cursor: "pointer" }}>MT</span>
              <span style={{ color: "green", cursor: "pointer" }}> iT</span>
            </small>
          </Link>
        </p>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .footer {
    background-color: #1a1a18;
    color: #fff;
    text-align: center;
    padding: 1.2rem 0;

    bottom: 0;
    width: 100%;
  }

  .footer-text {
    font-size: 1.2rem;
    padding: 12px;
  }

  @media (max-width: 1024px) {
    .footer-text {
      font-size: 1.2rem;
    }
  }
`;
export default Footer;
