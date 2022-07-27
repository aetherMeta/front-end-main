import React, { useEffect, useState } from "react";
import Disclaimer from "components/DisclaimerModel";
import { Button, Flex, useModal, useMatchBreakpoints } from "@aethermeta/uikit";
import { ConnectorNames } from "utils/web3React";
import usePersistentState from "hooks/usePersistentState";
import PartnershipModal, { Values } from "components/PartnershipModal";
import postPartnershipEmail from "apis/backend/email/postPartnershipEmail";

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

  const [onPresent] = useModal(
    <PartnershipModal onSubmit={(e, values: Values) => onSubmit(e, values)} />
  );

  const onSubmit = async (e, values: Values) => {
    e.preventDefault();
    await postPartnershipEmail(values);
  };

  let buttonProps = {};

  if (userDataLoaded) {
    buttonProps = userData.metaverseAccess
      ? {
          href: "/metaverse",
        }
      : {
          onClick: onPresent,
        };
  } else {
    buttonProps = {
      onClick: () => login(ConnectorNames.Injected),
    };
  }

 
  const agreement = () => {
    try {
      const valueFromLS = localStorage.getItem('agree')

      return valueFromLS ? JSON.parse(valueFromLS) : false;
    } catch (error) {
      return false;
    }
  }

  const { isTablet, isMobile } = useMatchBreakpoints();

  return (
    <Flex width={maxWidth ? "100%" : "auto"}>
      {!agreement() && (
        <Button
        scale="md"
        variant="secondary"
        onClick={onPresent1}
        ml={maxWidth ? "0px" : "8px"}
        mr={maxWidth ? "0px" : "16px"}
        mb={maxWidth ? "24px" : "0px"}
        width={maxWidth ? "100%" : "auto"}
        
      > 
      Enter Metaverse
      </Button>
      )}

      {agreement() && (
        <Link to={userDataLoaded && userData.metaverseAccess && "/metaverse"}>
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
      )}
      
    </Flex>
  );
};

export default GlobalMenu;
