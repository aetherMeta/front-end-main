/* eslint-disable no-console */
import React from "react";
import Page from "components/Layout/Page";
import { Button, Flex, Label } from "@aethermeta/uikit";
import { useDispatchUserPublicData, useUser } from "store/user/hooks";
import useAccessToken from "../../hooks/useAccessToken";
import ConnectWalletButton from "../../components/ConnectWalletButton";
import useAuth from "../../hooks/useAuth";
import { useNfts } from "../../store/nfts/hooks";
import { useSales } from "../../store/sales/hooks";

const Debug: React.FC = () => {
  const { accessToken } = useAccessToken();
  const { logout } = useAuth();
  const { data: nftData } = useNfts();
  const { data: userData } = useUser();
  const { data: salesData } = useSales();

  useDispatchUserPublicData();
  return (
    <Page>
      <Flex>
        <Label>Login</Label>
        <ConnectWalletButton />
        {/* <Button onClick={openSignaturePrompt} /> */}
        <Button onClick={() => console.log(accessToken)}>
          Log access Token
        </Button>
        <Button onClick={() => console.log(userData)}>Log User Data</Button>
        <Button onClick={logout}>Log out</Button>
      </Flex>
      <Flex>
        <Label>Nfts</Label>
        <Button onClick={() => console.log(nftData)}>Log Nfts Data</Button>
      </Flex>
      <Flex>
        <Label>Sales</Label>
        <Button onClick={() => console.log(salesData)}>Log Sales Data</Button>
      </Flex>
    </Page>
  );
};

export default Debug;
