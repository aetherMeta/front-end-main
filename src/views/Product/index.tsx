/* eslint-disable no-console */
import React from "react";
import styled from "styled-components";
import { useMatchBreakpoints, Flex } from "@aethermeta/uikit";
import { useSales } from "store/sales/hooks";
import Page from "components/Layout/Page";
import ProductImages from "./ProductImages";
import ProductActions from "./ProductActions";
import ProductDescriptions from "./ProductDescriptions";
import Chart from "./Chart";
import MoreCollection from "./MoreCollection";
import {
  config,
  description,
  chartTitle,
  contents,
  testItems,
} from "./TestConfig/config";

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
  gap: 4rem;
  margin-top: 2.875rem;
  justify-content: center;
`;

const Product: React.FC = () => {
  const { isTablet, isMobile } = useMatchBreakpoints();
  const { saleState, saleData } = useSales();
  const isSmallScreen = isTablet || isMobile;
  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  ];
  return (
    <StyledPage>
      <Container>
        <StyledFlex>
          <ProductImages saleState={saleState} saleData={saleData} />
          <Flex flexDirection="column">
            <ProductActions
              saleState={saleState}
              saleData={saleData}
              handleViewMetaverse={() => console.log("handleViewMetaverse")}
              handlePurchase={() => console.log("handlePurchase")}
            />
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
      <MoreCollection items={testItems} collectionName="I am Jennifer Le" />
    </StyledPage>
  );
};

export default Product;
