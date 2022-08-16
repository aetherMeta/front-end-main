import React from "react";
import styled from "styled-components";
import { Flex, Text } from "@aethermeta/uikit";

const Container = styled.div`
  padding 3rem 20px 80px;
`;

const Diagram = styled.div`
  background: url(/images/support.svg);
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

const SupportTablet: React.FC = () => {
  return (
    <Container>
      <FlexContainer>
        <Text variant="h3Bold" mr="1rem">
          AetherMeta Support
        </Text>
        <Text variant="body" mt="1.5rem">
          Unfamiliar with how to navigate the Web3 or Metaverse space? Aether
          Meta will be providing each brand that comes on board with monthly
          updates in order to ensure that they are getting the full potential of
          their store.
        </Text>
        <Diagram />
      </FlexContainer>
    </Container>
  );
};

export default SupportTablet;
