import React from "react";
import styled from "styled-components";
import { Flex, Text } from "@aethermeta/uikit";

const Container = styled.div`
  padding 140px 22px;
`;

const StyledEllipse = styled.div`
  background: url(/images/learnMoreMobile.svg);
  height: 360px;
  width: 332px;
  margin-bottom: 40px;
  background-repeat: no-repeat;
  ${({ theme }) => theme.mediaQueries.sm} {
    background: url(/images/learnMore.svg);
    background-repeat: no-repeat;
    height: 634px;
    width: 580px;
  }
`;

const FlexContainer = styled(Flex)`
  justify-content: space-around;
  align-items: center;
  height: 100%;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.xl} {
    flex-direction: row;
  }
`;

const LearnMore: React.FC = () => {
  return (
    <Container>
      <FlexContainer>
        <StyledEllipse />
        <Flex flexDirection="column" maxWidth="468px">
          <div>
            <Text variant="h1Light" display="inline-block" fontWeight="300">
              WELCOME TO
            </Text>
            <Text variant="h1Bold" display="inline">
              AETHER
            </Text>
            <Text variant="h1Light" display="inline">
              META
            </Text>
          </div>
          <Text variant="body" mt="16px">
            Aether Meta is offering the unique opportunity to gain access to the
            most marketplace in the metaverse; a stunning collection of brands,
            art, and more.
          </Text>
        </Flex>
      </FlexContainer>
    </Container>
  );
};

export default LearnMore;
