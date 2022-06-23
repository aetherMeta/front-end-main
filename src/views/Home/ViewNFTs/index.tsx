import React, { useState } from "react";
import styled from "styled-components";
import { Flex, Text, Button, useModal } from "@aethermeta/uikit";
import PartnershipModal, { Values } from "./PartnershipModal";

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
  z-index: 1;
  justify-content: center;
  align-items: center;
`;

const onSubmit = (e, values: Values) => {
  e.preventDefault();
  console.log(values);
};

const ViewNFTs: React.FC = () => {
  const [onPresent] = useModal(
    <PartnershipModal onSubmit={(e, values: Values) => onSubmit(e, values)} />
  );
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
          <Button
            variant="primary"
            width="152px"
            style={{ borderRadius: 0 }}
            onClick={onPresent}
          >
            Start free trial
          </Button>
        </Flex>
      </StyledFlex>
      <StyledVideo muted autoPlay loop playsInline>
        <source src="images/trailer2.mp4" type="video/mp4" />
      </StyledVideo>
    </Container>
  );
};

export default ViewNFTs;
