import React from "react";
import styled from "styled-components";
import { Pagination } from "@aethermeta/uikit";
import { PrimarySaleResponse } from "apis/backend/generated";
import { Item } from "./types";
import ShopCard from "./ShopCard";

interface ShopItemsProps {
  shopItemsData: PrimarySaleResponse[];
  pageSize: number;
  currentPage: number;
  total: number;
  updateSalePage: (page: number) => Promise<void>;
}

const Grid = styled.div`
  display: grid;
  grid-auto-columns: minmax(19.5rem, auto);
  grid-template-columns: repeat(auto-fill, minmax(19.5rem, 1fr));
  grid-gap: 1.25rem;
  justify-items: center;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5.75rem;
`;

const ShopItems: React.FC<ShopItemsProps> = ({
  shopItemsData,
  pageSize,
  currentPage,
  total,
  updateSalePage,
}) => {
  // const shopItemsData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * pageSize;
  //   const lastPageIndex = firstPageIndex + pageSize;
  //   return items.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage, items]);
  return (
    <>
      <Grid>
        {shopItemsData &&
          shopItemsData.map((item) => (
            <ShopCard
              key={item.id}
              item={{
                name: item.name,
                highestBid: item.price,
                image: "url(/images/shopImage.svg)",
                startTime: new Date(),
                mintTime: new Date(),
              }}
            />
          ))}
      </Grid>
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalCount={total}
          pageSize={pageSize}
          onPageChange={updateSalePage}
        />
      </PaginationContainer>
    </>
  );
};

export default ShopItems;
