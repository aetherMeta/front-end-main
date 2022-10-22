import React from "react";
import { Button, Flex, Link, Modal, useModal } from "@aethermeta/uikit";
import useAuth from "hooks/useAuth";
import { ConnectorNames } from "utils/web3React";

export interface ConnectWalletButtonProps {
  maxWidth?: boolean;
}

const ConnectWalletButton: React.FunctionComponent<
  ConnectWalletButtonProps
> = ({ maxWidth }) => {
  const { login } = useAuth();
  //
  const [onPresent] = useModal(
    <Modal title="No Wallet Detected">
      <Flex flexDirection="column" alignItems="center">
        <Link href="https://metamask.io/download" external>
          <Button>Install Metmask</Button>
        </Link>
      </Flex>
    </Modal>
  );

  return (
    <Button
      onClick={async () => {
        await login(ConnectorNames.Injected);
        if (!(window as any).ethereum) {
          onPresent();
        }
      }}
      width={maxWidth ? "100%" : "auto"}
    >
      Connect Wallet
    </Button>
  );
};

export default ConnectWalletButton;
