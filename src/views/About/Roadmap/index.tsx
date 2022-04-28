import React from "react";
import styled from "styled-components";
import { Flex, Text } from "@aether/uikit";

const Container = styled.div`
  padding 172px 20px 80px;
  background: url(/images/joinUsMobile.svg);
  background-repeat: no-repeat;
  background-size: 503px;
  background-color: ${({ theme }) => theme.colors.background};
  ${({ theme }) => theme.mediaQueries.lg} {
    padding 324px 70px;
    background: url(/images/joinUs.svg);
    background-repeat: no-repeat;
    background-size: 1706px;
    background-color: ${({ theme }) => theme.colors.background};
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding 188px 180px;
    background: url(/images/joinUs.svg);
    background-repeat: no-repeat;
    background-size: 1706px;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

const FlexContainer = styled(Flex)`
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.xxl} {
    flex-direction: row;
    align-items: center;
  }
`;

const StyledRoadmap = styled.div`
  background: url(/images/roadmapMobile.svg);
  background-repeat: no-repeat;
  background-size: 20px;
  width: 20px;
  height: 426px;
  margin-top: 6px;
  margin-right: 24px;
  ${({ theme }) => theme.mediaQueries.lg} {
    background: url(/images/roadmap.svg);
    background-repeat: no-repeat;
    background-size: 20px;
    width: 20px;
    height: 410px;
    margin-top: 6px;
    margin-right: 24px;
  }
`;

const StyledFlex = styled(Flex)`
  flex-direction: column;
  margin-top: 80px;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 180px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    margin-top: 0;
  }
`;

const StyledFlex2 = styled(Flex)`
  margin-top: 38px;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 46px;
  }
`;

const StyledFlex3 = styled(Flex)`
  max-width: 236px;
  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: 475px;
  }
`;

const StyledText = styled(Text)`
  margin-top: 24px;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 42px;
  }
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
        <StyledFlex flexDirection="column">
          <Text variant="h4Bold" color="primary">
            Roadmap
          </Text>
          <Text variant="h3Bold">On the horizon.</Text>
          <StyledFlex2>
            <StyledRoadmap />
            <StyledFlex3 flexDirection="column">
              <Text variant="h4Bold">The Launch</Text>
              <Text variant="body">
                Be one of the first to visit AetherMeta in VR and explore the
                island.
              </Text>
              <StyledText variant="h4Bold">VIP Passes</StyledText>
              <Text variant="body">
                Reserve your spot and access exclusive NFT drops in the Aether
                metaverse.
              </Text>
              <StyledText variant="h4Bold">Avatars</StyledText>
              <Text variant="body">
                Create and adorn your Avatar with the latest luxury goods and
                high-fashion looks from AetherMeta.
              </Text>
              <StyledText variant="h4Bold">Life in the metaverse</StyledText>
              <Text variant="body">
                Our island will expand, with new buildings, community areas and
                worlds to explore. Leave the Earth behind and experience a life
                of luxury in the skies.
              </Text>
            </StyledFlex3>
          </StyledFlex2>
        </StyledFlex>
      </FlexContainer>
    </Container>
  );
};

export default Roadmap;
