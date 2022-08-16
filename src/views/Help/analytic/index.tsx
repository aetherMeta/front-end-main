import React from "react";
import styled from "styled-components";
import { Flex, Text } from "@aethermeta/uikit";

const Container = styled.div`
  padding 5em 20px 80px;
  
 
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding 5em 180px;
    
    background-size: 1706px;
  }
`;

const StyledFlex = styled(Flex)`
  margin-top: 35px;

  margin-left: 46px;
  position: relative;
  flex-direction: column;

  min-width: 26.25rem;
  max-width: 26.25rem;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 46px;
  }
`;

const Diagram = styled.div`
  background: url(/images/analyticDiagram.svg);
  background-repeat: no-repeat;
  background-size: 38em;
  min-width: 40em;
  min-height: 25em;
`;

const FlexContainer = styled(Flex)`
  height: 100%;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin: 7em;
  position: relative;
  left: 5em;
  ${({ theme }) => theme.mediaQueries.md} {
    left: 0em;
  }
`;

const Analytics: React.FC = () => {
  return (
    <Container>
      <Text variant="h1Light" display="inline">
        HELP
      </Text>
      <br />
      <br />
      <Text variant="body">
        There are many reasons to become part of our Metaverse.
      </Text>
      <Text variant="body">Some simple advantages are:</Text>
      <FlexContainer flexDirection="column">
        <Diagram />
        <StyledFlex>
          <Text variant="h3Bold">What are Web3 Analytics?</Text>
          <Text variant="body">
            Web3 Analytics are decentralized alternatives to Google Analytics
            which 70% of existing websites use. Web3 analytics will give users
            full control over their data, without it being shared with a large
            corporation for their benefit. Web3 Analytics are able to provide
            crucial information such as customized statistics, data
            visualization dashboards and performance measurement. Blockchain
            technology also means that this data is stored securely, without the
            fear of a leak.
          </Text>
        </StyledFlex>
      </FlexContainer>
    </Container>
  );
};

export default Analytics;
