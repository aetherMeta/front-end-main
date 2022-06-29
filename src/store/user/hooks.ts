import { useEffect } from "react";
import { useSelector } from "react-redux";
import { State, UserState } from "store/types";
import { useAppDispatch } from "store";
import useRefresh from "hooks/useRefresh";
import { dispatchUserPublicDataAsync } from "store/user";

export const useDispatchUserPublicData = () => {
  const dispatch = useAppDispatch();
  const { slowRefresh } = useRefresh();
  useEffect(() => {
    const dispatchUserPublicData = async () => {
      dispatch(dispatchUserPublicDataAsync());
    };
    dispatchUserPublicData();
  }, [dispatch, slowRefresh]);
};

export const useUser = (): UserState => {
  const user = useSelector((state: State) => state.user);
  return user;
};
