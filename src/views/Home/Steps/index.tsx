import React from "react";
import styled from "styled-components";
import { Flex, Text, Image, Button, ArrowForwardIcon } from "@aethermeta/uikit";

const StyledContainer = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.peach};
  padding: 5rem;
  flex-direction: column;
`;

const Steps: React.FC = () => {
  return (
    <StyledContainer>
      <Text variant="h2Bold" width="50rem">
        4 Easy Steps to Create your Metaverse Store Today
      </Text>
      <Button
        variant="text"
        as="a"
        startIcon={<ArrowForwardIcon color="primary" />}
        href="/about"
        width="10rem"
      >
        <Text variant="link" color="primary" >
          Learn More
        </Text>
      </Button>
      <Flex justifyContent="flex-end">
        <Image src="/images/admin.svg" width={600} height={600} />
      </Flex>
    </StyledContainer>
  );
};

export default Steps;
