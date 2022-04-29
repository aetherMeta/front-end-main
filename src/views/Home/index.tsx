import React from "react";
import Page from "components/Layout/Page";
import { useMatchBreakpoints } from "@aethermeta/uikit";
import ViewNFTs from "./ViewNFTs";
import LearnMore from "./LearnMore";
import AboutAether from "./AboutAether";
import AboutAetherTablet from "./AboutAetherTablet";

const Home: React.FC = () => {
  const { isTablet, isMobile } = useMatchBreakpoints();
  return (
    <Page>
      <ViewNFTs />
      <LearnMore />
      {isTablet || isMobile ? <AboutAetherTablet /> : <AboutAether />}
    </Page>
  );
};

export default Home;
