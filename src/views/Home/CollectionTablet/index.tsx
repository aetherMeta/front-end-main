import React, { useRef} from "react";
import styled from "styled-components";
import {
  Flex,
  Text,
  Grid,
  Button,
  ProfileAvatar,
} from "@aethermeta/uikit";
import { Item } from "../Collection/types";
import CollectionCard from "../Collection/CollectionCard";

interface CollectionProps {
  items: Item[];
}

const Container = styled(Flex)`
  width: 100%;
  background: url(/images/collectionHomeBackground.svg);
  background-repeat: no-repeat;
  background-size: 1208px;
  background-position: right;
`;

const CardContainer = styled(Grid)`
  overflow-x: scroll;
  scroll-behavior: smooth;
`;

const StyledFlex = styled(Flex)`
  gap: 2.5rem;
`;





const Collection: React.FC<CollectionProps> = ({ items }) => {
  const cardRef = useRef(null);
  return (
    <Container flexDirection="column">
      <Flex justifyContent="space-between" mb="4.1875rem">
        <Flex flexDirection="column" mt="5rem" ml="1rem" >
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
            <Button variant="text" as="a" href="/collections">
              <Text variant="link" color="primary">
                View Collection
              </Text>
            </Button>
            <Text variant="link" color="primary">
              |
            </Text>
            <Button variant="text" as="a" href="/collections">
              <Text variant="link" color="primary">
                View metaverse shop
              </Text>
            </Button>
          </Flex>
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
