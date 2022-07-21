import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { State, UserState } from "store/types";
import { useAppDispatch } from "store";
import useRefresh from "hooks/useRefresh";
import { dispatchUserPublicDataAsync, setUserPublicData } from "store/user";
import useAccessToken from "../../hooks/useAccessToken";
import client from "../../apis/backend/client";
import backend from "../../apis/backend";
import { PatchUserRequestDto } from "../../apis/backend/generated";

export const useDispatchUserPublicData = () => {
  const dispatch = useAppDispatch();
  const { slowRefresh } = useRefresh();
  const { accessToken } = useAccessToken();
  useEffect(() => {
    const dispatchUserPublicData = async () => {
      dispatch(dispatchUserPublicDataAsync());
    };
    dispatchUserPublicData();
  }, [dispatch, slowRefresh, accessToken]);
};

export const useUpdateUser = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    async (dto: PatchUserRequestDto) => {
      try {
        if (client.defaults.headers.common.Authorization) {
          const { data: userData } = await backend.user.userControllerPatch(
            dto
          );
          dispatch(setUserPublicData(userData));
        }
      } catch (e) {
        console.error(e);
      }
    },
    [dispatch]
  );
};

export const useUpdateMetaverseUsage = () => {
  const dispatch = useAppDispatch();
  return useCallback(async () => {
    try {
      if (client.defaults.headers.common.Authorization) {
        const { data: userData } =
          await backend.user.userControllerMetaverseUpdate();
        dispatch(setUserPublicData(userData));
      }
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);
};

export const useUser = (): UserState => {
  const user = useSelector((state: State) => state.user);
  return user;
};
