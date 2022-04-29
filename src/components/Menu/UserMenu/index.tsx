import React from "react";
import { useWeb3React } from "@web3-react/core";
import {
  Flex,
  LogoutIcon,
  UserMenu as UIKitUserMenu,
  UserMenuItem,
} from "@aethermeta/uikit";
import useAuth from "hooks/useAuth";
import ConnectWalletButton from "components/ConnectWalletButton";

const UserMenu = () => {
  const { account } = useWeb3React();
  const { logout } = useAuth();

  if (!account) {
    return <ConnectWalletButton />;
  }

  return (
    <UIKitUserMenu account={account}>
      <UserMenuItem as="button" onClick={logout}>
        <Flex alignItems="center" justifyContent="space-between" width="100%">
          Disconnect
          <LogoutIcon />
        </Flex>
      </UserMenuItem>
    </UIKitUserMenu>
  );
};

export default UserMenu;
