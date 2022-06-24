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
    justify-content: space-around;
    
`

const StyledMoon = styled.div`
    background: url(/images/contactMoon.svg);
    background-repeat: no-repeat;
    height: 40rem;
    width: 40rem;
`

const ContactButton = styled(Button)`
    max-width: 50%;
`

const JoinUs = styled(Text)`
    max-width: 29rem;
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
                    <ContactButton variant="primary" startIcon={<DiscordIcon />}>
                        AetherMeta Discord
                    </ContactButton>
                    <JoinUs variant="h3Bold">
                        Join us
                    </JoinUs>
                    <JoinUs variant="body">
                        For a more private conversation on forming a brand partnership or career enquiry, email us.
                    </JoinUs>
                    <ContactButton variant="primary" startIcon={<MailIcon />}>
                        Partnership Enquires
                    </ContactButton>
                    <ContactButton variant="primary" startIcon={<MailIcon />}>
                        Join the AetherMeta team
                    </ContactButton>
                </FlexContainer2>
                <StyledMoon />
            </FlexContainer>
        </Container>
    );
};

export default Social;