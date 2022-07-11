import React from "react";
import styled from "styled-components";
import { Flex, Text, Button, MailIcon } from "@aethermeta/uikit";

const Container = styled.div`
  padding 50px 56px;  
  background-image: ${({ theme }) => theme.colors.gradients.primary};`;

const FlexContainer = styled(Flex)`
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

const StyledFlex = styled(Flex)`
  gap: 16px;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`;

const Contact: React.FC = () => {
  return (
    <Container>
      <FlexContainer>
        <Text
          variant="h2"
          maxWidth="858px"
          color="invertedContrast"
          textAlign="center"
        >
          Questions? Ideas? Interested in opening a shop on AetherMeta?
        </Text>
        <Text
          variant="body"
          my="24px"
          maxWidth="630px"
          color="invertedContrast"
          textAlign="center"
        >
          Get in touch with us on any of our social platforms. Or reach out to
          our team:
        </Text>
        <StyledFlex>
          <Button
            variant="tertiary"
            startIcon={<MailIcon />}
            href="/partnerships"
            as="a"
            style={{ borderRadius: 0, backgroundColor: "transparent" }}
          >
            Partnership Enquiries
          </Button>
          {/* <StyledButton variant="tertiary" startIcon={<MailIcon />}>
            Join the AetherMeta team
          </StyledButton> */}
        </StyledFlex>
      </FlexContainer>
    </Container>
  );
};

export default Contact;
