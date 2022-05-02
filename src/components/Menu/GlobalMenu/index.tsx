import React from "react";
import { Button, Flex } from "@aethermeta/uikit";

export interface GlobalMenuProps {
  maxWidth?: boolean;
}

const GlobalMenu: React.FunctionComponent<GlobalMenuProps> = ({ maxWidth }) => {
  return (
    <Flex width={maxWidth ? "100%" : "auto"}>
      <Button
        scale="md"
        as="a"
        variant="secondary"
        href="https://aethercagoose.web.app/"
        ml={maxWidth ? "0px" : "8px"}
        mr={maxWidth ? "0px" : "16px"}
        mb={maxWidth ? "24px" : "0px"}
        target="_blank"
        width={maxWidth ? "100%" : "auto"}
      >
        Enter Metaverse
      </Button>
    </Flex>
  );
};

export default GlobalMenu;
