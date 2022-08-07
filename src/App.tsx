import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ResetCSS } from "@aethermeta/uikit";
// import ResetCSS from "./utils/ResetCSS";
import { ToastListener } from "./contexts/ToastsContext";
import NotFound from "./views/NotFound";
import About from "./views/About";
import Soon from "./views/Soon";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Partnerships from "./views/Partnerships";
import { PrivacyPolicy, SellerPolicy, TermsOfUse } from "./views/Policies";
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
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/soon" exact>
            <Soon />
          </Route>
          <Route path="/partnerships" exact>
            <Partnerships />
          </Route>
          <Route path="/privacy" exact>
            <PrivacyPolicy />
          </Route>
          <Route path="/seller" exact>
            <SellerPolicy />
          </Route>
          <Route path="/termsofuse" exact>
            <TermsOfUse />
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
