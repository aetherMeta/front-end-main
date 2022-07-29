import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Sale, State } from "store/types";
import { useAppDispatch } from "store";
import useRefresh from "hooks/useRefresh";
import { dispatchSalePublicDataAsync } from "store/sales";
import { AxiosResponse } from "axios";
import { useWeb3React } from "@web3-react/core";
import backend from "../../apis/backend";
import {
  CreatePrimarySaleDto,
  CreateSecondarySaleDto,
  PrimarySaleResponse,
  SecondarySaleResponse,
} from "../../apis/backend/generated";

type Returns = {
  data: Sale[];
  createPrimarySale: (
    dto: CreatePrimarySaleDto
  ) => Promise<AxiosResponse<PrimarySaleResponse>>;
  createSecondarySale: (
    dto: CreateSecondarySaleDto
  ) => Promise<AxiosResponse<SecondarySaleResponse>>;
};

export const useDispatchSalePublicData = () => {
  const { active } = useWeb3React();
  const dispatch = useAppDispatch();
  const { slowRefresh } = useRefresh();

  useEffect(() => {
    const dispatchSalePublicData = async () => {
      dispatch(dispatchSalePublicDataAsync());
    };
    dispatchSalePublicData();
  }, [dispatch, slowRefresh, active]);
};

const createPrimarySale = async (dto: CreatePrimarySaleDto) => {
  return backend.sales.primarySaleControllerCreate(dto);
};

const createSecondarySale = async (dto: CreateSecondarySaleDto) => {
  return backend.sales.secondarySaleControllerCreate(dto);
};

export const useSales = (): Returns => {
  const sales = useSelector((state: State) => state.sales);
  return {
    data: Object.assign([], sales.data),
    createPrimarySale,
    createSecondarySale,
  };
};
