/* eslint-disable no-console */
import React from "react";
import styled from "styled-components";
import { useMatchBreakpoints, Flex } from "@aethermeta/uikit";
import Page from "components/Layout/Page";
import { useUpdateSalesFilter } from "store/sales/hooks";
import ShopFilters from "./ShopFilters";
import ShopFiltersTablet from "./ShopFiltersTablet";
import ShopHeader from "./ShopHeader";
import ShopItems from "./ShopItems";
import testItems from "./ShopItems/testItems";

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
  ${({ theme }) => theme.mediaQueries.lg} {
    padding 124px 70px 142px;
  }
`;

const Shop: React.FC = () => {
  const { isTablet, isMobile } = useMatchBreakpoints();
  const isSmallScreen = isTablet || isMobile;
  const { handleFilter } = useUpdateSalesFilter();
  const handleApply = (filters) => {
    handleFilter(filters);

    // Refetch?
  };
  return (
    <Page>
      <Container>
        {!isSmallScreen && (
          <ShopFilters total={12564} handleApply={handleApply} />
        )}
        <Flex flexDirection="column" width="100%">
          {isSmallScreen ? (
            <ShopFiltersTablet
              total={12564}
              handleSort={() => console.log("handleSort Tablet")}
              handleApply={() => console.log("handleApply Tablet")}
            />
          ) : (
            <ShopHeader results={45} />
          )}
          <ShopItems items={testItems} />
        </Flex>
      </Container>
    </Page>
  );
};

export default Shop;
