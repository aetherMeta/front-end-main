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
import useIpfsUpload from "views/Debug/hooks/useIpfs";
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
  const { onSubmit: submitIpfs } = useIpfsUpload();

  useDispatchUserPublicData();
  useDispatchSalePublicData();
  useDispatchNftPublicData();

  const { saleState, createPrimarySale } = useSales();
  const updateUser = useUpdateUser();

  const { onBuy } = usePrimaryBuy();

  const initialUserFormValues = {
    username: "",
    firstName: "",
    lastName: "",
    pendingEmail: "",
  };

  const initialPrimarySaleFormValues = {
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
    uri: "ipfs://QmXZ9nV13j4CxZisv6vQPTLUEKRhBAoMwZ8b3qieCLzECn",
    tokenV: 0,
    tokenR: "",
    tokenS: "",
    expiresAt: "",
    chainId: 4,
  };

  const [userValues, setUserValues] = useState(initialUserFormValues);
  const [primarySale, setPrimarySaleValues] = useState(
    initialPrimarySaleFormValues
  );

  const [ipfsValues, setIpfsValues] = useState({
    name: "",
    description: "",
    _attributes: "",
    attributes: null,
    file: {},
  });

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

  const handleIpfsInputChange = (e) => {
    const old = { ...ipfsValues };

    const { name, value } = e.target;
    if (name === "_attributes") {
      try {
        const _value = JSON.parse(value);
        old.attributes = _value.map((v) => JSON.stringify(v));
      } catch (err) {
        // Do nothing
      }
    }
    setIpfsValues({
      ...old,
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
        <Button onClick={() => console.log(saleState.data)}>
          Log Sales Data
        </Button>

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
      <Flex>
        <Label>Upload IPFS</Label>
        <Input
          type="text"
          placeholder="name"
          name="name"
          value={ipfsValues.name}
          onChange={handleIpfsInputChange}
        />
        <Input
          type="text"
          placeholder="description"
          name="description"
          value={ipfsValues.description}
          onChange={handleIpfsInputChange}
        />
        <Input
          type="file"
          placeholder="file"
          name="file"
          // value={ipfsValues.file}
          onChange={handleIpfsInputChange}
        />

        <Input
          type="textarea"
          placeholder="attributes"
          name="_attributes"
          value={ipfsValues._attributes}
          onChange={handleIpfsInputChange}
        />

        <Button
          onClick={() => {
            submitIpfs(ipfsValues);
          }}
        >
          Upload ipfs
        </Button>
      </Flex>

      <Flex flexDirection="column">
        {Object.keys(saleState.data).map((saleKey, i) => (
          <>
            <Text>SALE ENTRY: {i}</Text>

            {Object.entries(saleState[saleKey]).map(([k, v]) => (
              <Text>
                {k.toString()}: {JSON.stringify(v)}
              </Text>
            ))}
            <Input
              type="text"
              onChange={(e) => setSaleAmount(i, e.target.value)}
              value={saleInput[i]}
            />
            <Button onClick={() => onBuy(saleState[saleKey], saleInput[i])}>
              BUY SALE {i}
            </Button>
          </>
        ))}
      </Flex>
    </Page>
  );
};

export default Debug;
