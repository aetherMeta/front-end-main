import React from "react";
import styled from "styled-components";
import Page from "components/Layout/Page";
import DetailHeader from "views/CollectionDetails/DetailHeader";
import SelectedItem from "views/CollectionDetails/SelectedItem";
import CollectionGallery from "views/CollectionDetails/CollectionGallery";
import { useMatchBreakpoints, Flex, Spinner } from "@aethermeta/uikit";
import {
  useCollectionDetails,
  useDispatchCollectionDetailPublicData,
  useUpdateCollectionDetailSort,
} from "store/collectionDetails/hooks";
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
  min-height : calc(-64px + 100vh);
  ${({ theme }) => theme.mediaQueries.lg} {
    padding 124px 70px 142px;
  }
`;

const CollectionDetails: React.FC = () => {
  useDispatchCollectionDetailPublicData();
  const {
    data,
    total,
    isLoaded,
    isLoading,
    name,
    description,
    imageUrl,
    sortOrder,
    sortField,
  } = useCollectionDetails();
  const { updateCollectionDetailSort } = useUpdateCollectionDetailSort();
  const { isTablet, isMobile } = useMatchBreakpoints();
  const isSmallScreen = isTablet || isMobile;
  return (
    <Page>
      <Container>
        {isLoading || !isLoaded ? (
          <Flex width="100%" justifyContent="center">
            <Spinner size={108} />
          </Flex>
        ) : isSmallScreen ? (
          <Flex flexDirection="column">
            <DetailHeaderMobile
              total={total}
              sortField={sortField}
              sortOrder={sortOrder}
              handleSort={updateCollectionDetailSort}
              imageUrl={imageUrl}
              description={description}
              name={name}
            />
            <CollectionGallery items={data} />
          </Flex>
        ) : (
          <>
            <SelectedItem
              results={total}
              imageUrl={imageUrl}
              description={description}
              name={name}
            />
            <Flex flexDirection="column" width="100%">
              <Flex alignSelf="flex-end">
                <DetailHeader
                  sortField={sortField}
                  sortOrder={sortOrder}
                  handleSort={updateCollectionDetailSort}
                />
              </Flex>
              <CollectionGallery items={data} />
            </Flex>
          </>
        )}
      </Container>
    </Page>
  );
};
export default CollectionDetails;
