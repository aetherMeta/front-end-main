import React from "react";
import styled from "styled-components";
import { Flex, Text } from "@aethermeta/uikit";

const Container = styled.div`
  padding 5em 20px 80px;
`;

const Diagram = styled.div`
  background: url(/images/analyticDiagram.svg);
  background-repeat: no-repeat;
  background-size: 30rem;
  height: 40vh;
  width: 60vh;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: 60vh;
    width: 80vh;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    height: 80vh;
    width: 100vh;
  }
`;

const FlexContainer = styled(Flex)`
  height: 100%;
  align-items: center;
  margin-top: 5rem;
  position: relative;
  
  ${({ theme }) => theme.mediaQueries.md} {
    left: 0em;
  }
`;


const AnalyticsTablet: React.FC = () => {
  return (
    <Container>
      <Text variant="h1Light" display="inline">
        HELP
      </Text>
      <br />
      <br />
      <Text variant="body">
        There many reasons to become part of our Metaverse.
      </Text>
      <Text variant="body">Some simple advantages are:</Text>
      <FlexContainer flexDirection="column">
        <Text variant="h3Bold">What are Web3 Analytics?</Text>
        <Text variant="body" mt="1.5rem">
          Web3 Analytics are decentralized alternatives to Google Analytics
          which 70% of existing websites use. Web3 analytics will give users
          full control over their data, without it being shared with a large
          corporation for their benefit. Web3 Analytics are able to provide
          crucial information such as customized statistics, data visualization
          dashboards and performance measurement. Blockchain technology also
          means that this data is stored securely, without the fear of a leak.
        </Text>
        <Diagram />
      </FlexContainer>
    </Container>
  );
};

export default AnalyticsTablet;
