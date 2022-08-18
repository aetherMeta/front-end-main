import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { useCallback, useContext, useEffect, useState } from "react";
import { backend, client } from "apis/backend";
import setAccessTokenCookie from "../apis/backend/cookies/accessToken/setAccessToken";
import getAccessTokenCookie from "../apis/backend/cookies/accessToken/getAccessToken";
import destroyAccessToken from "../apis/backend/cookies/accessToken/destroyAccessToken";
import useToast from "./useToast";
import AccessTokenContext from "../contexts/AccessTokenContext";

type Returns = {
  loading: boolean;
  accessToken: string | null;
  accessTokenAddress: string | null;
  reload: () => void;
  requestSignature: (
    account?: string,
    provider?: ethers.providers.Web3Provider
  ) => Promise<boolean>;
  logout: () => Promise<void>;
};

const useAccessToken = (): Returns => {
  const { account, library } = useWeb3React<ethers.providers.Web3Provider>();

  const accessTokenContext = useContext(AccessTokenContext);

  const { toastError } = useToast();

  /**
   * Load access token
   */

  const loadAccessTokenFromCookie = async () => {
    const cookie = getAccessTokenCookie();
    if (!cookie) return;

    const { accessToken: accessTokenFromCookie, address } = cookie;
    accessTokenContext.setAccessToken(accessTokenFromCookie, address);

    // Set Authorization header
    client.TOKEN = accessTokenFromCookie;
  };

  const logout = async () => {
    client.TOKEN = undefined;
    destroyAccessToken();
  };

  // load access token from cookie on mount
  useEffect(() => {
    loadAccessTokenFromCookie();
  });

  /**
   * Prompt signature request
   *
   * returns true when authorized, false when failed to sign in
   */
  const requestSignature = useCallback(
    async (_account?: string, _library?: ethers.providers.Web3Provider) => {
      // reload nonce before creating new signature
      const activeAccount = _account || account;
      if (!activeAccount) {
        console.error("Account not is not connected yet");
        return false;
      }
      const { challenge } =
        await backend.authentication.authControllerChallenge({
          requestBody: { address: activeAccount },
        });

      const currentLibrary = library || _library;

      if (!currentLibrary) {
        // We cannot open signature prompt before initialization
        return false;
      }

      const signer = currentLibrary.getSigner();

      try {
        const signature = await signer.signMessage(challenge);

        const { jwt } = await backend.authentication.authControllerVerify({
          requestBody: {
            challenge,
            signature,
          },
        });

        // store token in cookie
        setAccessTokenCookie(jwt, activeAccount);

        // Set Authorization header
        client.TOKEN = jwt;

        // set token in state
        accessTokenContext.setAccessToken(jwt, activeAccount);

        return true;
      } catch (err: any) {
        // code 4001 is user denial, so don't send error report
        if (err.code === 4001) {
          toastError("Please sign verification message to login");
        } else {
          toastError("Unable to login");
        }

        return false;
      }
    },
    [accessTokenContext, account, library, toastError]
  );

  const [signing, setSigning] = useState(false);

  useEffect(() => {
    if (account && signing) {
      setSigning(true);
      requestSignature().then(() => setSigning(false));
    }
    // loadAccessTokenFromCookie();
  }, [account, requestSignature, signing]);

  return {
    loading:
      accessTokenContext.accessToken === undefined ||
      accessTokenContext.accessToken === null ||
      accessTokenContext.accessTokenAddress !== account,
    accessTokenAddress: accessTokenContext.accessTokenAddress,
    accessToken: accessTokenContext.accessToken || null,
    reload: loadAccessTokenFromCookie,
    requestSignature,
    logout,
  };
};

export default useAccessToken;
