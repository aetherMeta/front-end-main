import React from "react";
import { Button, Flex, useMatchBreakpoints } from "@aethermeta/uikit";

export interface GlobalMenuProps {
  maxWidth?: boolean;
}

const GlobalMenu: React.FunctionComponent<GlobalMenuProps> = ({ maxWidth }) => {
  const { isTablet, isMobile } = useMatchBreakpoints();
  return (
    <Flex width={maxWidth ? "100%" : "auto"}>
      <Button
        scale="md"
        as="a"
        variant="secondary"
        href={
          isTablet || isMobile
            ? "https://aetherswatchesmobile.web.app/"
            : "https://aetherwatches-6545f.web.app/"
        }
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
