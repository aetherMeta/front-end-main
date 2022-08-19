import React from "react";
import Page from "components/Layout/Page";
import { useMatchBreakpoints } from "@aethermeta/uikit";
import styled from "styled-components";
import Analytics from "./Analytic";
import AnalyticsTablet from "./AnalyticTablet";
import Support from "./Support";
import SupportTablet from "./SupportTablet";
import Asset from "./Asset";
import AssetTablet from "./AssetTablet";
import Enquires from "./Enquires";
import EnquiresTablet from "./EnquriesTablet";

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
