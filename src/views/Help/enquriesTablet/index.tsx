import React from "react";
import styled from "styled-components";
import { Flex, Text, Input, Button, Label, TextArea } from "@aethermeta/uikit";

const Container = styled.div`
  padding 5em 20px 80px;
  background: url(/images/joinUsMobile.svg);
  background-repeat: no-repeat;
  background-size: 503px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const EnquiryContainer = styled(Flex)`
  justify-content: center;
  min-height: 10em;
  margin: 5em;
`;

const EnquiryContainer2 = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  min-width: 30vh;

  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 60vh;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    mind-width: 80vh;
  }
`;

const Enquiry = styled(Flex)`
  justify-content: flex-start;
`;

const EnquiresTablet: React.FC = () => {
  return (
    <Container>
      <EnquiryContainer>
        <EnquiryContainer2>
          <Enquiry>
            <Text variant="h4Bold">Enquiries</Text>
          </Enquiry>
          <form>
            <Label>Company</Label>
            <Input type="text" placeholder="Company Name" /> <br />
            <Label>Email</Label>
            <Input type="email" placeholder="Business Email Address" /> <br />
            <Label>Description</Label>
            <TextArea placeholder="Describe your Business" />
            <Enquiry>
              <Button variant="text">Submit</Button>
            </Enquiry>
          </form>
        </EnquiryContainer2>
      </EnquiryContainer>
    </Container>
  );
};

export default EnquiresTablet;
