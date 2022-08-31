import React, { useRef, useCallback } from "react";
import styled from "styled-components";
import {
  Flex,
  Text,
  Grid,
  Button,
  ChevronLeftIcon,
  ChevronRightIcon,
  ProfileAvatar,
} from "@aethermeta/uikit";
import { Item } from "./types";
import CollectionCard from "./CollectionCard";

interface CollectionProps {
  items: Item[];
}

const Container = styled(Flex)`
  padding: 5.875rem 4.375rem;
  width: 100%;
  background: url(/images/collectionHomeBackground.svg);
  background-repeat: no-repeat;
  background-size: 1208px;
  background-position: right ;
`;

const CardContainer = styled(Grid)`
  overflow: hidden;
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

const Collection: React.FC<CollectionProps> = ({ items }) => {
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
        <Flex flexDirection="column" width="50rem">
          <Flex alignItems="center" mb="3rem">
            <ProfileAvatar
              src="images/valleyProfile.svg"
              width={83}
              height={83}
              mr="1rem"
            />
            <Flex flexDirection="column">
              <Text variant="h2Bold">The Valley</Text>
              <Text variant="body">By Riot Hill</Text>
            </Flex>
          </Flex>
          <Text variant="body" mb="1rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat
            natoque massa egestas. Sed urna vitae aliquet facilisi sagittis.
            Tincidunt facilisis pellentesque nisi sit lectus dignissim cursus
            facilisi. Aliquet pellentesque fringilla amet blandit sit semper
            cursus at.
          </Text>
          <Text variant="body" mb="1rem">
            Orci sollicitudin dui integer pellentesque varius diam pretium, cras
            est. Dictumst sit dignissim turpis justo, nulla aliquet ut lorem.
            Ultrices vitae.
          </Text>
          <Flex alignItems="center">
            <Button variant="text" as="a" href="/collections" >
              <Text variant="link" color="primary">
                View Collection
              </Text>
            </Button>
            <Text variant="link" color="primary">
              |
            </Text>
            <Button variant="text" as="a" href="/collections" >
              <Text variant="link" color="primary">
                View metaverse shop
              </Text>
            </Button>
          </Flex>
        </Flex>
        <Flex alignSelf="flex-end">
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
