import React from "react";
import styled from "styled-components";
import { Flex, Text } from "@aether/uikit";

const Container = styled.div`
  padding 124px 180px 124px 70px;
  background: url(/images/welcome.svg);
  background-repeat: no-repeat;
  background-size: 2352px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const FlexContainer = styled(Flex)`
  height: 100%;
  flex-direction: column;
`;

const StyledInline = styled.div`
  display: inline;
  margin-bottom: 76px;
`;

const TextContainer = styled.div`
  max-width: 530px;
`;

const StyledText = styled(Text)`
  margin-top: 16px;
`;

const WelcomeSymbol = styled.div`
  margin-top: 84px;
  width: 164px;
  height: 278px;
  background: url(/images/welcomeSymbol.svg);
`;

const LearnMore: React.FC = () => {
  return (
    <Container>
      <FlexContainer>
        <StyledInline>
          <Text variant="h1Light" display="inline">
            WELCOME TO{" "}
          </Text>
          <Text variant="h1Bold" display="inline">
            AETHER
          </Text>
          <Text variant="h1Light" display="inline">
            META
          </Text>
        </StyledInline>
        <Flex justifyContent="space-between">
          <TextContainer>
            <Text variant="body">
              Hundreds of years ago, a civilization from the stars stumbled upon
              a planet named Earth. The Earth was unlike any planet they had
              found before. Clean air, pure water and all the essential elements
              of life. It was almost the perfect paradise but for two problems.
              The human residents on the ground were rather detestable and the
              planet’s gravitational pull was stronger than they liked.
            </Text>
            <StyledText variant="body">
              For the travelers though, these issues were easily overcome.
              Drawing from their vast knowledge and skill, they crafted the
              Aether Orb. An object that allows impossibly heavy objects defy
              gravity’s oppressive pull.
            </StyledText>
            <StyledText variant="body">
              The travelers then enhanced the Orb with powers manipulating
              space, light and time. Minimal power lets it easily hold up
              cities, but with more energy, the orb opens light portals to other
              galaxies and slows time to a crawl.
            </StyledText>
            <StyledText variant="body">
              Eons passed and the travelers moved on, seeking out new planets.
              They abandoned the Aether Orb, leaving it listless in the sky.
              Without the travelers, the Orb’s power slowly faded, becoming a
              shallow memory of its once vast power.
            </StyledText>
          </TextContainer>
          <TextContainer style={{ marginLeft: "130px" }}>
            <Text variant="h3Bold" mt="124px" mb="16px">
              Then our team arrived.
            </Text>
            <Text variant="body">
              From the moment our feet touched the terraced gardens, we knew
              this place was special. It was as if something within us changed.
              The Aether Orb calmed our spirits, banishing reality and struggles
              of life on the ground. The Orb seemed to appreciate our presence
              as well, growing stronger as we built and interacted with it.
            </Text>
            <StyledText variant="body">
              We named this land AetherMeta and we plan on restoring it to its
              former grandeur. As the orb reacts to vibrance and creativity, we
              are bringing artists and creatives to open shops. We are offering
              AetherMeta NFTs to visionaries to contribute with us. Select
              guests will receive exclusive invitations as well.
            </StyledText>
            <StyledText variant="body">
              Join us in this place of wonder and secrets. Here you will find
              the most exclusive marketplace in the metaverse with a stunning
              collection of luxury brands, art – and more. Enter our metaverse
              and allow yourself to absorb the warmth of the sun, window-shop
              the picturesque streets and get lost wandering the mountains and
              gardens. And of course, there’s the breathtakingly endless clouds
              and sky.
            </StyledText>
            <StyledText variant="body">
              With your help and our team’s capabilities, we can together
              restore AetherMeta to an everlasting ecosystem of luxury and
              creativity. All are welcome – you just have to find a way up here.
            </StyledText>
          </TextContainer>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <WelcomeSymbol />
          <Flex flexDirection="column" maxWidth="682px">
            <Text variant="h3Bold" mt="42px" color="primary">
              All are welcome
            </Text>
            <Text variant="h3Bold" ml="64px">
              – if you can find your way up here.
            </Text>
          </Flex>
        </Flex>
      </FlexContainer>
    </Container>
  );
};

export default LearnMore;
