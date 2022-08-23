import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { Provider } from "react-redux";
import { light, ModalProvider, PanelProvider } from "@aethermeta/uikit";
import { ThemeProvider } from "styled-components";
import store from "store";
import { RefreshContextProvider } from "contexts/RefreshContext";
import { ToastsProvider } from "contexts/ToastsContext";
import { getLibrary } from "utils/web3React";
import { AccessTokenProvider } from "./contexts/AccessTokenContext";
import MetamaskProvider from "./MetamaskProvider";

const ThemeProviderWrapper = (props) => {
  return <ThemeProvider theme={light} {...props} />;
};

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <ToastsProvider>
          <ThemeProviderWrapper>
            <RefreshContextProvider>
              <AccessTokenProvider>
                <ModalProvider>
                  <PanelProvider>
                    <MetamaskProvider>{children}</MetamaskProvider>
                  </PanelProvider>
                </ModalProvider>
              </AccessTokenProvider>
            </RefreshContextProvider>
          </ThemeProviderWrapper>
        </ToastsProvider>
      </Provider>
    </Web3ReactProvider>
  );
};

export default Providers;
