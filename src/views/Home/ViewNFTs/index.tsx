import React from "react";
import styled from "styled-components";
import { Flex, Text } from "@aethermeta/uikit";

const Container = styled.div`
  position: relative;
  padding: 210px 22px 0px;
  margin-top: -140px;
  height: 75vh;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 210px 70px 0px;
    height: 75vh;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 210px 70px 70px;
    height: 90vh;
  }
`;

const StyledVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
`;

const StyledFlex = styled(Flex)`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 64px;
`;

const ViewNFTs: React.FC = () => {
  return (
    <Container>
      <StyledFlex height="100%">
        <Flex flexDirection="column" maxWidth="592px">
          <Text variant="h1Light" fontWeight="300" color="invertedContrast">
            BRINGING SHOPPING
          </Text>
          <Text variant="h1Bold" color="invertedContrast">
            TO NEW HEIGHTS
          </Text>
        </Flex>
      </StyledFlex>
      <StyledVideo muted autoPlay loop playsInline>
        <source src="images/trailer2.mp4" type="video/mp4" />
      </StyledVideo>
    </Container>
  );
};

export default ViewNFTs;
