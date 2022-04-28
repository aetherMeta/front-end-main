import React from "react";
import styled from "styled-components";
import { Flex, Text } from "@aether/uikit";

const Container = styled.div`
  padding 0px 180px 444px;  
  background: url(/images/ready.svg);
  background-repeat: no-repeat;
  background-size: 1766px;
  background-position: center 478px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const FlexContainer = styled(Flex)`
  height: 100%;
  flex-direction: column;
`;

const StyledFlex = styled(Flex)`
  gap: 302px;
`;

const Ready: React.FC = () => {
  return (
    <Container>
      <FlexContainer>
        <Text variant="h2Bold" mb="86px" maxWidth="742px">
          AETHERMETA is at the nexus of Luxury, Web3 and VR.
        </Text>
        <Flex flexDirection="column" alignItems="center">
          <Text variant="h2" mb="12px">
            Are you ready?
          </Text>
          <Text variant="body" mb="12px" textAlign="center" maxWidth="645px">
            Do you work in the world of fashion and luxury? AetherMeta is the
            perfect partner to launch your initial foray into the next evolution
            of the web. Talk to our team to find out how you can get onboard.
          </Text>
        </Flex>
        <Flex flexDirection="column" mt="512px" alignItems="center">
          <StyledFlex justifyContent="center">
            <Flex flexDirection="column" maxWidth="360px">
              <Text variant="h1Bold">Luxury Shopping</Text>
              <Text variant="body">
                Experience and products that define exclusivity and wealth.
              </Text>
            </Flex>
            <Flex flexDirection="column" maxWidth="296px" mt="44px">
              <Text variant="h1Bold">Digital NFTs</Text>
              <Text variant="body">
                Tied to the blockchain. One of a kind physical goods and their
                digital counterparts.
              </Text>
            </Flex>
          </StyledFlex>
          <Flex flexDirection="column" maxWidth="388px" mt="146px">
            <Text variant="h1Bold">VR Metaverse</Text>
            <Text variant="body">
              Built into the Aether Metaverse. Purchase products in stored
              impossible in the real world and use them digitally.
            </Text>
          </Flex>
        </Flex>
      </FlexContainer>
    </Container>
  );
};

export default Ready;
