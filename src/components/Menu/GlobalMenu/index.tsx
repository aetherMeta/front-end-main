import React from "react";
import { Button, Flex } from "@aether/uikit";

const GlobalMenu = () => {
  return (
    <Flex>
      <Button
        scale="md"
        as="a"
        variant="secondary"
        ml="8px"
        href="https://aethercagoose.web.app/"
        mr="16px"
        target="_blank"
      >
        Enter Metaverse
      </Button>
    </Flex>
  );
};

export default GlobalMenu;
