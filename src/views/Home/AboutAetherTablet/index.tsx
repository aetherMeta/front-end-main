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

const StyledButton = styled(Button)`
  width: 236px;
  border-radius: 0;
  margin-top: 20px;
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
              <Text variant="h2Bold">What is AetherMeta?</Text>
              <Text variant="body" mt="16px">
                AetherMeta is the future of online shopping. We seek to provide
                an immersive metaverse platform that allows users to interact
                with the next generation of luxury in a digital world. This
                surreal, captivating one-of-a-kind experience is unique and
                innovative; providing an ethereal experience to all users.
              </Text>
            </Flex>
          </StyledFlex>
          <StyledFlex mt="500px">
            <Flex flexDirection="column" maxWidth="332px">
              <Text variant="h2Bold">What is a metaverse?</Text>
              <Text variant="body" mt="16px">
                A metaverse is an immersive 3D virtual world that can be
                accessed by users to create strong social connections in an
                online setting. From an online shopping perspective, this
                creates the ideal setting for the personalization and intimacy
                of in-person shopping, but from the comfort of the users’ own
                home. Aether Meta is harnessing the technology of the metaverse
                to master this experience.
              </Text>
            </Flex>
          </StyledFlex>
          <StyledFlex mt="551px">
            <Flex flexDirection="column" maxWidth="310px">
              <Text variant="h2Bold">How do I join the community?</Text>
              <Text variant="body" mt="8px">
                Hoping to join our growing community and be in the know about
                our various luxury drops and project developments? To get
                information on all the amazing upcoming releases and to be able
                to interact with our incredible Aether Team, join our Discord
                server right now and follow us on Twitter and Instagram.
              </Text>
              <StyledButton startIcon={<DiscordIcon />}>
                <Text variant="label" color="invertedContrast">
                  AetherMeta Discord
                </Text>
              </StyledButton>
            </Flex>
          </StyledFlex>
          <Flex flexDirection="column" maxWidth="552px">
            <Text variant="h2Bold">Partnership Opportunities</Text>
            <Text variant="body" mt="16px">
              Looking to join the growing list of luxury brands that make up
              Aether Meta’s trailblazing partners in the metaverse? Unsure of
              how to explore the Web3 and VR landscapes? Aether Meta offers a
              strong understanding of these landscapes and can help you
              establish your brand in the NFT and metaverse space. Contact us
              today to discover our latest partnership opportunities.
            </Text>
          </Flex>
        </FlexContainer>
      </ContainerInner>
    </Container>
  );
};

export default AboutAetherTablet;
