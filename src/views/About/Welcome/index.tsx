import React from "react";
import styled from "styled-components";
import { Flex, Text } from "@aethermeta/uikit";

const Container = styled.div`
  padding 80px 22px 80px;
  margin-top: -140px;
  background: url(/images/welcomeMobile.svg);
  background-repeat: no-repeat;
  background-size: 2124px;
  background-color: ${({ theme }) => theme.colors.background};
  ${({ theme }) => theme.mediaQueries.lg} {
    padding 124px 70px 142px;
    background: url(/images/welcome.svg);
    background-repeat: no-repeat;
    background-size: 2352px;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

const FlexContainer = styled(Flex)`
  height: 100%;
  flex-direction: column;
  margin-top: 140px;
`;

const StyledFlex = styled(Flex)`
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    justify-content; space-between;
  }
`;

const StyledInline = styled.div`
  display: inline;
  margin-bottom: 38px;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 76px;
  }
`;

const TextContainer = styled.div`
  max-width: 530px;
`;

const TextContainer2 = styled.div`
  max-width: 530px;
  margin-left: 0;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-left: 76px;
  }
`;

const StyledText = styled(Text)`
  margin-top: 16px;
`;

const StyledText2 = styled(Text)`
  margin-top: 38px;
  margin-bottom: 16px;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 124px;
  }
`;

const WelcomeSymbol = styled.div`
  margin-top: 84px;
  width: 100px;
  height: 172px;
  background: url(/images/welcomeSymbolMobile.svg);
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 164px;
    height: 278px;
    background: url(/images/welcomeSymbol.svg);
  }
`;

const Welcome: React.FC = () => {
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
        <StyledFlex>
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
              The travelers then partnered with the most enlightened earthbound
              artists, artisans and craftsman in order to enhance their flying
              city with the greatest parts of human culture. This cultural
              exchange allowed their floating cities to flourish, blending their
              incredible technology with the best parts of human creativity.
              This powerful exchange and enlightenment helped increase the
              amount of energy in the Orb and create wondrous opportunities for
              the denizens of the floating cities.
            </StyledText>
            <StyledText variant="body">
              Eons passed and the travelers moved on, seeking out new planets.
              They abandoned the Aether Orb, leaving it listless in the sky.
              Without the travelers, the Orb’s power slowly faded, becoming a
              shallow memory of its once vast power.
            </StyledText>
          </TextContainer>
          <TextContainer2>
            <StyledText2 variant="h3Bold">Then our team arrived.</StyledText2>
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
              Due to the exclusiveness of the Aether Orb technology and the
              hidden nature of the floating AetherMeta city, the secret to
              accessing this breathtaking landscape is stored within highly
              advanced Wayfinders. These Wayfinders will soon become available
              for acquisition by those seeking to explore AetherMeta.
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
              creativity. All are welcome – find your way to the future.
            </StyledText>
          </TextContainer2>
        </StyledFlex>
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

export default Welcome;
