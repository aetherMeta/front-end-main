import React from "react";
import styled from "styled-components";
import useAuth from "hooks/useAuth";
import { ConnectorNames } from "utils/web3React";

const StyledButton = styled.button`
  border-radius: 24px;
  width: 50px;
`;

const ConnectWalletButton = () => {
  const { login, logout } = useAuth();

  return (
    <StyledButton onClick={() => login(ConnectorNames.Injected)}>
      {"Connect Wallet"}
    </StyledButton>
  );
};

export default ConnectWalletButton;
