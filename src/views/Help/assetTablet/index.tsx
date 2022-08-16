import React from "react";
import styled from "styled-components";
import { Flex, Text } from "@aethermeta/uikit";

const Container = styled.div`
  padding 3rem 20px 80px;
`;

const Diagram = styled.div`
  background: url(/images/assetlogo1.svg);
  background-repeat: no-repeat;
  background-size: 15rem;
  height: 28vh;
  width: 30vh;
  margin-top: 1rem;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: 40vh;
    width: 60vh;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    height: 80vh;
    width: 100vh;
  }
`;

const Diagram2 = styled.div`
  background: url(/images/assetlogo2.svg);
  background-repeat: no-repeat;
  background-size: 15rem;
  height: 28vh;
  width: 30vh;
  margin-top: 1rem;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: 40vh;
    width: 60vh;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    height: 80vh;
    width: 100vh;
  }
`;

const Diagram3 = styled.div`
  background: url(/images/assetlogo3.svg);
  background-repeat: no-repeat;
  background-size: 15rem;
  height: 28vh;
  width: 30vh;
  margin-top: 1rem;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: 40vh;
    width: 60vh;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    height: 80vh;
    width: 100vh;
  }
`;

const FlexContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

const AssetTablet: React.FC = () => {
  return (
    <Container>
      <FlexContainer>
        <Text variant="h3Bold" mr="1rem">
          3D Asset Experts
        </Text>
        <Text variant="body" mt="1.5rem">
          The Aether Meta Team has a very strong understanding of 3D Assets that
          will not only allow your brand to build an immersive Metaverse Store,
          but also to render digital and phygital items in the Metaverse.
        </Text>
        <Text variant="body" mt="1.5rem">
          Your company will be able to digitize your Items, getting them
          rendered in a high quality 3D virtual format using Item Digitization.
          These items will have a high level of realism by using state of the
          art digitization techniques.
        </Text>
        <Text variant="body" mt="1.5rem">
          Aether Meta can then help you convert these items into NFTs for sale
          in store, where you can then display the items in your metaverse store
          for users to interact with prior to purchase.
        </Text>
        <Diagram />
        <Diagram2 />
        <Diagram3 />
      </FlexContainer>
    </Container>
  );
};

export default AssetTablet;
