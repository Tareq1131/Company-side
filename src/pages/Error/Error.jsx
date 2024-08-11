import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div>
            <h2>404</h2>
            <h3>UH OH! You're lost.</h3>
            <p>
              The page you are looking for does not exist. How you got here is a
              mystery. But you can click the button below to go back to the
              homepage.
            </p>
            <NavLink to="/">
              <button className="btn_color">Back to Home Page</button>
            </NavLink>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .container {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    min-height: 100vh;
    h2 {
      font-size: 6.5rem;
      margin-bottom: 3rem;
      color: #000;
    }
    h3 {
      font-size: 3.5rem;
      color: #000;
    }
    p {
      margin: 2rem 0;
      color: #000;
    }
    .btn_color {
      background-color: #1a1a18;
      color: white;
      border: 2px solid #000;
      padding: 12px 15px;
      border-radius: 5px;
      font-weight: 700;
      font-size: 15px;
      margin-top: 5px;
      &:hover {
        background-color: white;
        color: #000;
        border: 2px solid #000;
      }
    }
  }
`;
export default Error;
