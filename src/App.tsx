import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ResetCSS } from "@aether/uikit";
// import ResetCSS from "./utils/ResetCSS";
import { ToastListener } from "./contexts/ToastsContext";
import NotFound from "./views/NotFound";
import About from "./views/About";
import Soon from "./views/Soon";
import Home from "./views/Home";
import Menu from "./components/Menu";
import GlobalStyle from "./style/Global";
import history from "./routerHistory";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router history={history}>
      <GlobalStyle />
      <ResetCSS />
      <Menu>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/soon">
            <Soon />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Menu>
      <ToastListener />
    </Router>
  );
};

export default React.memo(App);
