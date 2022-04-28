import React from "react";
import Page from "components/Layout/Page";
import Welcome from "./Welcome";
import Roadmap from "./Roadmap";
import Ready from "./Ready";
import Contact from "./Contact";

const About: React.FC = () => {
  return (
    <Page>
      <Welcome />
      <Roadmap />
      <Ready />
      <Contact />
    </Page>
  );
};

export default About;
