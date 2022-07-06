import React from "react";
import styled from "styled-components";
import { Flex, Text, MailIcon, DiscordIcon, Button } from "@aethermeta/uikit";
import Discord from "../discord";

const Container = styled.div`
    padding 50px 0px 50px 56px;  
`

const StyledMoon = styled.div`
    background: url(/images/contactMoon.svg);
    background-repeat: no-repeat;
    height: 40rem;
    width: 40rem;
`

const JoinUs = styled(Text)`
    max-width: 29rem;
    margin: 1rem;
`

const Social: React.FC = () => {
    return (
        <Container>
            <Flex justifyContent="space-between">
                <Flex flexDirection="column">
                    <JoinUs variant="h2Bold">
                            GET IN TOUCH
                    </JoinUs>
                    <JoinUs variant="body">
                        We&rsquo;re on Discord. Join the conversation.
                    </JoinUs>
                    <Button as="a" target="_blank" variant="primary" startIcon={<DiscordIcon />} style={{borderRadius: 0, maxWidth: "45%", margin: "1rem"}} href={Discord}>
                        AetherMeta Discord
                    </Button>
                    <JoinUs variant="h3Bold">
                        Join us
                    </JoinUs>
                    <JoinUs variant="body">
                        For a more private conversation on forming a brand partnership or career enquiry, email us.
                    </JoinUs>
                    <Button as="a" variant="primary" startIcon={<MailIcon />} style={{borderRadius: 0, maxWidth: "50%", margin: "1rem"}} href="/partnerships">
                        Partnership Enquires
                    </Button>
                    <Button as="a" variant="primary" startIcon={<MailIcon />} style={{borderRadius: 0, maxWidth: "55%", margin: "1rem"}} href="mailto:info@aethermeta.io">
                        Join the AetherMeta team
                    </Button>
                </Flex>
                <StyledMoon />
            </Flex>
        </Container>
    );
};

export default Social;