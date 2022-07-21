/* eslint-disable no-console */
import React, { useEffect, useRef } from "react";
import {
  useDispatchUserPublicData,
  useUpdateMetaverseUsage,
  useUser,
} from "store/user/hooks";
import styled from "styled-components";
import { Player } from "furioos-sdk";
import useRefresh from "hooks/useRefresh";
import { useMatchBreakpoints, Text } from "@aethermeta/uikit";
import NotFound from "../NotFound";

const Notice = styled.div`
  padding-top: 40px;
  text-align: center;
`;

const options = {
  whiteLabel: true,
  hideToolbar: false,
  hideTitle: true,
  hidePlayButton: false,
  inactiveTimeout: 60000,
};

const Furioos = styled.div`
  width: 100%;
  height: calc(100vh - 117px);
`;

const Metaverse: React.FC = () => {
  useDispatchUserPublicData();
  const { slowRefresh } = useRefresh();
  const { isTablet, isMobile } = useMatchBreakpoints();
  const {
    data: { metaverseAccess, metaverseAllowanceExceeded },
  } = useUser();
  const updateMetaverseUsage = useUpdateMetaverseUsage();
  const currTime = useRef(slowRefresh);

  useEffect(() => {
    // CALL BACKEND
    // backend.call increase time = (SLOW_INTERVAL * currTime.current- slowRefresh)
    console.log("refresh");
    currTime.current = slowRefresh;
    updateMetaverseUsage();
  }, [slowRefresh, updateMetaverseUsage]);

  useEffect(() => {
    // TODO: Move to helper
    const FURIOOS_CODES = {
      desktop: {
        production: "wjHKfxLBktqfMdSSB",
        local: "oqri3pd4qxo5YfAo7",
      },
      mobile: {
        production: "3JBwc4sAitNv8FitA",
        local: "rnX5xCAHHESGHMNNL",
      },
    };

    const furioosCode =
      FURIOOS_CODES[isTablet || isMobile ? "mobile" : "desktop"][
        process.env.NODE_ENV === "production" ? "production" : "local"
      ];

    if (metaverseAccess && !metaverseAllowanceExceeded) {
      // eslint-disable-next-line no-new
      new Player(furioosCode, "furioos-window", options);
    }
  }, [isMobile, isTablet, metaverseAccess, metaverseAllowanceExceeded]);

  return (
    <>
      {!metaverseAccess && <NotFound />}
      {metaverseAccess && metaverseAllowanceExceeded && (
        <Notice>
          {" "}
          <Text>
            Your Metaverse usage has been exceeded for today. Please come back
            tomorrow or reach out for more allowance!
          </Text>
        </Notice>
      )}

      <Furioos
        style={!metaverseAccess ? { height: 0 } : {}}
        id="furioos-window"
      />
    </>
  );
};

export default Metaverse;
