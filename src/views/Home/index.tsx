import React from "react";
import Page from "components/Layout/Page";
import Partners from "components/Partners/Partners";
import { useMatchBreakpoints } from "@aethermeta/uikit";
import ViewNFTs from "./ViewNFTs";
import ViewNFTsTablet from "./ViewNFTsTablet";
import LearnMore from "./LearnMore";
import AboutAether from "./AboutAether";
import AboutAetherTablet from "./AboutAetherTablet";
import Steps from "./Steps";
import StepsTablet from "./StepsTablet";
import Collection from "./Collection";
import CollectionTablet from "./CollectionTablet";
import { testItems } from "./Items";

const Home: React.FC = () => {
  const { isTablet, isMobile } = useMatchBreakpoints();
  return (
    <Page>
      {isTablet || isMobile ? <ViewNFTsTablet /> : <ViewNFTs />}
      <LearnMore />
      {isTablet || isMobile ? <StepsTablet /> :  <Steps />}
      {isTablet || isMobile ? <CollectionTablet items={testItems} /> :  <Collection items={testItems} />}
      {isTablet || isMobile ? <AboutAetherTablet /> : <AboutAether />}
      <Partners />
    </Page>
  );
};

export default Home;
