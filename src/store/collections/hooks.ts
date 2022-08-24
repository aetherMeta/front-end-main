import { backend } from "apis/backend";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CollectionState, State, Collection } from "store/types";
import { useAppDispatch } from "store";
import {
  dispatchCollectionPublicDataAsync,
  setCollectionFilters,
  setCollectionPage,
  resetCollectionData,
  setCollectionSort,
} from "store/collections";
import {
  CollectionResponse,
  CreateCollectionDto,
} from "apis/backend/generated";
import { setLoading } from "store/sales";

type Returns = {
  collectionState: CollectionState;
  collectionData: Collection;
  data: Record<number, Collection[]>;
  sortField: string;
  sortOrder: string;
  pageSize: number;
  currentPage: number;
  total: number;
  isLoading: boolean;
  isLoaded: boolean;
  createCollection: (dto: CreateCollectionDto) => Promise<CollectionResponse>;
};

export const useDispatchCollectionPublicData = () => {
  const dispatch = useAppDispatch();
  const collections = useSelector((state: State) => state.collections);
  useEffect(() => {
    const dispatchCollectionPublicData = async () => {
      dispatch(dispatchCollectionPublicDataAsync(collections.currentPage));
    };
    dispatchCollectionPublicData();
  }, [dispatch, collections.currentPage]);

  useEffect(() => {
    const dispatchFilterChange = async () => {
      dispatch(setLoading());
      dispatch(resetCollectionData());
      dispatch(dispatchCollectionPublicDataAsync(1));
    };
    dispatchFilterChange();
  }, [
    dispatch,
    collections.filters,
    collections.sortField,
    collections.sortOrder,
  ]);
};

export const useUpdateCollectionPage = () => {
  const dispatch = useAppDispatch();
  const updateCollectionPage = useCallback(
    async (page: number) => {
      dispatch(setCollectionPage(page));
      dispatch(dispatchCollectionPublicDataAsync(page));
    },
    [dispatch]
  );
  return { updateCollectionPage };
};

export const useUpdateCollectionSort = () => {
  const dispatch = useAppDispatch();
  const updateCollectionSort = useCallback(
    async (update: { sortField: string; sortOrder: string }) => {
      dispatch(setCollectionSort(update));
    },
    [dispatch]
  );
  return { updateCollectionSort };
};

export const useUpdateCollectionsFilter = () => {
  const dispatch = useAppDispatch();
  const updateFilter = useCallback(
    async (filters) => {
      dispatch(setCollectionFilters(filters));
    },
    [dispatch]
  );
  return { handleFilter: updateFilter };
};

const createCollection = async (dto: CreateCollectionDto) => {
  return backend.collections.collectionsControllerCreate({
    formData: dto,
  });
};

export const useCollections = (): Returns => {
  const collections = useSelector((state: State) => state.collections);
  const collectionsData = collections.data;
  const params: { id: string } = useParams();
  const collectionData = Object.values(collectionsData)
    .flat()
    .filter((collection) => collection.id === params.id)[0];
  return {
    collectionState: Object.assign([], collections),
    collectionData,
    data: Object.assign([], collections.data),
    pageSize: collections.pageSize,
    sortOrder: collections.sortOrder,
    sortField: collections.sortField,
    currentPage: collections.currentPage,
    total: collections.total,
    isLoading: collections.isLoading,
    isLoaded: collections.isLoaded,
    createCollection,
  };
};
