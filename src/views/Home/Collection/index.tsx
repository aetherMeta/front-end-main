import React, { useRef, useCallback } from "react";
import styled from "styled-components";
import {
  Flex,
  Text,
  Grid,
  Button,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@aethermeta/uikit";
import { Item } from "./types";
import CollectionCard from "./CollectionCard";

interface CollectionProps {
  collectionName: string;
  items: Item[];
}

const Container = styled(Flex)`
  padding: 5.875rem 4.375rem;
  width: 100%;
  background: url(/images/moreCollection.svg);
  background-repeat: no-repeat;
  background-size: 1208px;
  background-position: right top;
`;

const CardContainer = styled(Grid)`
  overflow: auto;
  scroll-behavior: smooth;
`;

const StyledFlex = styled(Flex)`
  gap: 2.5rem;
`;

const StyledButton = styled(Button)`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 50%;
`;

const StylefLeftIcon = styled(ChevronLeftIcon)`
  margin: 0;
`;

const StylefRightIcon = styled(ChevronRightIcon)`
  margin: 0;
`;

const Collection: React.FC<CollectionProps> = ({
  items,
  collectionName,
}) => {
  const cardRef = useRef(null);
  const memoScroll = useCallback(
    (isLeft) => {
      cardRef.current.scrollLeft += isLeft
        ? -cardRef.current.clientWidth
        : cardRef.current.clientWidth;
    },
    [cardRef]
  );

  return (
    <Container flexDirection="column">
      <Flex justifyContent="space-between" mb="4.1875rem">
        <Flex flexDirection="column">
          <Text variant="body">More from</Text>
          <Text variant="h2Bold">{collectionName}</Text>
        </Flex>
        <Flex>
          <StyledButton
            mr="2rem"
            variant="panel"
            endIcon={<StylefLeftIcon width="50px" />}
            onClick={() => memoScroll(true)}
          />
          <StyledButton
            variant="panel"
            endIcon={<StylefRightIcon width="50px" />}
            onClick={() => memoScroll(false)}
          />
        </Flex>
      </Flex>
      <CardContainer ref={cardRef}>
        <StyledFlex>
          {items.map((item) => (
            <CollectionCard item={item} />
          ))}
        </StyledFlex>
      </CardContainer>
    </Container>
  );
};

export default Collection;
