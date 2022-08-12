import React from "react";
import Page from "components/Layout/Page";
import { useMatchBreakpoints } from "@aethermeta/uikit";
import styled from "styled-components";
import Analytics from "./analytic";
import AnalyticsTablet from "./analyticTablet";
import Support from "./Support";
import SupportTablet from "./supportTablet";
import Asset from "./asset";
import AssetTablet from "./assetTablet";
import Enquires from "./enquires";
import EnquiresTablet from "./enquriesTablet";

const Container = styled(Page)`
  background-color: ${({ theme }) => theme.colors.background};
  background-size: 100%;
  background-image: url(/images/helpBackground.svg);
  background-repeat: no-repeat;
  overflow-x: hidden;
`;

const Help: React.FC = () => {
  const { isTablet, isMobile } = useMatchBreakpoints();
  return (
    // <HelpBackground>
    //   {isTablet || isMobile ? <PartnersTablet /> : <Partners />}
    //   {isTablet || isMobile ? <EnquiresTablet /> : <Enquires />}
    // </PartnershipsBackground>
    <Container>
      {isTablet || isMobile ? <AnalyticsTablet /> : <Analytics />}
      {isTablet || isMobile ? <SupportTablet /> : <Support />}
      {isTablet || isMobile ? <AssetTablet /> : <Asset />}
      {isTablet || isMobile ? <EnquiresTablet /> : <Enquires />}
    </Container>
  );
};

export default Help;
