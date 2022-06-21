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
  top: -3em;
  min-width: 310px;
  
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
`;

const FeatureContainer = styled(Grid)`
  grid-template-columns: auto auto auto auto;
  margin: 2em;
  width: 100%;
  justify-content: space-between;

`;


const DescriptionContainer = styled(Flex)`
  flex-direction: column;
  margin: 1em;  
`

const Feature = styled(Text)`
  margin-bottom: 1em;
`


const Partners: React.FC = () => {
    return (
        <Container>
            <Text variant="h1Light" display="inline">
                PARTNERSHIPS
            </Text>
            <br />
            <br />
            <Text variant="body">
                There many reasons to become part of our Metaverse.
            </Text>
            <Text variant="body">
                Some simple advantages are:
            </Text>
            <FlexContainer flexDirection="column">
                <Diagram />
                <StyledFlex>
                    <Text variant="h4Bold">
                        Measure product engagement and product reasearch
                    </Text>
                </StyledFlex> 
            </FlexContainer>
            <FeatureContainer>
            
                <Icon1 />
                <Icon2 />
                <Icon3 />
                <Icon4 />
              
                <DescriptionContainer>
                  <Feature variant="h4Bold">
                      Aether provides instant access to the NFT market
                  </Feature>
                  <Text variant="body">
                      with little overhead or development costs.
                  </Text>
                </DescriptionContainer>
               
                <DescriptionContainer>
                  <Feature variant="h4Bold">
                      Instant product feasibility feedback from consumers,
                  </Feature>
                  <Text variant="body">
                      suppliers and distributors.
                  </Text>
                </DescriptionContainer>
                <DescriptionContainer>
                 <Feature variant="h4Bold">
                      High-fedelity designs
                  </Feature>
                  <Text variant="body">
                      Unlike the competition we deliver high-fedelity designs that closely resemble you physical products.
                  </Text>
                </DescriptionContainer> 
                <DescriptionContainer>
                  <Feature variant="h4Bold">
                      Tailored brand experience
                  </Feature>
                  <Text variant="body">
                      Our team can tailor the experience to crea a new, enhanced brand experience that energizes your target audience and creates unique talking points for marketing opportunites.
                  </Text>
                </DescriptionContainer> 
            </FeatureContainer>
        </Container>
    );
};

export default Partners;