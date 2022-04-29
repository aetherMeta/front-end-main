import React from "react";
import styled from "styled-components";
import { Flex, Text } from "@aethermeta/uikit";

const Container = styled.div`
  padding 210px 22px 0px;  
  background: linear-gradient(to bottom, transparent 0 60%, white 100%), url(/images/viewNFTsMobile.svg);
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -140px;
  height: 75vh;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding 210px 70px 0px;
    background: linear-gradient(to bottom, transparent 0 60%, white 100%), url(/images/viewNFTs.svg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 75vh;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding 210px 70px 70px;
    background: url(/images/viewNFTs.svg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 90vh;
  }
`;

const StyledFlex = styled(Flex)`
  justify-content: center;
  align-items: flex-end;
  ${({ theme }) => theme.mediaQueries.lg} {
    justify-content: flex-end;
    align-items: center;
  }
`;

const ViewNFTs: React.FC = () => {
  return (
    <Container>
      <StyledFlex height="100%">
        <Flex flexDirection="column" maxWidth="592px">
          <Text variant="h1Light" fontWeight="300">
            BRINGING LUXURY SHOPPING
          </Text>
          <Text variant="h1Bold">TO NEW HEIGHTS</Text>
        </Flex>
      </StyledFlex>
    </Container>
  );
};

export default ViewNFTs;
