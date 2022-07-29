import React, { useState, useMemo } from "react";
import styled from "styled-components";
import {
  Flex,
  Text,
  Grid,
  ButtonMenu,
  ButtonMenuItem,
  Pagination,
} from "@aethermeta/uikit";
import Gallery from "views/Collections/galleryItems";
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
`

interface GalleryProps {
  items: Item[];
}

const Items: React.FC<GalleryProps> = ({ items }) => {
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
      <Flex style={{ flexDirection: "column", margin: "3rem 0rem 1rem"}}>
        <Text
          variant="h1Bold"
          style={{
            marginTop: "1rem",
            marginRight: "1rem",
            marginBottom: "1rem",
          }}
        >
          COLLECTIONS
        </Text>
        <div
          style={{
            overflowX: "auto",
            overflowY: "hidden",
            scrollbarWidth: "none",
          }}
        >
          <ButtonMenu
            activeIndex={index}
            onItemClick={handleClick}
            scale="sm"
            variant="white"
          >
            <ButtonMenuItem
              style={{
                marginRight: "1rem",
                borderRadius: "16px",
                borderColor: "#D4DDDC",
                width:"20rem",
                height:"2.5rem",
              }}
            >
              Haute couture clothing
            </ButtonMenuItem>
            <ButtonMenuItem
              style={{
                marginRight: "1rem",
                borderRadius: "16px",
                borderColor: "#D4DDDC",
                height:"2.5rem",
              }}
            >
              Accessories
            </ButtonMenuItem>
            <ButtonMenuItem
              style={{
                marginRight: "1rem",
                borderRadius: "16px",
                borderColor: "#D4DDDC",
                height:"2.5rem",
              }}
            >
              Watches & Jewelry
            </ButtonMenuItem>
            <ButtonMenuItem
              style={{
                marginRight: "1rem",
                borderRadius: "16px",
                borderColor: "#D4DDDC",
                height:"2.5rem",
              }}
            >
              Homes & estates
            </ButtonMenuItem>
            <ButtonMenuItem
              style={{
                marginRight: "1rem",
                borderRadius: "16px",
                borderColor: "#D4DDDC",
                height:"2.5rem",
              }}
            >
              automobile
            </ButtonMenuItem>
          </ButtonMenu>
        </div>
      </Flex>
      <GalleryGrid>
        {shopItemsData.map((item) => (
          <Gallery item={item} />
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

export default Items;
