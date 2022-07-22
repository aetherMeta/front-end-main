import React from "react";
import Disclaimer from "components/DisclaimerModel";
import { Button, Flex, useModal } from "@aethermeta/uikit";

export interface GlobalMenuProps {
  maxWidth?: boolean;
}

const GlobalMenu: React.FunctionComponent<GlobalMenuProps> = ({ maxWidth }) => {
  const [onPresent] = useModal(<Disclaimer />, false);

  return (
    <Flex width={maxWidth ? "100%" : "auto"}>
      <Button
        scale="md"
        variant="secondary"
        onClick={onPresent}
        ml={maxWidth ? "0px" : "8px"}
        mr={maxWidth ? "0px" : "16px"}
        mb={maxWidth ? "24px" : "0px"}
        width={maxWidth ? "100%" : "auto"}
      >
        Enter Metaverse
      </Button>
    </Flex>
  );
};

export default GlobalMenu;
