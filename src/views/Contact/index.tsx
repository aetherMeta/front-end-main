import React from "react";
import Page from "components/Layout/Page";
import { useMatchBreakpoints } from "@aethermeta/uikit";
import Social from "./social";
import SocialTablet from "./socialTablet";

const Contact: React.FC = () => {
  const { isTablet, isMobile } = useMatchBreakpoints();
  return <Page>{isTablet || isMobile ? <SocialTablet /> : <Social />}</Page>;
};

export default Contact;
