import React from "react";
import Page from "components/Layout/Page";
import { useMatchBreakpoints } from "@aethermeta/uikit";
import Welcome from "./Welcome";
import Roadmap from "./Roadmap";
import Ready from "./Ready";
import Contact from "./Contact";
import ReadyTablet from "./ReadyTablet";

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
