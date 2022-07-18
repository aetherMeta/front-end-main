/* eslint-disable no-console */
import { useMatchBreakpoints } from "@aethermeta/uikit";
import React from "react";
import { useDispatchUserPublicData, useUser } from "store/user/hooks";
import styled from "styled-components";
import NotFound from "../NotFound";

const Iframe = styled("iframe")`
  width: 100%;
  height: 100%;
`;

const Metaverse: React.FC = () => {
  useDispatchUserPublicData();

  const { data: userData } = useUser();
  const { isTablet, isMobile } = useMatchBreakpoints();
  const src =
    isTablet || isMobile
      ? "https://portal.furioos.com/embed/CSkanHieeeuv8Lkyh?whiteLabel=true&amp;hideTitle=true&amp;hidePlayButton=true"
      : "https://portal.furioos.com/embed/x7XjGbcyETC4caudo?whiteLabel=true&amp;hideTitle=true&amp;hidePlayButton=true";

  if (userData.metaverseAccess) {
    return (
      <Iframe
        title="metaverse"
        src={src}
        id="furioos-sdk-iframe"
        allow="autoplay; fullscreen"
      />
    );
  }

  return <NotFound />;
};

export default Metaverse;
