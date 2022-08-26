import React from "react";
import Disclaimer from "components/DisclaimerModel";
import { Button, Flex, useModal } from "@aethermeta/uikit";
import { ConnectorNames } from "utils/web3React";

import { useUser } from "store/user/hooks";
import useAuth from "hooks/useAuth";
import { Link } from "react-router-dom";

export interface GlobalMenuProps {
  maxWidth?: boolean;
}

const GlobalMenu: React.FunctionComponent<GlobalMenuProps> = ({ maxWidth }) => {
  const [onPresent1] = useModal(<Disclaimer />, false);

  const { data: userData, userDataLoaded } = useUser();
  const { login } = useAuth();

  const agreement = () => {
    try {
      const valueFromLS = localStorage.getItem("agree");

      return valueFromLS ? JSON.parse(valueFromLS) : false;
    } catch (error) {
      return false;
    }
  };

  const isAgreed = () => {
    if (agreement) {
      return { href: "/metaverse" };
    }
    return { onclick: onPresent1 };
  };

  let buttonProps = {};

  if (userDataLoaded) {
    // Checks if user is logged in
    buttonProps = userData.metaverseAccess // boolean; checks if user is whitelisted
      ? isAgreed()
      : {
          // onClick: onPresent, // Opens form if not whitelisted and user agreed to disclaimer
          onClick: isAgreed(),
        };
  } else {
    buttonProps = {
      onClick: () => login(ConnectorNames.Injected), // login user
    };
  }

  return (
    <Flex width={maxWidth ? "100%" : "auto"}>
      <Link
        to={
          "/metaverse"
          // userDataLoaded && userData.metaverseAccess ? "/metaverse" : ""
        }
        style={{ width: "100%" }}
      >
        <Button
          scale="md"
          as="a"
          variant="secondary"
          ml={maxWidth ? "0px" : "8px"}
          mr={maxWidth ? "0px" : "16px"}
          mb={maxWidth ? "24px" : "0px"}
          width={maxWidth ? "100%" : "auto"}
          {...buttonProps}
        >
          Enter Metaverse
        </Button>
      </Link>
    </Flex>
  );
};

export default GlobalMenu;
