import React from "react";
import { Button } from "@aethermeta/uikit";
import useAuth from "hooks/useAuth";
import { ConnectorNames } from "utils/web3React";

export interface ConnectWalletButtonProps {
  maxWidth?: boolean;
}

const ConnectWalletButton: React.FunctionComponent<
  ConnectWalletButtonProps
> = ({ maxWidth }) => {
  const { login } = useAuth();

  return (
    <Button
      onClick={() => login(ConnectorNames.Injected)}
      width={maxWidth ? "100%" : "auto"}
    >
      Connect Wallet
    </Button>
  );
};

export default ConnectWalletButton;
