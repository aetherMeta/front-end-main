import React from "react";
import styled from "styled-components";
import { Flex, Text, Button, DiscordIcon, MailIcon } from "@aethermeta/uikit";

const Container = styled.div`
  padding-top: 140px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ContainerInner = styled.div`
  padding-bottom: 320px;
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

const StyledButton = styled(Button)`
  width: 236px;
  border-radius: 0;
  margin-top: 20px;
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
              <Text variant="h2Bold">What is an NFT?</Text>
              <Text variant="body" mt="16px">
                NFTs are the latest evolution of Web3 and crypto techonology.
                With NFTs (non-fungible-tokens) digital assets become unique.
                Even though a digital file can be copied and spread across the
                internet, by purchasing an NFT your digital asset becomes the
                bona-fide original. Your ownership gets preserved on the
                blockchain, easily verified by anyone.
              </Text>
            </Flex>
          </StyledFlex>
          <StyledFlex mt="460px" justifyContent="flex-start">
            <Flex flexDirection="column" maxWidth="343px">
              <Text variant="h2Bold">What is AetherMeta?</Text>
              <Text variant="body" mt="16px">
                AetherMeta is a virtual NFT marketplace, elevating the online
                luxury shopping experience. AetherMeta is developed by veterans
                of the fashion and luxury goods industry. With NFTS and VR, we
                aim to deepen the relationship between brands and luxury
                enthusiasts.
              </Text>
            </Flex>
          </StyledFlex>
          <StyledFlex mt="446px" justifyContent="flex-end">
            <Flex flexDirection="column" maxWidth="310px">
              <Text variant="h2Bold">How do I join?</Text>
              <Text variant="body" mt="16px">
                Join the conversation with our fans and support team on our
                public Discord channel. We&apos;ll announce details of how to
                get VIP and Founder memberships shortly.
              </Text>
              <StyledButton startIcon={<DiscordIcon />}>
                <Text variant="label" color="invertedContrast">
                  AetherMeta Discord
                </Text>
              </StyledButton>
              <Flex flexDirection="column" mt="80px">
                <Text variant="h3Bold">Partnership Opportunities</Text>
                <Text variant="body" mt="16px">
                  If you are looking to join other luxury brands in the
                  metaverse, send us an email.
                </Text>
              </Flex>
              <StyledButton startIcon={<MailIcon />}>
                <Text variant="label" color="invertedContrast">
                  Partnership Enquiries
                </Text>
              </StyledButton>
            </Flex>
          </StyledFlex>
        </FlexContainer>
      </ContainerInner>
    </Container>
  );
};

export default AboutAether;
