import React, { useState, useMemo } from "react";
import styled from "styled-components";
import {
  Flex,
  Text,
  Grid,
  ButtonMenuPrimary,
  ButtonMenuPrimaryItem,
  Pagination,
} from "@aethermeta/uikit";
import GalleryItems from "../GalleryItems";
import { Item } from "../types";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5.75rem;
`;

const GalleryGrid = styled(Grid)`
  grid-template-columns: auto;
  justify-content: center;
  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: 50% 50%;
  }
`;

const ButtonMenuPrimaryItemFilter = styled(ButtonMenuPrimaryItem)`
  border-radius: 16px;
  height: 2.5rem;
  width: 14rem;
`;

interface GalleryProps {
  items: Item[];
}

const GalleryMobile: React.FC<GalleryProps> = ({ items }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (newIndex) => setIndex(newIndex);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 16;
  const shopItemsData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return items.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, items]);

  return (
    <>
      <Flex flexDirection="column" m="3rem 0rem 1rem">
        <Text variant="h1Bold" mt="1rem" mr="1rem" mb="1rem">
          COLLECTIONS
        </Text>
        <div
          style={{
            overflowX: "auto",
            overflowY: "hidden",
            scrollbarWidth: "none",
          }}
        >
          {/* <ButtonMenuPrimary
            activeIndex={index}
            onItemClick={handleClick}
            scale="sm"
            variant="subtle"
          >
            <ButtonMenuPrimaryItemFilter mr="1rem">
              Haute couture clothing
            </ButtonMenuPrimaryItemFilter>
            <ButtonMenuPrimaryItemFilter mr="1rem">Accessories</ButtonMenuPrimaryItemFilter>
            <ButtonMenuPrimaryItemFilter mr="1rem">
              Watches & Jewelry
            </ButtonMenuPrimaryItemFilter>
            <ButtonMenuPrimaryItemFilter mr="1rem">
              Homes and estates
            </ButtonMenuPrimaryItemFilter>
            <ButtonMenuPrimaryItemFilter mr="1rem">automobile</ButtonMenuPrimaryItemFilter>
          </ButtonMenuPrimary> */}
        </div>
      </Flex>
      <GalleryGrid>
        {shopItemsData.map((item) => (
          <GalleryItems item={item} />
        ))}
      </GalleryGrid>
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalCount={items.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </PaginationContainer>
    </>
  );
};

export default GalleryMobile;
