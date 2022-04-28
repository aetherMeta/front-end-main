import React from "react";
import styled from "styled-components";
import { Flex, Text, Button, MailIcon } from "@aether/uikit";

const Container = styled.div`
  padding 50px 0px;  
  background-image: ${({ theme }) => theme.colors.gradients.primary};`;

const FlexContainer = styled(Flex)`
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  border-radius: 0;
  background-color: transparent;
`;

const StyledFlex = styled(Flex)`
  gap: 16px;
`;

const Contact: React.FC = () => {
  return (
    <Container>
      <FlexContainer>
        <Text variant="h2" maxWidth="858px" color="invertedContrast">
          Questions? Ideas? Interested in opening a shop on AetherMeta?
        </Text>
        <Text
          variant="body"
          my="24px"
          maxWidth="630px"
          color="invertedContrast"
        >
          Get in touch with us on any of our social platforms. Or reach out to
          our team:
        </Text>
        <StyledFlex>
          <StyledButton variant="tertiary" startIcon={<MailIcon />}>
            Partnership Enquiries
          </StyledButton>
          <StyledButton variant="tertiary" startIcon={<MailIcon />}>
            Join the AetherMeta team
          </StyledButton>
        </StyledFlex>
      </FlexContainer>
    </Container>
  );
};

export default Contact;
