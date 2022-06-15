import React from "react";
import styled from "styled-components";
import { Flex, Text } from "@aethermeta/uikit";

const Container = styled.div`
    padding 50px 56px;  
`

const FlexContainer = styled(Flex) `
    justify-content: space-between;
`

const StyledMoon = styled.div`
    background: url(/images/contactMoon.svg);
    background-repeat: no-repeat;

`

const Social: React.FC = () => {
    return (
        <Container>
            <FlexContainer>
                <Text variant="h2">
                        GET IN TOUCH
                </Text>
                <StyledMoon />
            </FlexContainer>
        </Container>
    );
};

export default Social;