import React from "react";
import Page from "components/Layout/Page";
import { useMatchBreakpoints } from "@aethermeta/uikit";
import styled from "styled-components";
import Partnership from "./Partnership";
import Enquires from "./Enquries";
import PartnershipTablet from "./PartnershipTablet";
import EnquiresTablet from "./EnquriesTablet";

const PartnershipsBackground = styled(Page)`
  background-size: 100%;
  background-image: url(/images/partnershipBackground.svg),
    linear-gradient(white, 15%, ${({ theme }) => theme.colors.background});
  background-repeat: no-repeat;
  overflow-x: hidden;
`;

const Partnerships: React.FC = () => {
  const { isTablet, isMobile } = useMatchBreakpoints();
  return (
    <PartnershipsBackground>
      {isTablet || isMobile ? <PartnershipTablet /> : <Partnership />}
      {isTablet || isMobile ? <EnquiresTablet /> : <Enquires />}
    </PartnershipsBackground>
  );
};

export default Partnerships;
