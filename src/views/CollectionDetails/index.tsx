import React from "react";
import styled from "styled-components";
import Page from "components/Layout/Page";
import DetailHeader from "views/CollectionDetails/DetailHeader";
import SelectedItem from "views/CollectionDetails/SelectedItem";
import CollectionGallery from "views/CollectionDetails/CollectionGallery";
import testItems from "views/CollectionDetails/testItems";
import { useMatchBreakpoints, Flex } from "@aethermeta/uikit";
import DetailHeaderMobile from "./DetailHeaderMobile";

const Container = styled.div`
  display: flex;
  padding 80px 22px 0px;
  margin-top: -140px;
  background: url(/images/shop.svg);
  background-repeat: no-repeat;
  background-size: 1628px;
  background-position: right top;
  gap: 6.875rem;
  background-color: ${({ theme }) => theme.colors.background};
  ${({ theme }) => theme.mediaQueries.lg} {
    padding 124px 70px 142px;
  }
`;

const CollectionDetails: React.FC = () => {
  const { isTablet, isMobile } = useMatchBreakpoints();
  const isSmallScreen = isTablet || isMobile;
  return (
    <Page>
      <Container>
        {isSmallScreen ? (
          <Flex flexDirection="column">
            <DetailHeaderMobile
              total={45}
              handleSort={() => {
                return 0;
              }}
            />
            <CollectionGallery items={testItems} />
          </Flex>
        ) : (
          <>
            <SelectedItem results={45} />
            <Flex flexDirection="column" width="100%">
              <Flex alignSelf="flex-end">
                <DetailHeader />
              </Flex>
              <CollectionGallery items={testItems} />
            </Flex>
          </>
        )}
      </Container>
    </Page>
  );
};
export default CollectionDetails;
