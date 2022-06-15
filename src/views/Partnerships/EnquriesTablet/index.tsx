import React from "react";
import styled from "styled-components";
import { Flex, Text, Input, Button, Label, TextArea } from "@aethermeta/uikit";

const Container = styled.div`
  padding 5em 20px 80px;
  background: url(/images/joinUsMobile.svg);
  background-repeat: no-repeat;
  background-size: 503px;
  background-color: ${({ theme }) => theme.colors.background};
  ${({ theme }) => theme.mediaQueries.lg} {
    padding 5em 70px;
    background: url(/images/joinUs.svg);
    background-repeat: no-repeat;
    background-size: 1706px;
    background-color: ${({ theme }) => theme.colors.background};
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding 5em 180px;
    background: url(/images/joinUs.svg);
    background-repeat: no-repeat;
    background-size: 1706px;
    background-color: ${({ theme }) => theme.colors.background};
  }
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
  min-width: 40vh;

  ${({theme}) => theme.mediaQueries.sm} {
      min-width: 60vh
  }

  ${({theme}) => theme.mediaQueries.md} {
      mind-width: 80vh
  }
` 

const Enquiry = styled(Flex)`
  justify-content: flex-start;
`;


const Center = styled(Text) `
  text-align: center;
`


const EnquiresTablet: React.FC = () => {
    return (
        <Container>
            <Center variant="h4Bold">
                Get in touch with out sales team fore more details on how you can onboard to the newest marketing touchpoint for generation Z.
            </Center>
            <EnquiryContainer>
              <EnquiryContainer2>
                  <Enquiry>
                    <Text variant="h4Bold">
                        Enquiries
                    </Text>
                  </Enquiry>
                  <Label>
                    Company
                  </Label>
                  <Input type="text" placeholder="Company Name"/> <br />
                  <Label>
                    Email
                  </Label>
                  <Input type="email" placeholder="Business Email Address"/> <br />
                  <Label>
                    Description
                  </Label>
                  <TextArea placeholder="Describe your Business"/>
                  
                  <Enquiry>
                    <Button variant="text">Submit</Button>
                  </Enquiry>
                  
                </EnquiryContainer2>
            </EnquiryContainer>
                
        </Container>
    );
}

export default EnquiresTablet;