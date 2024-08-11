import React from "react";
import styled from "styled-components";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <Wrapper>
      <div className="contact my-5">
        <div className="container container-fluid">
          <h2 className="text-center wow animate__animated animate__zoomIn">
            Contact us
          </h2>
          <div className="form_part mb-4 wow animate__animated animate__fadeInRight">
            <form>
              <div className="form-group">
                <label className="label mb-0" htmlFor="name">
                  Your Name
                </label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label className="label mb-0" htmlFor="email">
                  Your Email
                </label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label className="label mb-0" htmlFor="subject">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="message">
                  Your Message (optional)
                </label>
                <textarea id="message" name="message"></textarea>
              </div>
              <div className="form-group">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className="address text-center wow animate__animated animate__fadeInLeft">
            <div className="coll shadow py-2 ">
              <FaPhone className="iicon mb-3" />
              <h3>PHONE</h3>
              <h5 className="">+880765643</h5>
              <h5 className="">+880161628</h5>
            </div>
            <div className="coll shadow py-2">
              <MdEmail className="iicon mb-3" />
              <h3>EMAIL</h3>
              <h5 className="">info@mtrims.com</h5>
            </div>
            <div className="coll shadow py-2">
              <FaLocationDot className="iicon mb-3" />
              <h3>LOCATION</h3>
              <h5 className="">208, Savar , Dhaka</h5>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .contact h2 {
    font-size: 60px;
    font-family: Roboto Serif;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
  }
  .form_part {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
  .form-group textarea {
    height: 100px;
    resize: vertical;
  }
  .form-group button {
    padding: 10px 40px;
    border: 1px solid #0e0d0d;
    color: #0f0f0f;
    border-radius: 4px;
    font-weight: 700;
    font-family: serif;
    cursor: pointer;
    transition: 0.4s all ease-in-out;
  }
  .form-group button:hover {
    background-color: #030303;
    color: #fff;
  }
  .address {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  .address .coll {
    border: 1px solid #000;
    border-top-right-radius: 14px;
    border-bottom-left-radius: 14px;
  }
  .address .coll .iicon {
    font-size: 45px;
  }
  .address .coll h3 {
    font-size: 30px;
    font-weight: 600;
    font-family: serif;
    text-transform: uppercase;
  }
  .address .coll h5 {
    font-size: 15px;
  }
  @media only screen and (max-width: 768px) {
    .address {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 500px) {
    .container-fluid {
      padding: 0px 30px !important;
    }
    .contact h2 {
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 425px) {
    .address {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media only screen and (max-width: 375px) {
    .container-fluid {
      padding: 0px 30px !important;
    }
    .contact h2 {
      font-size: 30px;
    }
  }
`;
export default Contact;
