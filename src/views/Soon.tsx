import React from "react";
import styled from "styled-components";
import { Button, Text, LogoIcon } from "@aethermeta/uikit";

const StyledSoon = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`;

const Soon = () => {
  return (
    <StyledSoon>
      <LogoIcon width="64px" mb="8px" />
      <Text mb="16px">Page Coming Soon</Text>
      <Button as="a" href="/" scale="sm">
        Back Home
      </Button>
    </StyledSoon>
  );
};

export default Soon;
