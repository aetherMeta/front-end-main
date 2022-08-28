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
import { useDispatchUserPublicData, useUser } from "../../../store/user/hooks";

export interface UserMenuProps {
  maxWidth?: boolean;
}

const UserMenu: React.FunctionComponent<UserMenuProps> = ({ maxWidth }) => {
  const { account } = useWeb3React();
  useDispatchUserPublicData();

  const {
    data: { address },
  } = useUser();
  const { logout } = useAuth();
  if (!account || !address) {
    return <ConnectWalletButton maxWidth={maxWidth} />;
  }

  return (
    <UIKitUserMenu account={account}>
      <UserMenuItem as="button" onClick={() => logout()}>
        <Flex alignItems="center" justifyContent="space-between" width="100%">
          Disconnect
          <LogoutIcon />
        </Flex>
      </UserMenuItem>
    </UIKitUserMenu>
  );
};

export default UserMenu;
