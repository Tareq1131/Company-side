import React from "react";
import styled from "styled-components";

import Slider from "../../components/homeSlider/Slider";
import MissionVission from "./MissionVission";
import ValuesSection from "./ValuesSection";
import WhyRMS from "./WhyRMS";
import ValueProposition from "./ValueProposition";

function Home() {
  return (
    <Wrapper>
      <>
        <div>
          <Slider />
        </div>

        <div>
          <MissionVission />
        </div>

        <div>
          <ValuesSection />
        </div>

        <div>
          <WhyRMS />
        </div>

        <div>
          <ValueProposition />
        </div>
        {/* <div>
          <Footer />
        </div> */}
      </>
    </Wrapper>
  );
}
const Wrapper = styled.section``;
export default Home;
