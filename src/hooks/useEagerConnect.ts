import { useEffect } from "react";
import { ConnectorNames } from "utils/web3React";
import useAuth from "hooks/useAuth";

const useEagerConnect = () => {
  const { login } = useAuth();
  useEffect(() => {
    const connectorId = "Injected" as ConnectorNames;
    login(connectorId);
  }, [login]);
};

export default useEagerConnect;
