import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
  VFC,
} from "react";
import { useWeb3React } from "@web3-react/core";

import client from "../apis/backend/client";
import getAccessToken from "../apis/backend/cookies/accessToken/getAccessToken";
import getAccessTokenPayload from "../apis/backend/cookies/accessToken/getAccessTokenPayload";
import destroyAccessToken from "../apis/backend/cookies/accessToken/destroyAccessToken";

const contextDefaultValue = {
  accessToken: undefined,
  accessTokenAddress: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAccessToken: () => {},
};

const AccessTokenContext = createContext<{
  accessToken: undefined | string | null;
  accessTokenAddress: undefined | string | null;
  setAccessToken: (accessToken: string | null, address: string | null) => void;
}>(contextDefaultValue);

/**
 * AccessTokenProvider
 */

type ProviderProps = {
  children: ReactNode;
};

export const AccessTokenProvider: VFC<ProviderProps> = ({
  children,
}: ProviderProps) => {
  const [accessToken, setAccessTokenState] = useState(undefined);
  const [accessTokenAddress, setAccessTokenAddress] = useState(undefined);

  const { account } = useWeb3React();

  // clear access token cookie on account switch
  useEffect(() => {
    const accessTokenPayload = getAccessTokenPayload();
    if (
      account &&
      accessTokenPayload?.userId &&
      account.toLowerCase() !== accessTokenPayload.userId.toLowerCase()
    ) {
      // public address has changed -> clear cookie
      destroyAccessToken();
    }
  }, [account]);

  // set auth header on every access token update
  useEffect(() => {
    client.defaults.headers.common.Authorization = accessToken
      ? `Bearer ${accessToken}`
      : undefined;
  }, [accessToken]);

  const setAccessToken = (_accessToken, _address) => {
    setAccessTokenState(_accessToken);
    setAccessTokenAddress(_address);
  };

  // Check if current token has expired

  // Run expiry checker every second
  useEffect(() => {
    const checkAccessTokenExpiry = () => {
      const latestAccessToken = getAccessToken();
      if (accessToken && !latestAccessToken) {
        setAccessToken(latestAccessToken, null);
      }
    };

    const intervalID = setInterval(() => {
      checkAccessTokenExpiry();
    }, 1000);
    return () => clearInterval(intervalID);
  }, [accessToken]);

  return (
    <AccessTokenContext.Provider
      value={{ accessToken, accessTokenAddress, setAccessToken }}
    >
      {children}
    </AccessTokenContext.Provider>
  );
};

export default AccessTokenContext;
