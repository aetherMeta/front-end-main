import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Grid, Text } from "@aethermeta/uikit";
import { ethers } from "ethers";
import "pure-react-carousel/dist/react-carousel.es.css";
import { marketplaceGraphClient } from "apis/theGraph";
import { SaleState, Sale } from "store/types";
import { dmy } from "utils/date";
import { truncateWalletAddress } from "utils/addressHelpers";

interface ChartProps {
  header: string;
  saleState: SaleState;
  saleData: Sale;
  titles: string[];
  contents: string[];
}
const Container = styled.div`
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 1.75rem 2rem;
  margin-top: 2rem;
  width: 51rem;
  margin-left: 26.5rem;
`;

const TableContainer = styled(Grid)`
  grid-template-columns: auto auto auto auto;
  width: 100%;
  min-width: 47rem;
`;

const StyledText = styled(Text)`
  border-bottom: 1px ${({ theme }) => theme.colors.textDisabled} solid;
  padding: 0.75rem 0;
`;

const Chart: React.FC<ChartProps> = ({
  header,
  saleState,
  saleData,
  titles,
  contents,
}) => {
  const [primaryBuyHistory, setPrimaryBuyHistory] = useState(null);
  useEffect(() => {
    if (saleState.isLoading || !saleState.isLoaded) return;
    // get primary sale info
    marketplaceGraphClient
      .getPrimarySalesInfoByAskHash(saleData.id)
      .then(({ primaryBuyHistories }) => {
        setPrimaryBuyHistory(primaryBuyHistories);
      });
  }, [saleData, saleState]);
  if (saleState.isLoading || !saleState.isLoaded || !primaryBuyHistory)
    return <></>;
  return (
    <Container>
      <Text variant="h4Bold" mb="1.625rem">
        {header}
      </Text>
      <TableContainer>
        {titles.map((title) => (
          <Text variant="header" mb="1rem">
            {title}
          </Text>
        ))}
        {primaryBuyHistory.map((buyHistory) => {
          return [
            <StyledText variant="bodySmall">
              {`${ethers.utils.formatEther(buyHistory.paymentAmount)} ETH`}
            </StyledText>,
            <StyledText variant="bodySmall">
              {truncateWalletAddress(buyHistory.primaryListing.seller)}
            </StyledText>,
            <StyledText variant="bodySmall">
              {truncateWalletAddress(buyHistory.buyer)}
            </StyledText>,
            <StyledText variant="bodySmall">
              {dmy(new Date(parseInt(buyHistory.buyTimestamp) * 1000))}
            </StyledText>,
          ];
        })}
      </TableContainer>
    </Container>
  );
};

export default Chart;
