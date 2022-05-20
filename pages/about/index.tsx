import React from "react";
import { useMatchBreakpoints } from "@aethermeta/uikit";
import Page from "../../components/Layout/Page";
import Welcome from "../../components/About/Welcome";
import Roadmap from "../../components/About/Roadmap";
import Ready from "../../components/About/Ready";
import ReadyTablet from "../../components/About/ReadyTablet";
import Contact from "../../components/About/Contact";

const About: React.FC = () => {
  const { isTablet, isMobile } = useMatchBreakpoints();
  return (
    <Page>
      <Welcome />
      <Roadmap />
      {isTablet || isMobile ? <ReadyTablet /> : <Ready />}
      <Contact />
    </Page>
  );
};

export default About;
