import React from "react";
import Page from "components/Layout/Page";
import { useMatchBreakpoints } from "@aethermeta/uikit";
import Social from "./Social";
import SocialTablet from "./SocialTablet";

const Contact: React.FC = () => {
  const { isTablet, isMobile } = useMatchBreakpoints();
  return <Page>{isTablet || isMobile ? <SocialTablet /> : <Social />}</Page>;
};

export default Contact;
