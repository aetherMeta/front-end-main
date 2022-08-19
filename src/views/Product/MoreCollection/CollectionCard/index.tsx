import React from "react";
import styled from "styled-components";
import { Flex, Text } from "@aethermeta/uikit";
import { dmy } from "utils/date";
import { Item } from "../types";

interface CollectionCardProps {
  item: Item;
}

const Card = styled.div`
  width: 19.5rem;
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

const CollectionCard: React.FC<CollectionCardProps> = ({ item }) => {
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
        <Text variant="body">Price</Text>
        <BodyHeavy variant="body" color="primary" ml="1.25rem">
          {`${item.highestBid} ETH`}
        </BodyHeavy>
      </Flex>
    </Card>
  );
};

export default CollectionCard;
