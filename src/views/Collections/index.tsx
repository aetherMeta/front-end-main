import React from "react";
import styled from "styled-components";
import Page from "components/Layout/Page";
import { useMatchBreakpoints } from "@aethermeta/uikit";
import Gallery from "./Gallery";
import testItems from "./testItems";
import GalleryMobile from "./GalleryMobile";

const Container = styled.div`
  padding 80px 22px 80px;
  margin-top: -140px;
  background: url(/images/collectionBackground.svg), url(/images/collectionBackground2.svg);
  background-repeat: no-repeat;
  background-size: 100%;

 
  background-color: ${({ theme }) => theme.colors.background};
  ${({ theme }) => theme.mediaQueries.lg} {
    padding 124px 70px 142px;
  }
`;

const Collections: React.FC = () => {
  const { isTablet, isMobile } = useMatchBreakpoints();
  return (
    <Page>
      <Container>
        {isTablet || isMobile ? (
          <GalleryMobile items={testItems} />
        ) : (
          <Gallery items={testItems} />
        )}
      </Container>
    </Page>
  );
};

export default Collections;
