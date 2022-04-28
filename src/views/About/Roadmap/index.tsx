import React from "react";
import styled from "styled-components";
import { Flex, Text } from "@aether/uikit";

const Container = styled.div`
  padding 128px 180px 320px;
  background: url(/images/joinUs.svg);
  background-repeat: no-repeat;
  background-size: 1706px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const FlexContainer = styled(Flex)`
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const StyledRoadmap = styled.div`
  background: url(/images/roadmap.svg);
  background-repeat: no-repeat;
  background-size: 20px;
  width: 20px;
  height: 410px;
  margin-top: 6px;
  margin-right: 24px;
`;

const Roadmap: React.FC = () => {
  return (
    <Container>
      <FlexContainer>
        <Flex flexDirection="column" maxWidth="420px">
          <Text variant="h2Bold" mb="16px">
            Join us at the new edge of luxury
          </Text>
          <Text variant="body">
            Join the AetherMeta to get access to limited edition NFTs from some
            of the largest luxury brands in the business.{" "}
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <Text variant="h4Bold" color="primary">
            Roadmap
          </Text>
          <Text variant="h3Bold">On the horizon.</Text>
          <Flex mt="46px">
            <StyledRoadmap />
            <Flex flexDirection="column" maxWidth="475px">
              <Text variant="h4Bold">The Launch</Text>
              <Text variant="body">
                Be one of the first to visit AetherMeta in VR and explore the
                island.
              </Text>
              <Text variant="h4Bold" mt="42px">
                VIP Passes
              </Text>
              <Text variant="body">
                Reserve your spot and access exclusive NFT drops in the Aether
                metaverse.
              </Text>
              <Text variant="h4Bold" mt="42px">
                Avatars
              </Text>
              <Text variant="body">
                Create and adorn your Avatar with the latest luxury goods and
                high-fashion looks from AetherMeta.
              </Text>
              <Text variant="h4Bold" mt="42px">
                Life in the metaverse
              </Text>
              <Text variant="body">
                Our island will expand, with new buildings, community areas and
                worlds to explore. Leave the Earth behind and experience a life
                of luxury in the skies.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </FlexContainer>
    </Container>
  );
};

export default Roadmap;
