import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { light } from "@aethermeta/uikit";
import { ThemeProvider } from "styled-components";
import { ToastsProvider } from "contexts/ToastsContext";
import { getLibrary } from "utils/web3React";

const ThemeProviderWrapper = (props) => {
  return <ThemeProvider theme={light} {...props} />;
};

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ToastsProvider>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </ToastsProvider>
    </Web3ReactProvider>
  );
};

export default Providers;
