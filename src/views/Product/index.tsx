/* eslint-disable no-console */
import React from "react";
import styled from "styled-components";
import { Flex, Spinner } from "@aethermeta/uikit";
import { useSales } from "store/sales/hooks";
import Page from "components/Layout/Page";
import ProductImages from "./ProductImages";
import ProductActions from "./ProductActions";
import ProductDescriptions from "./ProductDescriptions";
import Chart from "./Chart";
import { chartTitle, contents } from "./TestConfig/config";

const Container = styled.div`
  padding: 80px 22px 80px;
  margin-top: -140px;
  background: url(/images/product.svg);
  background-repeat: no-repeat;
  background-size: 1440px;
  background-position: right top;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 124px 70px 142px;
  }
`;

const StyledPage = styled(Page)`
  background-color: ${({ theme }) => theme.colors.grey};
`;

const StyledFlex = styled(Flex)`
  margin-top: 2.875rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.lg} {
    gap: 4rem;
    flex-direction: row;
  }
`;

const Product: React.FC = () => {
  const { saleState, saleData, isLoading, isLoaded } = useSales();
  return (
    <StyledPage>
      {isLoading || !isLoaded ? (
        <Flex width="100%" justifyContent="center">
          <Spinner size={108} />
        </Flex>
      ) : (
        <Container>
          <StyledFlex>
            <ProductImages saleState={saleState} saleData={saleData} />
            <Flex flexDirection="column">
              <ProductActions saleState={saleState} saleData={saleData} />
              <ProductDescriptions saleState={saleState} saleData={saleData} />
            </Flex>
          </StyledFlex>
          <Flex justifyContent="center" width="100%">
            <Chart
              header="History"
              saleState={saleState}
              saleData={saleData}
              titles={chartTitle}
              contents={contents}
            />
          </Flex>
        </Container>
      )}
      {/* <MoreCollection items={testItems} collectionName="I am Jennifer Le" /> */}
    </StyledPage>
  );
};

export default Product;
