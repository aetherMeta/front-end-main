import React from "react";
import styled from "styled-components";
import { Flex, Text } from "@aether/uikit";

const Container = styled.div`
  padding 0px 20px 80px;  
  background-color: ${({ theme }) => theme.colors.background};
`;

const FlexContainer = styled(Flex)`
  height: 100%;
  flex-direction: column;
`;

const StyledBackground = styled.div`
  background: url(/images/readyMobile.svg);
  background-repeat: no-repeat;
  background-size: 424px;
  width: calc(100% + 40px);
  height: 420px;
  margin-left: -22px;
`;

const ReadyTablet: React.FC = () => {
  return (
    <Container>
      <FlexContainer>
        <Text variant="h2Bold" mb="38px" maxWidth="742px">
          AETHERMETA is at the nexus of Luxury, Web3 and VR.
        </Text>
        <Flex flexDirection="column" alignItems="center">
          <Text variant="h2" mb="12px">
            Are you ready?
          </Text>
          <Text variant="body" mb="38px" textAlign="center" maxWidth="645px">
            Do you work in the world of fashion and luxury? AetherMeta is the
            perfect partner to launch your initial foray into the next evolution
            of the web. Talk to our team to find out how you can get onboard.
          </Text>
        </Flex>
        <StyledBackground />
        <Flex flexDirection="column" mt="38px">
          <Flex flexDirection="column" maxWidth="332px">
            <Text variant="h4Bold">Luxury Shopping</Text>
            <Text variant="bodySmall" mt="6px">
              Experience and products that define exclusivity and wealth.
            </Text>
          </Flex>
          <Flex flexDirection="column" maxWidth="332px" mt="20px">
            <Text variant="h4Bold">Digital NFTs</Text>
            <Text variant="bodySmall" mt="6px">
              Tied to the blockchain. One of a kind physical goods and their
              digital counterparts.
            </Text>
          </Flex>
          <Flex flexDirection="column" maxWidth="332px" mt="20px">
            <Text variant="h4Bold">VR Metaverse</Text>
            <Text variant="bodySmall" mt="6px">
              Built into the Aether Metaverse. Purchase products in stored
              impossible in the real world and use them digitally.
            </Text>
          </Flex>
        </Flex>
      </FlexContainer>
    </Container>
  );
};

export default ReadyTablet;
