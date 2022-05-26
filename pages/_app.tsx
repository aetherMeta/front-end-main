import type { AppProps } from 'next/app'
import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { light, ResetCSS } from "@aethermeta/uikit";
import { ThemeProvider } from "styled-components";
import { ToastsProvider } from "../contexts/ToastsContext";
import { getLibrary } from "../utils/web3React";
import GlobalStyle from '../style/Global';
import Menu from '../components/Menu';

const ThemeProviderWrapper = (props) => {
    return <ThemeProvider theme={light} {...props} />;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ToastsProvider>
        <ThemeProviderWrapper>
            <ResetCSS/>
            <GlobalStyle/>
            <Menu>
              <Component {...pageProps} />

            </Menu>
       </ThemeProviderWrapper>
      </ToastsProvider>
    </Web3ReactProvider>
  );
  
  
}

export default MyApp