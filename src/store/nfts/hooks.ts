import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NftState, State } from "store/types";
import { useAppDispatch } from "store";
import useRefresh from "hooks/useRefresh";
import { dispatchNftPublicDataAsync } from "store/nfts";
import { useUser } from "../user/hooks";

export const useDispatchNftPublicData = () => {
  const dispatch = useAppDispatch();
  const { slowRefresh } = useRefresh();

  const user = useUser();
  useEffect(() => {
    const dispatchNftPublicData = async () => {
      dispatch(dispatchNftPublicDataAsync(user.data.address));
    };
    dispatchNftPublicData();
  }, [dispatch, slowRefresh, user.data.address]);
};

export const useNfts = (): NftState => {
  const nfts = useSelector((state: State) => state.nfts);
  return nfts;
};
