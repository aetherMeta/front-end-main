import React from "react";
import { Button } from "@aether/uikit";
import useAuth from "hooks/useAuth";
import { ConnectorNames } from "utils/web3React";

const ConnectWalletButton = () => {
  const { login } = useAuth();

  return (
    <Button onClick={() => login(ConnectorNames.Injected)}>
      Connect Wallet
    </Button>
  );
};

export default ConnectWalletButton;
