import React from "react";
import { Menu as UikitMenu } from "@aethermeta/uikit";
import config from "./config";
import UserMenu from "./UserMenu";
import GlobalSettings from "./GlobalMenu";
import Overlay from "./Overlay";

const Menu = (props) => {
  // const [_document, setDocument] = React.useState(null)

  // React.useEffect(() => {
  //     setDocument(document)
  // }, [])
  return (
    <UikitMenu
      userMenu={<UserMenu />}
      globalMenu={<GlobalSettings />}
      links={config}
      headerLinks={config}
      overlayPanel={<Overlay />}
      {...props}
    />
  );
};

export default Menu;
