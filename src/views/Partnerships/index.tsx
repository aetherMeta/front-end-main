import React from "react";
import Page from "components/Layout/Page";
import { useMatchBreakpoints } from "@aethermeta/uikit";
import Partners from "./partners";
import Enquires from "./Enquries";
import PartnersTablet from "./partnersTablet";
import EnquiresTablet from "./EnquriesTablet";

const Partnerships: React.FC = () => {
  const { isTablet, isMobile } = useMatchBreakpoints();
  return (
    <Page>
      {isTablet || isMobile ? <PartnersTablet /> : <Partners />} 
      {isTablet || isMobile ? <EnquiresTablet /> : <Enquires />} 
    </Page>
  );
};

export default Partnerships;
