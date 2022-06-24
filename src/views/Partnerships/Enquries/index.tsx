import React from "react";
import styled from "styled-components";
import { Flex, Text, Input, Button, Label, TextArea } from "@aethermeta/uikit";

const Container = styled.div`
  padding 5em 20px;
  background-repeat: no-repeat;
  background-size: 503px;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding 5em 70px;
    background-size: 1706px;
   
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding 5em 180px;
   
    background-size: 1706px;
   
  }
`;

const EnquiryContainer = styled(Flex)`
  justify-content: center;
  min-height: 10rem;
  margin: 10em;
`;

const EnquiryContainer2 = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  min-width: 40rem;
`;

const Enquiry = styled(Flex)`
  justify-content: flex-start;
  padding: 0;
`;

const Center = styled(Text)`
  text-align: center;
`;

const Submit = styled(Button)`
  padding: 0;
`;
const Enquires: React.FC = () => {
  return (
    <Container>
      <Center variant="h3Bold">
        Get in touch with out sales team for more details on how you can onboard
        to the newest marketing touchpoint for generation Z.
      </Center>
      <EnquiryContainer>
        <EnquiryContainer2>
          <Enquiry>
            <Text variant="h3Bold">Enquiries</Text>
          </Enquiry>
          <Label color="black">Company</Label>
          <Input type="text" placeholder="Company Name" /> <br />
          <Label color="black">Email</Label>
          <Input type="email" placeholder="Business Email Address" /> <br />
          <Label color="black">Description</Label>
          <TextArea placeholder="Describe your Business" />
          <Enquiry>
            <Submit variant="text">Submit</Submit>
          </Enquiry>
        </EnquiryContainer2>
      </EnquiryContainer>
    </Container>
  );
};

export default Enquires;
