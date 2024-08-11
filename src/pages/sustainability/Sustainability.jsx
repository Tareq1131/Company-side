import React, { useEffect } from "react";
import styled from "styled-components";
import { WOW } from "wowjs";
import "animate.css/animate.min.css";
import {
  FaHeart,
  FaThumbsUp,
  FaLightbulb,
  FaHandsHelping,
  FaLink,
} from "react-icons/fa";
import treeImg from "./../../assets/Images/tree-img.jpg";

const Sustainability = () => {
  useEffect(() => {
    const wow = new WOW({ live: false });
    wow.init();
  }, []);

  return (
    <Wrapper>
      <div className="sustainability my-5">
        <div className="container container-fluid ">
          <h2 className="mb-5 text-center wow animate__animated animate__fadeInUp">
            Sustainability
          </h2>
          <div className="all_certificate my-5">
            <h3 className="my-4 fw-bold wow animate__animated animate__fadeInDown">
              Certifications & Memberships
            </h3>
            <div className="crt_memberships">
              <div className="colll shadow py-2 wow animate__animated animate__fadeInLeft">
                <h4 className="mb-0">ISO</h4>
              </div>
              <div className="colll shadow py-2 wow animate__animated animate__fadeInRight">
                <h4 className="mb-0">ETI</h4>
              </div>
              <div className="colll shadow py-2 wow animate__animated animate__fadeInLeft">
                <h4 className="mb-0">CSR</h4>
              </div>
              <div className="colll shadow py-2 wow animate__animated animate__fadeInRight">
                <h4 className="mb-0">amfori BSCI</h4>
              </div>
            </div>
          </div>

          <div className="our_value my-5">
            <h3 className="my-4 text-center fw-bold wow animate__animated animate__fadeInUp">
              OUR VALUES
            </h3>
            <div className="single_value text-center">
              <div className="value_colll wow animate__animated animate__zoomIn">
                <FaHeart className="icon" />
                <h4 className="">Dedication to Customers</h4>
              </div>

              <div className="value_colll wow animate__animated animate__zoomIn">
                <FaThumbsUp className="icon" />
                <h4 className="">Non-compromised Quality</h4>
              </div>

              <div className="value_colll wow animate__animated animate__zoomIn">
                <FaLightbulb className="icon" />
                <h4 className="">Innovation</h4>
              </div>

              <div className="value_colll wow animate__animated animate__zoomIn">
                <FaHandsHelping className="icon" />
                <h4 className="">Responsibility</h4>
              </div>

              <div className="value_colll wow animate__animated animate__zoomIn">
                <FaLink className="icon" />
                <h4 className="">Team Collaboration</h4>
              </div>
            </div>
          </div>

          <div className="key_principles my-4">
            <h2 className="fw-bold wow animate__animated animate__fadeInUp">
              Key principles:
            </h2>
            <div className="wow animate__animated animate__fadeInLeft">
              <ul>
                <li>
                  Our employees are the foundation of our company’s strength.
                </li>
                <li>
                  Honesty and integrity are the cornerstones of our success.
                </li>
                <li>Customers are essential partners in our organization.</li>
                <li>Teamwork is the bedrock of our achievements.</li>
                <li>Compassion drives our growth.</li>
                <li>
                  Quality forms the foundation for sustained success in the long
                  term.
                </li>
              </ul>
            </div>
          </div>

          <div className="quality my-5">
            <h2 className="fw-bold wow animate__animated animate__fadeInUp">
              QUALITY POLICY
            </h2>
            <p className="mb-0 wow animate__animated animate__fadeInLeft">
              At RSM Trims Ltd, our commitment is to produce high-quality
              products while adhering to ethical and social standards.
            </p>
            <p className="mb-2 wow animate__animated animate__fadeInLeft">
              To achieve this, we:
            </p>
            <div className="wow animate__animated animate__fadeInRight">
              <ul>
                <li>
                  Foster a culture of integrity and high ethical standards.
                </li>
                <li>
                  Set clear objectives to guide our organization and drive
                  continuous improvement.
                </li>
                <li>
                  Strive to meet or surpass customers, regulatory, and legal
                  requirements.
                </li>
                <li>
                  Promote a positive atmosphere where we support each other
                  generously.
                </li>
                <li>
                  Invest in regular training to enhance our team’s skills.
                </li>
                <li>
                  Implement a Quality Management System (QMS) that aligns with
                  ISO 9001:2015 standards as a crucial means to achieve our
                  goals.
                </li>
              </ul>
            </div>
          </div>

          <div className="quality my-5">
            <h2 className="fw-bold wow animate__animated animate__fadeInUp">
              ENVIRONMENTAL POLICY:
            </h2>
            <p className="mb-0 wow animate__animated animate__fadeInLeft">
              The management is committed to managing environmental issues as an
              integral part of the business. We will do so by adhering to the
              following principles.
            </p>
          </div>

          <div className="key_principles my-5">
            <h2 className="fw-bold wow animate__animated animate__fadeInUp">
              COMPLIANCE:
            </h2>
            <div className="wow animate__animated animate__fadeInLeft">
              <ul>
                <li>
                  We’ll make sure to meet all the rules and laws that apply to
                  us at the national level and ILO.
                </li>
                <li>
                  We’ll put in place plans and steps to make sure we follow
                  these rules.
                </li>
                <li>
                  Complying with environmental standards will be an important
                  part of our training and how we evaluate performance.
                </li>
              </ul>
            </div>
          </div>

          <div className="key_principles my-5">
            <h2 className="fw-bold wow animate__animated animate__fadeInUp">
              Efficient Use of Resources, Pollution Prevention, and Risk
              Mitigation:
            </h2>
            <div className="wow animate__animated animate__fadeInRight">
              <ul>
                <li>
                  We’ll spot and stop or reduce pollution in all parts of our
                  operations whenever we can.
                </li>
                <li>
                  We’ll use systems and procedures to prevent anything harmful
                  to people, safety, or the environment, and we’ll be ready for
                  emergencies.
                </li>
                <li>
                  We’ll use as little energy as possible and use energy-saving
                  equipment.
                </li>
                <li>
                  Our Quality Policy will guide us in setting Quality
                  Objectives.
                </li>
              </ul>
            </div>
          </div>

          <div className="key_principles my-5">
            <h2 className="fw-bold wow animate__animated animate__fadeInUp">
              We will constantly endeavor to get better:
            </h2>
            <div className="wow animate__animated animate__fadeInLeft">
              <ul>
                <li>
                  We’ll track how we’re doing in the short, medium, and long
                  run.
                </li>
                <li>We’ll check our progress at least once a year.</li>
                <li>
                  We’ll keep looking for ways to do better environmentally,
                  using this policy as our guide for setting goals and targets.
                </li>
              </ul>
            </div>
          </div>

          <div className="wow animate__animated animate__zoomIn">
            <img
              src={treeImg}
              alt="Tree"
              style={{ width: "100%", height: "429px" }}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .sustainability h2 {
    color: #70ad47;
    font-family: Roboto Serif;
    font-size: 60px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .sustainability h3 {
    color: rgb(112, 173, 71);
    font-family: Roboto Serif;
    font-weight: 500;
    font-size: 32px;
  }
  .all_certificate {
    margin-bottom: 60px;
  }
  .colll {
    border: 1px solid #70ad47;
    border-top-left-radius: 14px;
    border-bottom-right-radius: 14px;
  }
  .colll h4 {
    color: #70ad47;
    font-size: 30px;
    font-weight: 600;
    font-family: serif;
  }
  .crt_memberships {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .colll h4 {
    text-align: center;
  }

  .single_value {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
  }
  .single_value .icon {
    font-size: 45px;
    color: #70ad47;
    margin-bottom: 15px;
    transition: 0.4s all ease-in-out;
  }

  .icon:hover {
    color: #aae582 !important;
  }
  .single_value h4 {
    font-size: 20px;
    color: #70ad47;
  }
  .key_principles h2,
  .quality h2 {
    font-size: 25px;
  }
  .key_principles,
  .quality ul li {
    color: #70ad47;
    font-size: 22px;
    text-align: justify;
  }
  .quality p {
    color: #70ad47;
    font-size: 22px;
    text-align: justify;
  }

  @media only screen and (max-width: 768px) {
    .crt_memberships {
      grid-template-columns: repeat(1, 1fr);
    }
    .single_value {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media only screen and (max-width: 500px) {
    .container-fluid {
      padding: 0px 30px !important;
    }
    .sustainability h2 {
      font-size: 30px !important;
    }
    .sustainability h3 {
      font-size: 20px;
      text-align: center;
    }
    .key_principles h2,
    .quality h2 {
      font-size: 20px !important;
    }
  }
  @media only screen and (max-width: 425px) {
    .sustainability h2 {
      font-size: 40px;
    }
    .key_principles,
    .quality ul li {
      font-size: 16px;
    }
    .quality p {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 320px) {
    .sustainability h2 {
      font-size: 25px;
    }
    .sustainability h3 {
      font-size: 18px;
    }
    .key_principles h2,
    .quality h2 {
      font-size: 18px;
    }
    .key_principles,
    .quality ul li {
      font-size: 14px;
    }
    .quality p {
      font-size: 14px;
    }
  }
`;

export default Sustainability;
