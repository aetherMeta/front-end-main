import React from "react";
import styled from "styled-components";
import { Flex, Text, Button, DiscordIcon } from "@aethermeta/uikit";

const Container = styled.div`
  padding-top: 96px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ContainerInner = styled.div`
  padding: 0 22px 242px;
  background: url(/images/aboutAetherMobile.svg);
  background-repeat: no-repeat;
  background-size: 968px;
  background-position: center 0%;
`;

const FlexContainer = styled(Flex)`
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

const StyledTitle = styled.div`
  margin: auto;
  max-width: 468px;
  text-align: center;
`;

const StyledFlex = styled(Flex)`
  width: 100%;
  justify-content: center;
`;

const StyledFlex2 = styled(Flex)`
  width: 100%;
  justify-content: center;
  margin-top: 460px;
  @media screen and (min-width: 354px) {
    margin-top: 520px;
  }
  @media screen and (min-width: 360px) {
    margin-top: 546px;
  }
`;

const StyledFlex3 = styled(Flex)`
  width: 100%;
  justify-content: center;
  margin-top: 400px;
  @media screen and (min-width: 326px) {
    margin-top: 420px;
  }
  @media screen and (min-width: 360px) {
    margin-top: 480px;
  }
`;

const StyledFlex4 = styled(Flex)`
  width: 100%;
  justify-content: center;
  margin-top: 420px;
  @media screen and (min-width: 338px) {
    margin-top: 450px;
  }
`;

const AboutAetherTablet: React.FC = () => {
  return (
    <Container>
      <ContainerInner>
        <FlexContainer>
          <StyledTitle>
            <Text variant="h1Light" fontWeight="300">
              ABOUT
            </Text>
            <Text variant="h1Bold" display="inline">
              AETHER
            </Text>
            <Text variant="h1Light" display="inline">
              META
            </Text>
          </StyledTitle>
          <StyledFlex mt="394px">
            <Flex flexDirection="column" maxWidth="332px">
              <Text variant="h2Bold">What is Aether Meta?</Text>
              <Text variant="body" mt="16px">
                AetherMeta is the future of online shopping. No longer is online
                shopping confined to a 2D world, now you can have your own
                immersive store for your customers. Customize your store, and
                bring your products into the metaverse. Sell both “digital” and
                “phygital” items all linked to the blockchain.
              </Text>
            </Flex>
          </StyledFlex>
          <StyledFlex2>
            <Flex flexDirection="column" maxWidth="332px">
              <Text variant="h2Bold">What is a metaverse?</Text>
              <Text variant="body" mt="16px">
                A metaverse is an immersive 3D virtual world that can be
                accessed by users to create strong social connections in an
                online setting. For online shopping, this creates the ideal
                setting for the personalization and intimacy of in-person
                shopping, but from the comfort of the users’ own homes. Aether
                Meta is harnessing the technology of the metaverse to master
                this experience.
              </Text>
            </Flex>
          </StyledFlex2>
          <StyledFlex3>
            <Flex flexDirection="column" maxWidth="310px">
              <Text variant="h2Bold">How do I join the community?</Text>
              <Text variant="body" mt="8px">
                Hoping to join our growing community and be in the know about
                our vendor drops and project developments? To get information on
                all the amazing upcoming releases and to be able to interact
                with our incredible Aether Team, join our Discord server right
                now and follow us on Twitter and Instagram.
              </Text>
              <Button
                as="a"
                startIcon={<DiscordIcon />}
                href="https://discord.gg/K4DXfzxXeJ"
                external
                mt="20px"
                style={{ borderRadius: 0 }}
              >
                <Text variant="label" color="invertedContrast">
                  Aether Meta Discord
                </Text>
              </Button>
            </Flex>
          </StyledFlex3>
          <StyledFlex4 flexDirection="column" maxWidth="310px">
            <Text variant="h2Bold">Partnership Opportunities</Text>
            <Text variant="body" mt="16px">
              Looking to join the growing list of brands that are trailblazing
              in the metaverse? Unsure of how to explore the Web3 and VR
              landscapes? Aether Meta provides a new world of commerce for your
              brand. Contact us today to get your brand and products into the
              metaverse.
            </Text>
          </StyledFlex4>
        </FlexContainer>
      </ContainerInner>
    </Container>
  );
};

export default AboutAetherTablet;
