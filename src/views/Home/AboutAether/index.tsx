import React from "react";
import styled from "styled-components";
import {
  Flex,
  Text,
  Button,
  DiscordIcon,
  InstagramIcon,
  TwitterIcon,
  ArrowForwardIcon,
} from "@aethermeta/uikit";

const Container = styled.div`
  padding-top: 140px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ContainerInner = styled.div`
  padding-bottom: 482px;
  background: url(/images/aboutAether.svg);
  background-repeat: no-repeat;
  background-size: 2020px;
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
  padding: 0 60px;
  max-width 1440px;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding: 0 180px;
  }
`;

const AboutAether: React.FC = () => {
  return (
    <Container>
      <ContainerInner>
        <FlexContainer>
          <StyledTitle>
            <Text variant="h1Light" display="inline-block" fontWeight="300">
              ABOUT
            </Text>
            <Text variant="h1Bold" display="inline">
              AETHER
            </Text>
            <Text variant="h1Light" display="inline">
              META
            </Text>
          </StyledTitle>
          <StyledFlex mt="140px" justifyContent="flex-end">
            <Flex flexDirection="column" maxWidth="310px">
              <Text variant="h2Bold">What is AetherMeta?</Text>
              <Text variant="body" mt="16px">
                AetherMeta is the future of online shopping. We seek to provide
                an immersive metaverse platform that allows users to interact
                with the next generation of luxury in a digital world. This
                surreal, captivating experience is unique and innovative;
                providing an ethereal experience to all users.
              </Text>
              <Button
                variant="text"
                as="a"
                startIcon={<ArrowForwardIcon color="primary" />}
                href="/about"
                width="117px"
                padding="0"
              >
                <Text variant="link" color="primary">
                  Learn More
                </Text>
              </Button>
            </Flex>
          </StyledFlex>
          <StyledFlex mt="432px" justifyContent="flex-start">
            <Flex flexDirection="column" maxWidth="343px">
              <Text variant="h2Bold">What is a metaverse?</Text>
              <Text variant="body" mt="16px">
                A metaverse is an immersive 3D virtual world that can be
                accessed by users to create strong social connections in an
                online setting. From an online shopping perspective, this
                creates the ideal setting for the personalization and intimacy
                of in-person shopping, but from the comfort of the users’ own
                homes. Aether Meta is harnessing the technology of the metaverse
                to master this experience.
              </Text>
              <Button
                as="a"
                variant="primary"
                href="https://aethercagoose.web.app/"
                target="_blank"
                mt="16px"
                width="134px"
              >
                Explore now
              </Button>
            </Flex>
          </StyledFlex>
          <StyledFlex mt="342px" justifyContent="flex-end">
            <Flex flexDirection="column" maxWidth="310px">
              <Text variant="h2Bold">How do I join the community?</Text>
              <Text variant="body" mt="16px">
                Hoping to join our growing community and be in the know about
                our various luxury drops and project developments? To get
                information on all the amazing upcoming releases and to be able
                to interact with our incredible Aether Team, join our Discord
                server right now and follow us on Twitter and Instagram.
              </Text>
              <div>
                <Button
                  as="a"
                  startIcon={<DiscordIcon />}
                  href="https://discord.gg/K4DXfzxXeJ"
                  external
                  mt="20px"
                  style={{ borderRadius: 0 }}
                >
                  <Text variant="label" color="invertedContrast">
                    AetherMeta Discord
                  </Text>
                </Button>
                <Button
                  as="a"
                  startIcon={<TwitterIcon />}
                  href="https://twitter.com/AetherMeta"
                  external
                  mt="20px"
                  style={{ borderRadius: 0 }}
                >
                  <Text variant="label" color="invertedContrast">
                    AetherMeta Twitter
                  </Text>
                </Button>
                <Button
                  as="a"
                  startIcon={<InstagramIcon />}
                  href="https://www.instagram.com/aethermeta/?hl=en"
                  external
                  mt="20px"
                  style={{ borderRadius: 0 }}
                >
                  <Text variant="label" color="invertedContrast">
                    AetherMeta IG
                  </Text>
                </Button>
              </div>
            </Flex>
          </StyledFlex>
          <StyledFlex mt="362px" justifyContent="flex-start">
            <Flex flexDirection="column" maxWidth="376px">
              <Text variant="h2Bold">Partnership Opportunities</Text>
              <Text variant="body" mt="16px">
                Looking to join the growing list of brands that are trailblazing
                in the metaverse?
              </Text>
              <Text variant="body" mt="16px">
                Unsure of how to explore the Web3 and VR landscapes?
              </Text>
              <Text variant="body" mt="16px">
                Aether Meta provides a new world of commerce for your brand.
                Contact us today to get your brand and products into the
                metaverse.
              </Text>
            </Flex>
          </StyledFlex>
        </FlexContainer>
      </ContainerInner>
    </Container>
  );
};

export default AboutAether;
