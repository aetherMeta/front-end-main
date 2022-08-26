import { backend } from "apis/backend";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SaleState, State, Sale } from "store/types";
import { useAppDispatch } from "store";
import {
  dispatchPrimarySalePublicDataAsync,
  setPrimarySalesPublicData,
  setSaleFilters,
  setSaleSort,
  setSalePage,
} from "store/sales";
import {
  CreatePrimarySaleDto,
  CreateSecondarySaleDto,
  PrimarySaleResponse,
  SecondarySaleResponse,
} from "../../apis/backend/generated";

type Returns = {
  saleState: SaleState;
  saleData: Sale;
  data: Record<number, Sale[]>;
  pageSize: number;
  currentPage: number;
  total: number;
  isLoading: boolean;
  isLoaded: boolean;
  createPrimarySale: (
    dto: CreatePrimarySaleDto
  ) => Promise<PrimarySaleResponse>;
  createSecondarySale: (
    dto: CreateSecondarySaleDto
  ) => Promise<SecondarySaleResponse>;
};

export const useDispatchSalePublicData = () => {
  const dispatch = useAppDispatch();
  const sales = useSelector((state: State) => state.sales);
  useEffect(() => {
    const dispatchSalePublicData = async () => {
      dispatch(dispatchPrimarySalePublicDataAsync(sales.currentPage));
    };
    dispatchSalePublicData();
  }, [dispatch, sales.currentPage]);

  useEffect(() => {
    const dispatchFilterChange = async () => {
      dispatch(setPrimarySalesPublicData({}));
      dispatch(dispatchPrimarySalePublicDataAsync(1));
    };
    dispatchFilterChange();
  }, [dispatch, sales.filters, sales.sortOrder, sales.sortField]);
};

export const useUpdateSalePage = () => {
  const dispatch = useAppDispatch();
  const updateSalePage = useCallback(
    async (page: number) => {
      dispatch(setSalePage(page));
      dispatch(dispatchPrimarySalePublicDataAsync(page));
    },
    [dispatch]
  );
  return { updateSalePage };
};

export const useUpdateSalesFilter = () => {
  const dispatch = useAppDispatch();
  const updateFilter = useCallback(
    async (filters) => {
      dispatch(setSaleFilters(filters));
    },
    [dispatch]
  );
  return { handleFilter: updateFilter };
};

export const useUpdateSalesSort = () => {
  const dispatch = useAppDispatch();
  const updateSort = useCallback(
    async (sortField: string, sortOrder: string) => {
      dispatch(setSaleSort({ sortField, sortOrder }));
    },
    [dispatch]
  );
  return { handleSort: updateSort };
};

const createPrimarySale = async (dto: CreatePrimarySaleDto) => {
  return backend.sales.primarySaleControllerCreate({
    formData: dto,
  });
};

const createSecondarySale = async (dto: CreateSecondarySaleDto) => {
  return backend.sales.secondarySaleControllerCreate({
    requestBody: dto,
  });
};

export const useSales = (): Returns => {
  const sales = useSelector((state: State) => state.sales);
  const salesData = sales.data;
  const params: { productHash } = useParams();
  const saleData = Object.values(salesData)
    .flat()
    .filter((sale) => sale.id === params.productHash)[0];
  return {
    saleState: Object.assign([], sales),
    saleData,
    data: Object.assign([], sales.data),
    pageSize: sales.pageSize,
    currentPage: sales.currentPage,
    total: sales.total,
    isLoading: sales.isLoading,
    isLoaded: sales.isLoaded,
    createPrimarySale,
    createSecondarySale,
  };
};
