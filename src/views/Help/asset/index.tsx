import React from "react";
import styled from "styled-components";
import { Flex, Text } from "@aethermeta/uikit";

const Container = styled(Flex)`
  padding 5em 0px 0px;
  
 
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding 5em 5rem;
    
    background-size: 1706px;
  }
`;

const StyledFlex = styled(Flex)`
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
  background: url(/images/assetlogo1.svg);
  background-repeat: no-repeat;
  background-size: 13em;
  min-width: 13rem;
  min-height: 13rem;
  margin-left: 3rem;
  margin-bottom: 2rem;
`;

const Diagram2 = styled.div`
  background: url(/images/assetlogo2.svg);
  background-repeat: no-repeat;
  background-size: 13em;
  min-width: 13rem;
  min-height: 13rem;
  margin-left: 7rem;
`;

const Diagram3 = styled.div`
  background: url(/images/assetlogo3.svg);
  background-repeat: no-repeat;
  background-size: 13em;
  min-width: 13rem;
  min-height: 13rem;
  margin-left: 3rem;
  margin-top: 2rem;
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

const Asset: React.FC = () => {
  return (
    <Container>
      <FlexContainer>
        <StyledFlex>
          <Text variant="h2Bold">3D Asset Experts</Text>
          <Text variant="body" mt="1.5rem">
            The Aether Meta Team has a very strong understanding of 3D Assets
            that will not only allow your brand to build an immersive Metaverse
            Store, but also to render digital and phygital items in the
            Metaverse.
          </Text>
          <Text variant="body" mt="1.5rem">
            Your company will be able to digitize your Items, getting them
            rendered in a high quality 3D virtual format using Item
            Digitization. These items will have a high level of realism by using
            state of the art digitization techniques.
          </Text>
          <Text variant="body" mt="1.5rem">
            Aether Meta can then help you convert these items into NFTs for sale
            in store, where you can then display the items in your metaverse
            store for users to interact with prior to purchase.
          </Text>
        </StyledFlex>
        <Flex flexDirection="column" ml="4rem">
          <Diagram />
          <Diagram2 />
          <Diagram3 />
        </Flex>
      </FlexContainer>
    </Container>
  );
};

export default Asset;
