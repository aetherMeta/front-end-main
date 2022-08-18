import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Flex, Text, Button } from "@aethermeta/uikit";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import { dmy } from "utils/date";
import { truncateWalletAddress } from "utils/addressHelpers";
import { SaleState, Sale } from "store/types";

interface ProductActionsProps {
  saleState: SaleState;
  saleData: Sale;
  handlePurchase: () => void;
  handleViewMetaverse: () => void;
}

const Container = styled(Flex)`
  flex-direction: column;
  padding: 2.875rem 2.625rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.25rem;
  max-width: 36rem;
  height: 100%;
  min-height: 0;
`;

const StyledFlex = styled(Flex)`
  gap: 4rem;
`;

const StyledFlex2 = styled(Flex)`
  gap: 0.75rem;
`;

const StyledText = styled(Text)`
  opacity: 0.6;
`;

const BodyHeavy = styled(Text)`
  font-weight: 700;
`;

const ProductActions: React.FC<ProductActionsProps> = ({
  saleState,
  saleData,
  handlePurchase,
  handleViewMetaverse,
}) => {
  if (saleState.isLoading || !saleState.isLoaded) return <></>;
  return (
    <Container>
      <Text variant="h3Bold">{saleData.name}</Text>
      <StyledFlex mt="2rem">
        <Flex flexDirection="column">
          <StyledText variant="bodySmall">Created by</StyledText>
          <Text variant="bodySmall">
            {truncateWalletAddress(saleData.sellerAddress)}
          </Text>
        </Flex>
        {saleData.nft.asset.data && (
          <Flex flexDirection="column">
            <StyledText variant="bodySmall">Collection</StyledText>
            <Text variant="bodySmall">{saleData.nft.asset.data}</Text>
          </Flex>
        )}
      </StyledFlex>
      <StyledFlex2 mt="1.5rem">
        <StyledText variant="bodySmall">Created on</StyledText>
        <Text variant="bodySmall">{dmy(new Date(saleData.createdAt))}</Text>
      </StyledFlex2>
      <StyledFlex mt="2.375rem">
        <Flex flexDirection="column">
          <Text variant="bodySmall">Price</Text>
          <Text
            variant="h4Bold"
            mt="0.75rem"
            color="primary"
          >{`${ethers.utils.formatEther(saleData.price)} ETH`}</Text>
        </Flex>
        <Flex flexDirection="column">
          <Text variant="bodySmall">Remaining</Text>
          <Text variant="h4Bold" mt="0.75rem">{`${
            parseInt(saleData.amount) - parseInt(saleData.amountSold)
          }/${saleData.amount}`}</Text>
        </Flex>
      </StyledFlex>
      <Flex style={{ gap: "0.375rem" }} mt="2rem">
        <Button variant="primary" width="100%">
          Purchase
        </Button>
        <Button variant="secondary" width="100%">
          View in metaverse
        </Button>
      </Flex>
      {/* <Flex
        style={{ gap: "0.75rem" }}
        justifyContent="center"
        alignItems="center"
        mt="1.5rem"
      >
        <StyledText variant="bodySmall">Ending in</StyledText>
        <BodyHeavy variant="h4Bold">{countdown}</BodyHeavy>
      </Flex> */}
    </Container>
  );
};

export default ProductActions;
