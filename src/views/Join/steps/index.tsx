import React from "react";
import styled from "styled-components";
import { Flex, Text, Grid } from "@aethermeta/uikit";

const Container = styled.div`
  padding 5em 20px 80px;
  
 
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding 5em 180px;
    
    background-size: 1706px;
  }
`;

const StyledFlex = styled(Flex)`
  margin-top: 38px;
  flex-warp: wrap;
  margin-left: 46px;
  position: relative;

  min-width: 19.375rem;
  max-width: 19.375rem;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 46px;
  }
`;

const Diagram = styled.div`
  background: url(/images/diagram.svg);
  background-repeat: no-repeat;
  background-size: 38em;
  min-width: 40em;
  min-height: 25em;
`;

const Icon1 = styled.div`
  background: url(/images/partnershipIcon1.svg);
  background-repeat: no-repeat;
  background-size: 10em;
  min-width: 10em;
  min-height: 10em;
`;

const Icon2 = styled.div`
  background: url(/images/partnershipIcon2.svg);
  background-repeat: no-repeat;
  background-size: 10em;
  min-width: 10em;
  min-height: 10em;
`;

const Icon3 = styled.div`
  background: url(/images/partnershipIcon3.svg);
  background-repeat: no-repeat;
  background-size: 10em;
  min-width: 10em;
  min-height: 10em;
`;

const Icon4 = styled.div`
  background: url(/images/partnershipIcon4.svg);
  background-repeat: no-repeat;
  background-size: 10em;
  min-width: 10em;
  min-height: 10em;
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

const FeatureContainer = styled(Grid)`
  grid-template-columns: auto auto auto auto;
  margin: 1em;
  width: 100%;
  justify-content: space-around;
`;

const DescriptionContainer = styled(Flex)`
  flex-direction: column;
  margin: 1em;
`;

const Feature = styled(Text)`
  margin-bottom: 1em;
`;

const Partners: React.FC = () => {
  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column">
        <Text>JOIN AETHER META</Text>
        <Text variant="h2Bold">IN FOUR EASY STEPS</Text>
      </Flex>
      <Grid >

      </Grid>
    </Flex>
  );
};

export default Partners;
