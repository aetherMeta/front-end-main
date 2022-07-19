import React from "react";
import { ConnectorNames } from "utils/web3React";
import { Button, Flex, useModal } from "@aethermeta/uikit";
import PartnershipModal, { Values } from "components/PartnershipModal";
import postPartnershipEmail from "apis/backend/email/postPartnershipEmail";

import { useUser } from "store/user/hooks";
import useAuth from "hooks/useAuth";

export interface GlobalMenuProps {
  maxWidth?: boolean;
}

const GlobalMenu: React.FunctionComponent<GlobalMenuProps> = ({ maxWidth }) => {
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

  return (
    <Flex width={maxWidth ? "100%" : "auto"}>
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
    </Flex>
  );
};

export default GlobalMenu;
