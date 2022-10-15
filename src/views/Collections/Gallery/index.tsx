import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { Flex, Text, Grid, Pagination, Select } from "@aethermeta/uikit";

import GalleryItems from "../GalleryItems";
import { Item } from "../types";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5.75rem;
`;

const StyledSelect = styled(Select)`
  z-index: 20;
`;

interface GalleryProps {
  items: Item[];
  pageSize: number;
  currentPage: number;
  handleSort: (args: { sortField: string; sortOrder: string }) => void;
  total: number;
  sortField: string;
  sortOrder: string;
  updatePage: (page: number) => Promise<void>;
}

const Gallery: React.FC<GalleryProps> = ({
  items,
  sortField,
  sortOrder,
  pageSize,
  currentPage,
  handleSort,
  updatePage,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortValue = (): string => {
    if (sortField === "name") {
      if (sortOrder === "asc") return "Name: A to Z";
      return "Name: Z to A";
    }
    if (sortField === "createdAt") {
      if (sortOrder === "asc") return "Oldest";
      return "Newest";
    }
    return "Newest";
  };
  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (newValue: React.SetStateAction<string>) => {
    setIsOpen(false);
    switch (newValue) {
      case "Newest":
        handleSort({
          sortField: "createdAt",
          sortOrder: "desc",
        });
        break;
      case "Oldest":
        handleSort({
          sortField: "createdAt",
          sortOrder: "asc",
        });
        break;
      case "Name: A to Z":
        handleSort({
          sortField: "name",
          sortOrder: "asc",
        });
        break;
      case "Name: Z to A":
        handleSort({
          sortField: "name",
          sortOrder: "desc",
        });
        break;
      default:
        handleSort({
          sortField: "createdAt",
          sortOrder: "desc",
        });
    }
  };

  const shopItemsData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return items.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, items, pageSize]);

  return (
    <Flex flexDirection="column" m="3rem 0rem 1rem">
      <Flex justifyContent="space-between" m="0rem 2.5rem 1rem 0rem">
        <Text variant="h1Bold" ml="1rem">
          COLLECTIONSs
        </Text>
        <StyledSelect
          value={sortValue()}
          options={["Newest", "Oldest", "Name: A to Z", "Name: Z to A"]}
          handleSelect={(newValue) => handleSelect(newValue)}
          isOpen={isOpen}
          handleToggle={handleToggle}
          width="14.25rem"
        />
      </Flex>
      {
        // <Flex justifyContent="space-around" alignSelf="flex-start" mb="3.5rem">
        //   <ButtonMenu
        //     activeIndex={index}
        //     onItemClick={handleClick}
        //     scale="sm"
        //     variant="subtle"
        //   >
        //     <ButtonMenuItemFilter
        //       marginLeft="1rem"
        //       style={{ borderRadius: "16px" }}
        //     >
        //       Haute couture clothing
        //     </ButtonMenuItemFilter>
        //     <ButtonMenuItemFilter
        //       marginLeft="1rem"
        //       style={{ borderRadius: "16px" }}
        //     >
        //       Accessories
        //     </ButtonMenuItemFilter>
        //     <ButtonMenuItemFilter
        //       marginLeft="1rem"
        //       style={{ borderRadius: "16px" }}
        //     >
        //       Watches & Jewelry
        //     </ButtonMenuItemFilter>
        //     <ButtonMenuItemFilter
        //       marginLeft="1rem"
        //       style={{ borderRadius: "16px" }}
        //     >
        //       Homes and estates
        //     </ButtonMenuItemFilter>
        //     <ButtonMenuItemFilter
        //       marginLeft="1rem"
        //       style={{ borderRadius: "16px" }}
        //     >
        //       automobile
        //     </ButtonMenuItemFilter>
        //   </ButtonMenu>
        // </Flex>
      }
      <Grid gridTemplateColumns="25% 25% 25% 25%">
        {shopItemsData.map((item) => (
          <GalleryItems key={item.id} item={item} />
        ))}
      </Grid>
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalCount={items.length}
          pageSize={pageSize}
          onPageChange={(page) => updatePage(page)}
        />
      </PaginationContainer>
    </Flex>
  );
};

export default Gallery;
