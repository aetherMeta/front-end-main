import React from "react";
import { Router, Redirect, Route, Switch } from "react-router-dom";
import { ResetCSS } from "@aether/uikit";
import ConnectWalletButton from "components/ConnectWalletButton";
import history from "./routerHistory";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router history={history}>
      <ResetCSS />
      <ConnectWalletButton />
    </Router>
  );
};

export default React.memo(App);
