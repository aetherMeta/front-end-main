import { useCallback } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { connectorsByName, ConnectorNames, getLibrary } from "utils/web3React";
import { connectorLocalStorageKey } from "constants/wallet";
import useToast from "hooks/useToast";
import useAccessToken from "./useAccessToken";

const useAuth = () => {
  const { activate, deactivate } = useWeb3React();
  const {
    accessToken,
    accessTokenAddress,
    requestSignature,
    logout: accessTokenLogout,
  } = useAccessToken();

  const { toastError } = useToast();
  const login = useCallback(
    async (connectorID: ConnectorNames) => {
      const connector = connectorsByName[connectorID];
      if (typeof connector !== "function" || connector) {
        await activate(connector, async (error: Error) => {
          if (error instanceof UnsupportedChainIdError) {
            await activate(connector);
          } else {
            window.localStorage.removeItem(connectorLocalStorageKey);
            if (error instanceof NoEthereumProviderError) {
              toastError("Provider Error", "No provider was found");
            } else if (error instanceof UserRejectedRequestErrorInjected) {
              toastError(
                "Authorization Error",
                "Please authorize to access your account"
              );
            } else {
              toastError(error.name, error.message);
            }
          }
        });
        if (
          accessToken === undefined ||
          accessToken === null ||
          accessTokenAddress !== (await connector.getAccount())
        ) {
          await requestSignature(
            await connector.getAccount(),
            getLibrary(await connector.getProvider())
          );
        }
      } else {
        toastError("Unable to find connector", "The connector config is wrong");
      }
    },
    [accessToken, accessTokenAddress, activate, requestSignature, toastError]
  );

  const logout = useCallback(() => {
    deactivate();
    accessTokenLogout();
  }, [deactivate, accessTokenLogout]);

  return { login, logout };
};

export default useAuth;
