import React, { useState } from "react";
import { Menu as UikitMenu } from "@aethermeta/uikit";
import config from "./config";
import UserMenu from "./UserMenu";
import GlobalSettings from "./GlobalMenu";
import Overlay from "./Overlay";

const Menu = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <UikitMenu
      userMenu={<UserMenu />}
      globalMenu={<GlobalSettings />}
      links={config}
      headerLinks={config}
      overlayPanel={<Overlay setShowOverlay={setShowOverlay} />}
      showOverlay={showOverlay}
      setShowOverlay={setShowOverlay}
      {...props}
    />
  );
};

export default Menu;
