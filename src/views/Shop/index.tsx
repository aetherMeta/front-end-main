/* eslint-disable no-console */
import React from "react";
import styled from "styled-components";
import { useMatchBreakpoints, Flex, Spinner } from "@aethermeta/uikit";
import Page from "components/Layout/Page";
import {
  useUpdateSalesSort,
  useUpdateSalesFilter,
  useDispatchSalePublicData,
  useSales,
  useUpdateSalePage,
} from "store/sales/hooks";
import ShopFilters from "./ShopFilters";
import ShopFiltersTablet from "./ShopFiltersTablet";
import ShopHeader from "./ShopHeader";
import ShopItems from "./ShopItems";

const Container = styled.div`
  display: flex;
  padding 80px 22px 80px;
  margin-top: -140px;
  background: url(/images/shop.svg);
  background-repeat: no-repeat;
  background-size: 1628px;
  background-position: right top;
  gap: 6.875rem;
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 52rem;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding 124px 70px 142px;
  }
`;

const Shop: React.FC = () => {
  const { isTablet, isMobile } = useMatchBreakpoints();
  const isSmallScreen = isTablet || isMobile;
  const { handleSort } = useUpdateSalesSort();
  const { handleFilter } = useUpdateSalesFilter();
  useDispatchSalePublicData();
  const { data, saleState, total, pageSize, currentPage, isLoading, isLoaded } =
    useSales();
  const shopItemsData = data[currentPage];
  const { updateSalePage } = useUpdateSalePage();
  const handleApply = (filter) => {
    handleFilter(filter);
  };
  const handleSaleSort = (sortField, sortOrder) => {
    handleSort(sortField, sortOrder);
  };
  return (
    <Page>
      <Container>
        {!isSmallScreen && <ShopFilters handleApply={handleApply} />}
        {isLoading || !isLoaded ? (
          <Flex width="100%" justifyContent="center">
            <Spinner size={108} />
          </Flex>
        ) : (
          <Flex flexDirection="column" width="100%">
            {isSmallScreen ? (
              <ShopFiltersTablet
                total={total}
                saleState={saleState}
                handleSaleSort={handleSaleSort}
                handleApply={handleApply}
              />
            ) : (
              <ShopHeader
                saleState={saleState}
                results={total}
                handleSaleSort={handleSaleSort}
              />
            )}
            <ShopItems
              shopItemsData={shopItemsData}
              pageSize={pageSize}
              currentPage={currentPage}
              total={total}
              updateSalePage={updateSalePage}
            />
          </Flex>
        )}
      </Container>
    </Page>
  );
};

export default Shop;
