import React, { useState } from "react";
import styled from "styled-components";
import { Flex, ButtonMenu, ButtonMenuItem, Text } from "@aethermeta/uikit";
import { SaleState, Sale } from "store/types";

interface ProductDescriptionsProps {
  saleState: SaleState;
  saleData: Sale;
}

const Container = styled(Flex)`
  margin-top: 3.125rem;
  max-width: 36rem;
`;

const ProductDescriptions: React.FC<ProductDescriptionsProps> = ({
  saleState,
  saleData,
}) => {
  const [index, setIndex] = useState(0);
  const handleClick = (newIndex: number) => setIndex(newIndex);
  if (saleState.isLoading || !saleState.isLoaded) return <></>;
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
        {index === 0 && <Text variant="body">{saleData.description}</Text>}
        {index === 1 && (
          <Flex>
            {saleData.attributes.map((attribute) => (
              <Text variant="body">{attribute.value}</Text>
            ))}
          </Flex>
        )}
        {index === 2 && <Text variant="body">{saleData.asset.type}</Text>}
      </Flex>
    </Container>
  );
};

export default ProductDescriptions;
