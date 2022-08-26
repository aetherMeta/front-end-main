import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ResetCSS } from "@aethermeta/uikit";
// import ResetCSS from "./utils/ResetCSS";
import { useDispatchSalePublicData } from "store/sales/hooks";
import useEagerConnect from "hooks/useEagerConnect";
import { ToastListener } from "./contexts/ToastsContext";
import NotFound from "./views/NotFound";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Partnerships from "./views/Partnerships";
import Product from "./views/Product";
import Collections from "./views/Collections";
import CollectionDetails from "./views/CollectionDetails";
import Shop from "./views/Shop";
import Menu from "./components/Menu";
import GlobalStyle from "./style/Global";
import history from "./routerHistory";
import "./App.css";
import Debug from "./views/Debug";
import Metaverse from "./views/Metaverse";

const App: React.FC = () => {
  // useEagerConnect();
  useDispatchSalePublicData();
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
          <Route path="/shop" exact>
            <Shop />
          </Route>
          <Route path="/partnerships" exact>
            <Partnerships />
          </Route>
          <Route path="/product/:productHash" exact>
            <Product />
          </Route>
          <Route path="/collections" exact>
            <Collections />
          </Route>
          <Route path="/collectionDetails" exact>
            <CollectionDetails />
          </Route>

          <Route path="/metaverse" exact>
            <Metaverse />
          </Route>
          {process.env.NODE_ENV !== "production" ? (
            <Route path="/debug" exact>
              <Debug />
            </Route>
          ) : (
            <></>
          )}
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
