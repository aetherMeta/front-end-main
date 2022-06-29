import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { Provider } from "react-redux";
import { light, ModalProvider } from "@aethermeta/uikit";
import { ThemeProvider } from "styled-components";
import store from "store";
import { RefreshContextProvider } from "contexts/RefreshContext";
import { ToastsProvider } from "contexts/ToastsContext";
import { getLibrary } from "utils/web3React";

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
              <ModalProvider>{children}</ModalProvider>
            </RefreshContextProvider>
          </ThemeProviderWrapper>
        </ToastsProvider>
      </Provider>
    </Web3ReactProvider>
  );
};

export default Providers;
