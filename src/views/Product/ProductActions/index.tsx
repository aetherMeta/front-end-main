import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Flex, Text, Button } from "@aethermeta/uikit";
import moment from "moment";
import { dmy } from "utils/date";

interface ProductActionsProps {
  name: string;
  creator: string;
  collection: string;
  price: string;
  total: number;
  sold: number;
  handlePurchase: () => void;
  handleViewMetaverse: () => void;
  startTime: Date;
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
  name,
  creator,
  collection,
  price,
  total,
  sold,
  handlePurchase,
  handleViewMetaverse,
  startTime,
}) => {
  const [countdown, setCountdown] = useState("00:00:00s");
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const endTime = startTime.getTime() + 86400000; // start time + 24 hours
      const duration = moment.duration(endTime - currentTime, "milliseconds");
      setCountdown(
        `${duration.hours()} : ${duration.minutes()} : ${duration.seconds()}s`
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [startTime, setCountdown]);
  return (
    <Container>
      <Text variant="h3Bold">{name}</Text>
      <StyledFlex mt="2rem">
        <Flex flexDirection="column">
          <StyledText variant="bodySmall">Created by</StyledText>
          <Text variant="bodySmall">{creator}</Text>
        </Flex>
        <Flex flexDirection="column">
          <StyledText variant="bodySmall">Collection</StyledText>
          <Text variant="bodySmall">{collection}</Text>
        </Flex>
      </StyledFlex>
      <StyledFlex2 mt="1.5rem">
        <StyledText variant="bodySmall">Created on</StyledText>
        <Text variant="bodySmall">{dmy(startTime)}</Text>
      </StyledFlex2>
      <StyledFlex mt="2.375rem">
        <Flex flexDirection="column">
          <Text variant="bodySmall">Price</Text>
          <Text
            variant="h4Bold"
            mt="0.75rem"
            color="primary"
          >{`${price} ETH`}</Text>
        </Flex>
        <Flex flexDirection="column">
          <Text variant="bodySmall">Remaining</Text>
          <Text variant="h4Bold" mt="0.75rem">{`${sold}/${total}`}</Text>
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
      <Flex
        style={{ gap: "0.75rem" }}
        justifyContent="center"
        alignItems="center"
        mt="1.5rem"
      >
        <StyledText variant="bodySmall">Ending in</StyledText>
        <BodyHeavy variant="h4Bold">{countdown}</BodyHeavy>
      </Flex>
    </Container>
  );
};

export default ProductActions;
