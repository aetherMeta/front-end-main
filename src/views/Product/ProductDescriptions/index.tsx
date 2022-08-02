import React, { useState } from "react";
import styled from "styled-components";
import { Flex, ButtonMenu, ButtonMenuItem, Text } from "@aethermeta/uikit";

interface ProductDescriptionsProps {
  description: string;
  nftDetails: string;
  productDetails: string;
}

const Container = styled(Flex)`
  margin-top: 3.125rem;
  max-width: 36rem;
`;

const ProductDescriptions: React.FC<ProductDescriptionsProps> = ({
  description,
  nftDetails,
  productDetails,
}) => {
  const [index, setIndex] = useState(0);

  const handleClick = (newIndex: number) => setIndex(newIndex);
  return (
    <Container>
      <Flex flexDirection="column">
        <ButtonMenu
          activeIndex={index}
          onItemClick={handleClick}
          fullWidth
          mb="24px"
        >
          <ButtonMenuItem>Description</ButtonMenuItem>
          <ButtonMenuItem>NFT Details</ButtonMenuItem>
          <ButtonMenuItem>Product Details</ButtonMenuItem>
        </ButtonMenu>
        {index === 0 && <Text variant="body">{description}</Text>}
        {index === 1 && <Text variant="body">{nftDetails}</Text>}
        {index === 2 && <Text variant="body">{productDetails}</Text>}
      </Flex>
    </Container>
  );
};

export default ProductDescriptions;
