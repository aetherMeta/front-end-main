import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SaleState, State, Sale } from "store/types";
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
  saleState: SaleState;
  saleData: Sale;
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
  const salesData = sales.data;
  const params: { productHash } = useParams();
  const saleData = salesData[params.productHash];
  return {
    saleState: Object.assign([], sales),
    saleData,
    createPrimarySale,
    createSecondarySale,
  };
};
