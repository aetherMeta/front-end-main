import React from "react";
import Page from "components/Layout/Page";
import { useMatchBreakpoints } from "@aethermeta/uikit";
import Items from "./items";
import testItems from "./testItems";

const Collections: React.FC = () => {
    const { isTablet, isMobile } = useMatchBreakpoints();
    return (
      <Page>
        {/* {isTablet || isMobile ? <PartnersTablet /> : <Partners />}  */}
        <Items {testItems}/>
      </Page>   
      );
    };
    
export default Collections;