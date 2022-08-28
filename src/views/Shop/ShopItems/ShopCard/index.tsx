import React from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import { useHistory } from "react-router-dom";
import { Flex, Text } from "@aethermeta/uikit";
import { dmy } from "utils/date";
import { Item } from "constants/items";

interface ShopCardProps {
  item: Item;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 19.5rem;
  width: 100%;
  padding: 0.75rem 0.75rem 2rem;
  border-radius: 1.625rem;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
const Image = styled.div<{ image: string }>`
  height: 16.5rem;
  background-image: ${({ image }) => image};
  background-repeat: no-repeat;
  border-top-right-radius: 1.625rem;
  border-top-left-radius: 1.625rem;
  margin-bottom: 2.25rem;
  background-size: cover;
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
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/product/${id}`);
  };
  return (
    <Card onClick={() => handleClick(item.id)}>
      <Image image={item.image} />
      <Text variant="h4Bold" mb="0.875rem">
        {item.name}
      </Text>
      <Flex style={{ marginTop: "auto" }}>
        <Text variant="body">Sale date: </Text>
        <BodyHeavy variant="body" ml="0.25rem">
          {dmy(item.mintTime)}
        </BodyHeavy>
      </Flex>
      <Divider />
      <Flex mb="0.375rem">
        <Text variant="body">Current price:{"\u00a0"}</Text>
        <BodyHeavy variant="body" color="primary">
          {`${ethers.utils.formatEther(item.highestBid)} ETH`}
        </BodyHeavy>
      </Flex>
      {/* <Flex>
        <Text variant="body">Ending in</Text>
        <BodyHeavy variant="body" ml="2.25rem">
          {countdown}
        </BodyHeavy>
      </Flex> */}
    </Card>
  );
};

export default ShopCard;
