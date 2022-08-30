/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from "react";
import {
  useDispatchUserPublicData,
  useUpdateMetaverseUsage,
  useUser,
} from "store/user/hooks";
import styled from "styled-components";
import { Player, FS_SDK_EVENTS_NAME } from "furioos-sdk";
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
import usePrimaryBuy from "hooks/usePrimaryBuy";
import { useSales } from "store/sales/hooks";
import useToast from "hooks/useToast";
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
  const [tokenId, setTokenId] = useState("");
  const [amount, setAmount] = useState(0);
  const [buy, setBuy] = useState(false);

  const { onBuy } = usePrimaryBuy();
  const { saleState, saleData, isLoading, isLoaded } = useSales();
  const { toastError, toastSuccess } = useToast();

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

  useEffect(() => {
    if (buy) {
      const handleBuy = async () => {
        const salesData = saleState.data[1];
        let index;
        for (let i = 0; i < salesData.length; i++) {
          if (salesData[i].id === tokenId) {
            index = i;
          }
        }
        const purchase = onBuy(salesData[index], amount);
        const receipt: any = await purchase;
      };
      handleBuy();
    }
  }, [amount, onBuy, saleState.data, tokenId, buy]);

  useEffect(() => {
    // eslint-disable-next-line no-new
    if (
      !furioosEnabled &&
      ((metaverseWhitelistAccess && !metaverseAllowanceExceeded) ||
        passCode === "5832")
    ) {
      // eslint-disable-next-line no-new
      // TODO: Add prod sdk link to furioosCode
      // const player = new Player(furioosCode, "furioos-window", options);
      const player = new Player("6fDCNzAcGzLRaTYgu", "furioos-window", options);

      player.on(FS_SDK_EVENTS_NAME.ON_SDK_MESSAGE, async function (data) {
        setTokenId(data.tokenId);
        setAmount(data.amount);
        setBuy(true);
      });
    }
  });

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
