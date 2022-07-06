import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Sale, State } from "store/types";
import { useAppDispatch } from "store";
import useRefresh from "hooks/useRefresh";
import { dispatchSalePublicDataAsync } from "store/sales";
import { AxiosResponse } from "axios";
import backend from "../../apis/backend";
import {
  CreatePrimarySaleDto,
  GetPrimarySaleResponse,
} from "../../apis/backend/generated";

type Returns = {
  data: Sale[];
  createPrimarySale: (
    dto: CreatePrimarySaleDto
  ) => Promise<AxiosResponse<GetPrimarySaleResponse>>;
};

export const useDispatchSalePublicData = () => {
  const dispatch = useAppDispatch();
  const { slowRefresh } = useRefresh();

  useEffect(() => {
    const dispatchSalePublicData = async () => {
      dispatch(dispatchSalePublicDataAsync());
    };
    dispatchSalePublicData();
  }, [dispatch, slowRefresh]);
};

const createPrimarySale = async (dto: CreatePrimarySaleDto) => {
  return backend.sales.primarySaleControllerCreate(dto);
};

export const useSales = (): Returns => {
  const sales = useSelector((state: State) => state.sales);
  return { ...sales, createPrimarySale };
};
