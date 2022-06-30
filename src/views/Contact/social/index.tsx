import React from "react";
import styled from "styled-components";
import { Flex, Text, MailIcon, DiscordIcon, Button } from "@aethermeta/uikit";

const Container = styled.div`
    padding 50px 0px 50px 56px;  
`

const FlexContainer = styled(Flex) `
    justify-content: space-between;
`

const FlexContainer2 = styled(Flex) `
    flex-direction: column; 
`

const StyledMoon = styled.div`
    background: url(/images/contactMoon.svg);
    background-repeat: no-repeat;
    height: 40rem;
    width: 40rem;
`

const ContactButton = styled(Button)`
    max-width: 45%;
    margin: 1rem;
`

const ContactButton2 = styled(Button)`
    max-width: 50%;
    margin: 1rem;
`

const ContactButton3 = styled(Button)`
    max-width: 55%;
    margin: 1rem;
`

const JoinUs = styled(Text)`
    max-width: 29rem;
    margin: 1rem;
`

const Social: React.FC = () => {
    return (
        <Container>
            <FlexContainer>
                <FlexContainer2>
                    <JoinUs variant="h2Bold">
                            GET IN TOUCH
                    </JoinUs>
                    <JoinUs variant="body">
                        We&rsquo;re on Discord. Join the conversation.
                    </JoinUs>
                    <ContactButton variant="primary" startIcon={<DiscordIcon />} style={{borderRadius: 0}}>
                        AetherMeta Discord
                    </ContactButton>
                    <JoinUs variant="h3Bold">
                        Join us
                    </JoinUs>
                    <JoinUs variant="body">
                        For a more private conversation on forming a brand partnership or career enquiry, email us.
                    </JoinUs>
                    <ContactButton2 variant="primary" startIcon={<MailIcon />} style={{borderRadius: 0}}>
                        Partnership Enquires
                    </ContactButton2>
                    <ContactButton3 variant="primary" startIcon={<MailIcon />} style={{borderRadius: 0}}>
                        Join the AetherMeta team
                    </ContactButton3>
                </FlexContainer2>
                <StyledMoon />
            </FlexContainer>
        </Container>
    );
};

export default Social;