import React from "react";
import { Image, Text, Flex, Link, ChevronLeftIcon } from "@aethermeta/uikit";
import styled from "styled-components";
import { addComma } from "utils/number";

const Description = styled(Text)`
  width: 237px;
`;
interface ShopHeaderProps {
  results?: number;
  description: string;
  name: string;
  imageUrl: string;
}

const SelectedItem: React.FC<ShopHeaderProps> = ({
  results,
  description,
  imageUrl,
  name,
}) => {
  return (
    <Flex flexDirection="column" mt="1rem">
      <Link href="/collections" mb="1rem" color="text">
        <ChevronLeftIcon />
        Back to collections
      </Link>
      <Text variant="h2Bold">{name}</Text>
      <Text variant="label" mb="2rem">{`${addComma(results)} RESULTS`}</Text>
      <Image
        src={imageUrl}
        width={310}
        height={237}
        mb="1rem"
        imageStyle={{ borderRadius: "20px" }}
      />
      <Description>{description}</Description>
    </Flex>
  );
};

export default SelectedItem;
