import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { ThemeProvider } from "styled-components";
import { ToastsProvider } from "contexts/ToastsContext";
import { getLibrary } from "utils/web3React";

const ThemeProviderWrapper = (props: any) => {
  return <ThemeProvider theme={props} />;
};

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ToastsProvider>{children}</ToastsProvider>
    </Web3ReactProvider>
  );
};

export default Providers;
