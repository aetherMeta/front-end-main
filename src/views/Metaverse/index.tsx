/* eslint-disable no-console */
import React from "react";
import { useDispatchUserPublicData, useUser } from "store/user/hooks";
import styled from "styled-components";
import NotFound from "../NotFound";

const Iframe = styled("iframe")`
  width: 100%;
  height: 100%;
`;

const Metaverse: React.FC = () => {
  const { data: userData } = useUser();

  useDispatchUserPublicData();

  if (userData.metaverseAccess) {
    return (
      <>
        <Iframe
          title="metaverse"
          src="https://portal.furioos.com/embed/x7XjGbcyETC4caudo?whiteLabel=true&amp;hideTitle=true&amp;hidePlayButton=true"
          id="furioos-sdk-iframe"
          allow="autoplay; fullscreen"
        />
      </>
    );
  }

  return <NotFound />;
};

export default Metaverse;
