import React, { useState } from "react";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import { Link } from "react-router-dom";
import { Flex, Text, Button, useModal } from "@aethermeta/uikit";
import { ConnectorNames } from "utils/web3React";
import { ethers } from "ethers";
import { dmy } from "utils/date";
import { truncateWalletAddress } from "utils/addressHelpers";
import { SaleState, Sale } from "store/types";
import usePrimaryBuy from "hooks/usePrimaryBuy";
import postContactUsEmail from "apis/backend/email/postPartnershipEmail";
import ConnectWalletButton from "components/ConnectWalletButton";
import PartnershipModal, { Values } from "components/PartnershipModal";
import Disclaimer from "components/DisclaimerModel";
import { useUser } from "store/user/hooks";
import useAuth from "hooks/useAuth";
import useToast from "hooks/useToast";

interface ProductActionsProps {
  saleState: SaleState;
  saleData: Sale;
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
}) => {
  const [onPresent1] = useModal(<Disclaimer />, false);

  const [pendingSale, setPendingSale] = useState(false);
  const { data: userData, userDataLoaded } = useUser();
  const { login } = useAuth();

  const [onPresent] = useModal(
    <PartnershipModal
      onSubmit={(e, values: Values) => onSubmit(e, values)}
      fromMetaverse
    />
  );
  const onSubmit = async (e, values: Values) => {
    e.preventDefault();
    await postContactUsEmail(values);
  };

  const agreement = () => {
    try {
      const valueFromLS = localStorage.getItem("agree");

      return valueFromLS ? JSON.parse(valueFromLS) : false;
    } catch (error) {
      return false;
    }
  };

  const isAgreed = () => {
    if (agreement) {
      return { href: "/metaverse" };
    }
    return { onclick: onPresent1 };
  };
  let buttonProps = {};

  if (userDataLoaded) {
    // Checks if user is logged in
    buttonProps = userData.metaverseAccess // boolean; checks if user is whitelisted
      ? isAgreed()
      : {
          onClick: onPresent, // Opens form if not whitelisted and user agreed to disclaimer
        };
  } else {
    buttonProps = {
      onClick: () => login(ConnectorNames.Injected), // login user
    };
  }
  const { onBuy } = usePrimaryBuy();
  const { toastError, toastSuccess } = useToast();
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
        {account && userDataLoaded && account === userData.address ? (
          <Button
            variant="primary"
            width="100%"
            disabled={pendingSale || saleData.amount === saleData.amountSold}
            onClick={async () => {
              try {
                setPendingSale(true);
                const buy = onBuy(saleData, 1);
                // toastInfo(
                //   "Transaction sent",
                //   "Transactions take a short moment to process."
                // );
                const receipt: any = await buy;

                if (receipt) {
                  toastSuccess(
                    "Transaction Success!",
                    ""
                    // `Tansaction Hash:  ${receipt.transactionHash}`
                  );
                }
              } catch (e: any) {
                console.log(e.code);
                if (e?.code === "INSUFFICIENT_FUNDS") {
                  toastError("Transaction Failure", "Insufficient Funds.");
                } else {
                  toastError("Transaction Failure", "Something went wrong.");
                }
              } finally {
                setPendingSale(false);
              }
            }}
          >
            {pendingSale
              ? "Pending"
              : saleData.amount === saleData.amountSold
              ? "Sold Out"
              : "Purchase"}
          </Button>
        ) : (
          <ConnectWalletButton maxWidth />
        )}
        <Link
          style={{ width: "100%" }}
          to={
            "/metaverse"
            // userDataLoaded && userData.metaverseAccess ? "/metaverse" : ""
          }
        >
          <Button variant="secondary" width="100%" {...buttonProps}>
            View in metaverse
          </Button>
        </Link>
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
