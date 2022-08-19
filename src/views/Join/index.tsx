import React from "react";
import Page from "components/Layout/Page";
import { useMatchBreakpoints } from "@aethermeta/uikit";
import styled from "styled-components";
import Steps from "./steps";
import StepsMobile from "./stepsMobile";

const StepsContainer = styled(Page)`
  background-color: ${({ theme }) => theme.colors.background};
  background-image: url(/images/stepsBackground.svg);
  background-size: 100%;
`

const Join: React.FC = () => {
  const { isTablet, isMobile } = useMatchBreakpoints();
  return (
   <StepsContainer>
    {isTablet || isMobile ? <StepsMobile /> : <Steps />} 
  </StepsContainer>
  );
};

export default Join;
