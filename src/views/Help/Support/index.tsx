import React from "react";
import styled from "styled-components";
import { Flex, Text } from "@aethermeta/uikit";

const Container = styled(Flex)`
  
 
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding 5em 180px;
    
    background-size: 1706px;
  }
`;

const StyledFlex = styled(Flex)`
  margin-left: 46px;
  position: relative;
  flex-direction: column;

  min-width: 26.25rem;
  max-width: 26.25rem;

  align-content: start;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 46px;
  }
`;

const Diagram = styled.div`
  background: url(/images/support.svg);
  background-repeat: no-repeat;
  background-size: 38em;
  min-width: 40em;
  min-height: 40rem;
  margin-right: 5rem;
`;

const FlexContainer = styled(Flex)`
  height: 100%;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin: 7rem 7rem 0rem 7rem;
  position: relative;
  left: 5em;
  ${({ theme }) => theme.mediaQueries.md} {
    left: 0em;
  }
`;

const Support: React.FC = () => {
  return (
    <Container>
      <FlexContainer>
        <Diagram />
        <StyledFlex>
          <Text variant="h2Bold">AetherMeta Support</Text>
          <Text variant="body" mt="1.5rem">
            Unfamiliar with how to navigate the Web3 or Metaverse space? Aether
            Meta will be providing each brand that comes on board with monthly
            updates in order to ensure that they are getting the full potential
            of their store.
          </Text>
          <Text variant="body" mt="1.5rem">
            This includes consulting advice on how best to market products as
            well as what technology will go best with each brand. Furthermore,
            if your brand has any questions, Aether Meta’s Dev Team is always
            ready to help with customer support.
          </Text>
          <Text variant="body" mt="1.5rem">
            Send us an email at any time with any questions or concerns.
          </Text>
        </StyledFlex>
      </FlexContainer>
    </Container>
  );
};

export default Support;
