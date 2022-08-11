import React from "react";
import styled from "styled-components";
import { Pagination } from "@aethermeta/uikit";
import {
  useDispatchSalePublicData,
  useSales,
  useUpdateSalePage,
} from "store/sales/hooks";
import { Item } from "./types";
import ShopCard from "./ShopCard";

interface ShopItemsProps {
  items: Item[];
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

const ShopItems: React.FC<ShopItemsProps> = ({ items }) => {
  useDispatchSalePublicData();
  const { data, pageSize, currentPage } = useSales();
  const shopItemsData = data[currentPage];
  const { updateSalePage } = useUpdateSalePage();
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
          totalCount={items.length}
          pageSize={pageSize}
          onPageChange={updateSalePage}
        />
      </PaginationContainer>
    </>
  );
};

export default ShopItems;
