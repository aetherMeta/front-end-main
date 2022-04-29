import React from "react";
import { Menu as UikitMenu } from "@aethermeta/uikit";
import config from "./config";
import UserMenu from "./UserMenu";
import GlobalSettings from "./GlobalMenu";

const Menu = (props) => {
  return (
    <UikitMenu
      userMenu={<UserMenu />}
      globalMenu={<GlobalSettings />}
      links={config}
      headerLinks={config}
      {...props}
    />
  );
};

export default Menu;
