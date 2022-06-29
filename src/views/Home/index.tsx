import React from "react";
import Page from "components/Layout/Page";
import Partners from "components/Partners/Partners";
import { useMatchBreakpoints } from "@aethermeta/uikit";
import { useDispatchUserPublicData } from "store/user/hooks";
import ViewNFTs from "./ViewNFTs";
import LearnMore from "./LearnMore";
import AboutAether from "./AboutAether";
import AboutAetherTablet from "./AboutAetherTablet";

const Home: React.FC = () => {
  const { isTablet, isMobile } = useMatchBreakpoints();
  useDispatchUserPublicData();
  return (
    <Page>
      <ViewNFTs />
      <LearnMore />
      {isTablet || isMobile ? <AboutAetherTablet /> : <AboutAether />}
      <Partners />
    </Page>
  );
};

export default Home;
