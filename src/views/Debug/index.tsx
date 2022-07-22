/* eslint-disable no-console */
import React, { useState } from "react";
import Page from "components/Layout/Page";
import { Button, Flex, Input, Label, Text } from "@aethermeta/uikit";
import {
  useDispatchUserPublicData,
  useUpdateUser,
  useUser,
} from "store/user/hooks";
import { omitBy } from "lodash";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import useAccessToken from "../../hooks/useAccessToken";
import ConnectWalletButton from "../../components/ConnectWalletButton";
import useAuth from "../../hooks/useAuth";
import { useDispatchNftPublicData, useNfts } from "../../store/nfts/hooks";
import { useDispatchSalePublicData, useSales } from "../../store/sales/hooks";
import { ASK_TYPES, generatePrimarySale } from "../../store/sales/helpers";
import usePrimaryBuy from "./hooks/usePrimaryBuy";

const Debug: React.FC = () => {
  const { account, library } = useWeb3React();
  const { accessToken } = useAccessToken();
  const { logout } = useAuth();
  const { data: nftData } = useNfts();
  const { data: userData } = useUser();

  useDispatchUserPublicData();
  useDispatchSalePublicData();
  useDispatchNftPublicData();

  const { data: salesData, createPrimarySale } = useSales();
  const updateUser = useUpdateUser();

  const { onBuy } = usePrimaryBuy();

  const initialUserFormValues = {
    username: "",
    firstName: "",
    lastName: "",
    pendingEmail: "",
  };

  const initiaPrimarySaleFormValues = {
    askType: ASK_TYPES.PRIMARY_SALE,
    r: "",
    s: "",
    currency: ethers.constants.AddressZero,
    amount: "10",
    price: "1000000000",
    nonce: Math.floor(Math.random() * 100000).toString(),
    v: 0,
    royaltyRecipient: "0xB57773cbBC058439De4a9075447233C364B5680B", // Dev testnet operator
    royaltyValue: 100,
    uri: "ipfs://QmZAu7ssGxMjD5u7D2KYpFp75PRweBQAjZqfxYc7xQeRzD/2.json",
    tokenV: 0,
    tokenR: "",
    tokenS: "",
    expiresAt: "",
    chainId: 4,
  };

  const [userValues, setUserValues] = useState(initialUserFormValues);
  const [primarySale, setPrimarySaleValues] = useState(
    initiaPrimarySaleFormValues
  );

  const [saleInput, setSaleInput] = useState(Array(100).fill(1));

  const setSaleAmount = (i, val) => {
    const next = [...saleInput];
    next[i] = val;
    setSaleInput(next);
  };

  const handleUserInputChange = (e) => {
    const { name, value } = e.target;

    setUserValues({
      ...userValues,
      [name]: value,
    });
  };

  const handlePrimarySaleInputChange = (e) => {
    const { name, value } = e.target;

    setPrimarySaleValues({
      ...primarySale,
      [name]: value,
    });
  };

  const submitSale = async () => {
    const sale = await generatePrimarySale(
      await library.provider,
      account,
      primarySale
    );
    await createPrimarySale(sale);
  };

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
        <Label>User</Label>
        <Flex>
          <Input
            type="email"
            placeholder="New Email"
            name="pendingEmail"
            onChange={handleUserInputChange}
          />
          <Input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleUserInputChange}
          />
          <Input
            type="text"
            placeholder="FirstName"
            name="firstName"
            onChange={handleUserInputChange}
          />
          <Input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleUserInputChange}
          />
        </Flex>
        <Button
          onClick={() =>
            updateUser(
              omitBy(userValues, (v) => {
                console.log(v.length);
                return v.length === 0;
              })
            )
          }
        >
          Update User Data
        </Button>

        <Button onClick={() => console.log(userData)}>Log User Data</Button>
      </Flex>
      <Flex>
        <Label>Nfts</Label>
        <Button onClick={() => console.log(nftData)}>Log Nfts Data</Button>
      </Flex>
      <Flex>
        <Label>Sales</Label>
        <Button onClick={() => console.log(salesData)}>Log Sales Data</Button>

        <Flex>
          <Input
            type="text"
            placeholder="Uri"
            name="uri"
            value={primarySale.uri}
            onChange={handlePrimarySaleInputChange}
          />
          <Input
            type="text"
            placeholder="currency"
            name="currency"
            value={primarySale.currency}
            onChange={handlePrimarySaleInputChange}
          />{" "}
          <Input
            type="text"
            placeholder="amount"
            name="amount"
            value={primarySale.amount}
            onChange={handlePrimarySaleInputChange}
          />{" "}
          <Input
            type="text"
            placeholder="price"
            name="price"
            value={primarySale.price}
            onChange={handlePrimarySaleInputChange}
          />
          <Input
            type="date"
            placeholder="expiresAt"
            name="expiresAt"
            value={primarySale.expiresAt}
            onChange={handlePrimarySaleInputChange}
          />
        </Flex>

        <Button onClick={submitSale}>Create Sale</Button>
      </Flex>

      <Flex flexDirection="column">
        {salesData?.map((sale, i) => (
          <>
            <Text>SALE ENTRY: {i}</Text>

            {Object.entries(sale).map(([k, v]) => (
              <Text>
                {k.toString()}: {JSON.stringify(v)}
              </Text>
            ))}
            <Input
              type="text"
              onChange={(e) => setSaleAmount(i, e.target.value)}
              value={saleInput[i]}
            />
            <Button onClick={() => onBuy(sale, saleInput[i])}>
              BUY SALE {i}
            </Button>
          </>
        ))}
      </Flex>
    </Page>
  );
};

export default Debug;
