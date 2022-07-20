import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";
import { Flex, Text } from "@aethermeta/uikit";
import { dmy } from "utils/date";
import { Item } from "../types";

interface ShopCardProps {
  item: Item;
}

const Card = styled.div`
  max-width: 19.5rem;
  width: 100%;
  padding: 0.75rem 0.75rem 2rem;
  border-radius: 1.625rem;
  background-color: ${({ theme }) => theme.colors.white};
`;
const Image = styled.div<{ image: string }>`
  height: 16.5rem;
  background-image: ${({ image }) => image};
  background-repeat: no-repeat;
  border-top-right-radius: 1.625rem;
  border-top-left-radius: 1.625rem;
  margin-bottom: 2.25rem;
`;

const BodyHeavy = styled(Text)`
  font-weight: 700;
`;

const Divider = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  margin: 1rem 0;
  opacity: 0.3;
`;

const ShopCard: React.FC<ShopCardProps> = ({ item }) => {
  const [countdown, setCountdown] = useState("00:00:00s");
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const endTime = item.startTime.getTime() + 86400000; // start time + 24 hours
      const duration = moment.duration(endTime - currentTime, "milliseconds");
      setCountdown(
        `${duration.hours()} : ${duration.minutes()} : ${duration.seconds()}s`
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [item, setCountdown]);

  return (
    <Card>
      <Image image={item.image} />
      <Text variant="h4Bold" mb="0.875rem">
        {item.name}
      </Text>
      <Flex>
        <Text variant="body">Minted on</Text>
        <BodyHeavy variant="body" ml="0.25rem">
          {dmy(item.mintTime)}
        </BodyHeavy>
      </Flex>
      <Divider />
      <Flex mb="0.375rem">
        <Text variant="body">Current bid</Text>
        <BodyHeavy variant="body" color="primary" ml="1.25rem">
          {`${item.highestBid} ETH`}
        </BodyHeavy>
      </Flex>
      <Flex>
        <Text variant="body">Ending in</Text>
        <BodyHeavy variant="body" ml="2.25rem">
          {countdown}
        </BodyHeavy>
      </Flex>
    </Card>
  );
};

export default ShopCard;
