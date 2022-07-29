import React from "react";
import styled from "styled-components";
import Page from "components/Layout/Page";
import { useMatchBreakpoints } from "@aethermeta/uikit";
import Items from "./Gallery";
import testItems from "./testItems";

const CollectionBackground1 = styled(Page)`
  background-size: 100%;
  background-image: url(/images/collectionBackground.svg);
  background-repeat: no-repeat;
`

const Collections: React.FC = () => {
    const { isTablet, isMobile } = useMatchBreakpoints();
    return (
      <CollectionBackground1>
        {/* {isTablet || isMobile ? <PartnersTablet /> : <Partners />}  */}
        <Items items={testItems}/>
      </CollectionBackground1>   
      );
    };
    
export default Collections;