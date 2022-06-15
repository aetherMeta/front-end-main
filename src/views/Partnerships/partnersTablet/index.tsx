import React from "react";
import styled from "styled-components";
import { Flex, Text, Grid } from "@aethermeta/uikit";

const Container = styled.div`
  padding 0px 20px 80px;  
  background-color: ${({ theme }) => theme.colors.background};
`;


const StyledFlex = styled(Flex)`
  flex-direction: column
  min-width: 50em;
`;

const Diagram = styled.div`
  background: url(/images/diagram.svg);
  background-repeat: no-repeat;
  background-size: contain;
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

const Icon1 = styled.div`
  background: url(/images/icon1.svg);
  background-repeat: no-repeat;
  background-size: 10em;
  min-width: 10em;
  min-height: 10em;
`;

const Icon2 = styled.div`
  background: url(/images/icon2.svg);
  background-repeat: no-repeat;
  background-size: 10em;
  min-width: 10em;
  min-height: 10em;
`;

const Icon3 = styled.div`
  background: url(/images/icon3.svg);
  background-repeat: no-repeat;
  background-size: 10em;
  min-width: 10em;
  min-height: 10em;
`;

const Icon4 = styled.div`
  background: url(/images/icon4.svg);
  background-repeat: no-repeat;
  background-size: 10em;
  min-width: 10em;
  min-height: 10em;
`;


const FlexContainer = styled(Flex)`
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin: 7em;
  
`;

const FeatureContainer = styled(Grid)`
  grid-template-columns: auto;
  margin: 2em;
  width: 100%;
  justify-content: space-between;
`;


const DescriptionContainer = styled(Flex)`
  flex-direction: column;
  margin-right: 1em;
`

const Feature = styled(Text)`
  margin-bottom: 1em;
`


const PartnersTablet: React.FC = () => {
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
            <FlexContainer>
                <StyledFlex>
                    <Text variant="h4Bold">
                        Measure product engagement and product reasearch
                    </Text>
                </StyledFlex> 
                <Diagram />
            </FlexContainer>
            <FeatureContainer>

                <DescriptionContainer>
                    <Icon1 />
                  <Feature variant="h4Bold">
                      Aether provides instant access to the NFT market
                  </Feature>
                  <Text variant="body">
                      with little overhead or development costs.
                  </Text>
                </DescriptionContainer>
               
                <DescriptionContainer>
                    <Icon2 />
                  <Feature variant="h4Bold">
                      Instant product feasibility feedback from consumers,
                  </Feature>
                  <Text variant="body">
                      suppliers and distributors.
                  </Text>
                </DescriptionContainer>
            
                <DescriptionContainer>
                    <Icon3 />
                 <Feature variant="h4Bold">
                      High-fedelity designs
                  </Feature>
                  <Text variant="body">
                      Unlike the competition we deliver high-fedelity designs that closely resemble you physical products.
                  </Text>
                </DescriptionContainer>
                  
                <DescriptionContainer>
                    <Icon4 />
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

export default PartnersTablet;