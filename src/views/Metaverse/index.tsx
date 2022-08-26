/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from "react";
import {
  useDispatchUserPublicData,
  useUpdateMetaverseUsage,
  useUser,
} from "store/user/hooks";
import styled from "styled-components";
import { Player } from "furioos-sdk";
import useRefresh from "hooks/useRefresh";
import {
  useMatchBreakpoints,
  Text,
  Input,
  Button,
  useModal,
} from "@aethermeta/uikit";
import Page from "views/Page";
import PartnershipModal, { Values } from "components/PartnershipModal";
import postContactUsEmail from "apis/backend/email/postPartnershipEmail";
// import NotFound from "../NotFound";

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
    data: {
      metaverseAccess: metaverseWhitelistAccess,
      metaverseAllowanceExceeded,
    },
  } = useUser();
  const updateMetaverseUsage = useUpdateMetaverseUsage();
  const currTime = useRef(slowRefresh);
  const [passCode, setPassCode] = useState("");
  const [furioosEnabled, setFurioosEnabled] = useState(false);

  useEffect(() => {
    // CALL BACKEND
    // backend.call increase time = (SLOW_INTERVAL * currTime.current- slowRefresh)
    currTime.current = slowRefresh;
    updateMetaverseUsage();
  }, [slowRefresh, updateMetaverseUsage]);

  useEffect(() => {
    // TODO: Move to helper
    const FURIOOS_CODES = {
      desktop: {
        production: "6jXEjnac8EguCwxpC",
        local: "jKfnDb7MHnrTpL9Dj",
      },
      mobile: {
        production: "6jXEjnac8EguCwxpC",
        local: "jKfnDb7MHnrTpL9Dj",
      },
    };

    const furioosCode =
      FURIOOS_CODES[isTablet || isMobile ? "mobile" : "desktop"][
        process.env.NODE_ENV === "production" ? "production" : "local"
      ];

    if (
      !furioosEnabled &&
      ((metaverseWhitelistAccess && !metaverseAllowanceExceeded) ||
        passCode === "5832")
    ) {
      setFurioosEnabled(true);
      // eslint-disable-next-line no-new
      new Player(furioosCode, "furioos-window", options);
    }
  }, [
    isMobile,
    isTablet,
    furioosEnabled,
    setFurioosEnabled,
    metaverseWhitelistAccess,
    metaverseAllowanceExceeded,
    passCode,
  ]);

  const [onPresent] = useModal(
    <PartnershipModal
      onSubmit={(e, values: Values) => onSubmit(e, values)}
      fromMetaverse
    />
  );
  const onSubmit = async (e, values: Values) => {
    e.preventDefault();
    await postContactUsEmail(values);
  };
  const PassCode = (
    <Page>
      <Text maxWidth="600px" textAlign="center" mb="20px">
        Please enter your passcode or login to your whitelisted account to get
        access to the Metaverse.
      </Text>
      <Input
        type="text"
        placeholder="Enter your passcode"
        name="passCode"
        style={{ marginBottom: "20px", maxWidth: "400px" }}
        onChange={(e) => {
          setPassCode(e.target.value);
        }}
      />
      <Button scale="md" variant="primary" onClick={onPresent}>
        Click here to request access
      </Button>
    </Page>
  );

  return (
    <>
      {metaverseWhitelistAccess && metaverseAllowanceExceeded && (
        <Notice>
          {" "}
          <Text>
            Your Metaverse usage has been exceeded for today. Please come back
            tomorrow or reach out for more allowance!
          </Text>
        </Notice>
      )}

      {passCode === "5832" ||
      (metaverseWhitelistAccess && !metaverseAllowanceExceeded) ? (
        <Furioos id="furioos-window" />
      ) : (
        PassCode
      )}
    </>
  );
};

export default Metaverse;
