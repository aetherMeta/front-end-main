import React, { useState, useMemo } from "react";
import styled from "styled-components";
import {
  Flex,
  Text,
  Grid,
  ButtonMenu,
  ButtonMenuItem,
  Pagination,
  Select,
} from "@aethermeta/uikit";
import GalleryItems from "../GalleryItems";
import { Item } from "../types";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5.75rem;
`;

const ButtonMenuItemFilter = styled(ButtonMenuItem)`
  border-radius: 16px;
`;

interface GalleryProps {
  items: Item[];
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("Most recent");

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (newValue) => {
    setValue(newValue);
    setIsOpen(false);
  };

  const handleClick = (newIndex) => setIndex(newIndex);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 16;
  const shopItemsData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return items.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, items]);

  return (
    <Flex flexDirection="column" m="3rem 0rem 1rem">
      <Flex justifyContent="space-between" m="0rem 2.5rem 1rem 0rem">
        <Text variant="h1Bold" ml="1rem">
          COLLECTIONS
        </Text>
        <Select
          value={value}
          options={["Most recent", "Most popular ", "Latest release"]}
          handleSelect={(newValue) => handleSelect(newValue)}
          isOpen={isOpen}
          handleToggle={handleToggle}
          width="11.25rem"
        />
      </Flex>

      <Flex justifyContent="space-around" alignSelf="flex-start" mb="3.5rem">
        {/* <ButtonMenu
          activeIndex={index}
          onItemClick={handleClick}
          scale="sm"
          variant="white"
        >
          <ButtonMenuItemFilter
            marginLeft="1rem"
            style={{ borderRadius: "16px" }}
          >
            Haute couture clothing
          </ButtonMenuItemFilter>
          <ButtonMenuItemFilter
            marginLeft="1rem"
            style={{ borderRadius: "16px" }}
          >
            Accessories
          </ButtonMenuItemFilter>
          <ButtonMenuItemFilter
            marginLeft="1rem"
            style={{ borderRadius: "16px" }}
          >
            Watches & Jewelry
          </ButtonMenuItemFilter>
          <ButtonMenuItemFilter
            marginLeft="1rem"
            style={{ borderRadius: "16px" }}
          >
            Homes and estates
          </ButtonMenuItemFilter>
          <ButtonMenuItemFilter
            marginLeft="1rem"
            style={{ borderRadius: "16px" }}
          >
            automobile
          </ButtonMenuItemFilter>
        </ButtonMenu> */}
      </Flex>
      <Grid gridTemplateColumns="25% 25% 25% 25%">
        {shopItemsData.map((item) => (
          <GalleryItems item={item} />
        ))}
      </Grid>
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalCount={items.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </PaginationContainer>
    </Flex>
  );
};

export default Gallery;
