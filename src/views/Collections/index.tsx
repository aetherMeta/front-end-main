import React from "react";
import styled from "styled-components";
import Page from "components/Layout/Page";
import { useMatchBreakpoints, Spinner, Flex } from "@aethermeta/uikit";
import {
  useCollections,
  useUpdateCollectionPage,
} from "store/collections/hooks";
import GalleryMobile from "./GalleryMobile";
import Gallery from "./Gallery";

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
  const { data, total, pageSize, currentPage, isLoading, isLoaded } =
    useCollections();
  const { updateCollectionPage: updatePage } = useUpdateCollectionPage();
  const items = data[currentPage];
  const { isTablet, isMobile } = useMatchBreakpoints();
  return (
    <Page>
      <Container>
        {isLoading || !isLoaded ? (
          <Flex width="100%" justifyContent="center">
            <Spinner size={108} />
          </Flex>
        ) : isTablet || isMobile ? (
          <GalleryMobile
            items={items}
            total={total}
            pageSize={pageSize}
            updatePage={updatePage}
            currentPage={currentPage}
          />
        ) : (
          <Gallery items={items} />
        )}
      </Container>
    </Page>
  );
};

export default Collections;
