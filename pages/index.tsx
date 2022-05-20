import React from "react";

import { useMatchBreakpoints } from "@aethermeta/uikit";
import Page from "../components/Layout/Page";
import ViewNFTs from "../components/Home/ViewNFTs";
import LearnMore from "../components/Home/LearnMore";
import AboutAether from "../components/Home/AboutAether";
import AboutAetherTablet from "../components/Home/AboutAetherTablet";


const App: React.FC = () => {
  
  const { isTablet, isMobile } = useMatchBreakpoints()



  // let mobile = React.useRef(false)
  // let tablet = React.useRef(false)

  // // if (typeof window !== "undefined") {
  //   const { isTablet, isMobile } = useMatchBreakpoints()
  //   mobile.current = isMobile
  //   tablet.current = isTablet
  // // }

  // const [_document, setDocument] = React.useState(null)

  // React.useEffect(() => {
  //     const { isTablet, isMobile } = useMatchBreakpoints()
  //     mobile.current = isMobile
  //     tablet.current = isTablet
  //     // setDocument(document)
  // }, [])
  return (
    // <Home/>
    <Page>
      <ViewNFTs />
      <LearnMore />
      {isTablet || isMobile ? <AboutAetherTablet /> : <AboutAether />}
    </Page>
  );
};

export default React.memo(App);
