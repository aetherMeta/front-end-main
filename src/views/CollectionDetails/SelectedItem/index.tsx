import React from "react";
import { Image, Text, Flex } from "@aethermeta/uikit";
import styled from "styled-components";

const Description = styled(Text)`
  width: 310;
`;
interface ShopHeaderProps {
  description: string;
  imageUrl: string;
}

const SelectedItem: React.FC<ShopHeaderProps> = ({ description, imageUrl }) => {
  return (
    <Flex flexDirection="column" mt="1rem" width={310}>
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
