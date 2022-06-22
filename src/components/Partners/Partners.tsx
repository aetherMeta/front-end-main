import React from "react";
import styled, { keyframes } from "styled-components";
import { Flex, Text, useMatchBreakpoints } from "@aethermeta/uikit";

const Container = styled.div`
  padding: 44px 22px;
  background-color: ${({ theme }) => theme.colors.purple};
  ${({ theme }) => theme.mediaQueries.xl} {
    padding: 38px 70px 70px;
  }
`;

const StyledJenniferLe = styled.div`
  background: url(/images/jenniferle.png);
  width: 200px;
  height: 54px;
`;

const StyledRiotHill = styled.div`
  background: url(/images/riothill.png);
  background-repeat: no-repeat;
  width: 200px;
  height: 24px;
`;

const StyledOppoTaco = styled.div`
  background: url(/images/oppotaco.png);
  width: 200px;
  height: 30px;
`;

const PartnerContainer = styled(Flex)`
  justify-content: flex-start;
  margin-top: 46px;
  overflow: hidden;
`;

const scroll = keyframes`
0% {
  margin-left: 0px;
}
100% {
  margin-left: -762px;
}
`;

const PartnerBox = styled(Flex)`
  align-items: center;
  gap: 54px;
  animation: ${scroll} 8s linear infinite;
  ${({ theme }) => theme.mediaQueries.lg} {
    gap: 124px;
    animation: none;
  }
`;

const Partners: React.FC = () => {
  const { isMobile, isTablet } = useMatchBreakpoints();

  return (
    <Container>
      <Text variant="h3Bold" color="invertedContrast">
        Our partners
      </Text>
      <PartnerContainer>
        <PartnerBox>
          <StyledJenniferLe />
          <StyledRiotHill />
          <StyledOppoTaco />
          {(isTablet || isMobile) && (
            <>
              <StyledJenniferLe />
              <StyledRiotHill />
              <StyledOppoTaco />
            </>
          )}
        </PartnerBox>
      </PartnerContainer>
    </Container>
  );
};

export default Partners;
