import React from "react";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import { Flex, Text, Button } from "@aethermeta/uikit";
import { ethers } from "ethers";
import { dmy } from "utils/date";
import { truncateWalletAddress } from "utils/addressHelpers";
import { SaleState, Sale } from "store/types";
import usePrimaryBuy from "hooks/usePrimaryBuy";
import ConnectWalletButton from "components/ConnectWalletButton";

interface ProductActionsProps {
  saleState: SaleState;
  saleData: Sale;
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

const ProductActions: React.FC<ProductActionsProps> = ({
  saleState,
  saleData,
  handleViewMetaverse,
}) => {
  const { onBuy } = usePrimaryBuy();
  const { account } = useWeb3React();
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
        {account ? (
          <Button
            variant="primary"
            width="100%"
            onClick={() => onBuy(saleData, 1)}
          >
            Purchase
          </Button>
        ) : (
          <ConnectWalletButton maxWidth />
        )}
        <Button
          variant="secondary"
          width="100%"
          onClick={() => handleViewMetaverse()}
        >
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
