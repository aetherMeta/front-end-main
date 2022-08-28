import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { CollectionDetailState, Sale, State } from "store/types";
import { useAppDispatch } from "store";
import {
  dispatchCollectionDetailPublicDataAsync,
  setCollectionDetailFilters,
  setCollectionDetailSort,
} from "store/collectionDetails";
import { useParams } from "react-router-dom";
import { NFTResponse } from "apis/backend/generated";

type Returns = {
  collectionDetailState: CollectionDetailState;
  name: string;
  description: string;
  imageUrl: string;
  nfts: NFTResponse[];
  nftCount: number;
  data: Sale[];
  total: number;
  collectionId: string;
  isLoading: boolean;
  isLoaded: boolean;
  sortOrder: string;
  sortField: string;
};

export const useDispatchCollectionDetailPublicData = () => {
  const dispatch = useAppDispatch();
  const collectionDetails = useSelector(
    (state: State) => state.collectionDetails
  );
  const params: { id } = useParams();
  useEffect(() => {
    const dispatchCollectionDetailPublicData = async () => {
      dispatchCollectionDetailPublicDataAsync(params.id);
      // dispatch(setCollectionDetailId(params.id));
    };
    if (collectionDetails?.collectionId !== params.id) {
      dispatchCollectionDetailPublicData();
    }
  }, [dispatch, collectionDetails.collectionId, params.id]);

  useEffect(() => {
    const dispatchFilterChange = async () => {
      dispatch(dispatchCollectionDetailPublicDataAsync(params.id));
    };
    dispatchFilterChange();
  }, [
    dispatch,
    collectionDetails.filters,
    params.id,
    collectionDetails.sortField,
    collectionDetails.sortOrder,
  ]);
};

export const useUpdateCollectionDetailSort = () => {
  const dispatch = useAppDispatch();
  const updateCollectionDetailSort = useCallback(
    async (update: { sortField: string; sortOrder: string }) => {
      dispatch(setCollectionDetailSort(update));
    },
    [dispatch]
  );
  return { updateCollectionDetailSort };
};

export const useUpdateCollectionDetailsFilter = () => {
  const dispatch = useAppDispatch();
  const updateFilter = useCallback(
    async (filters) => {
      dispatch(setCollectionDetailFilters(filters));
    },
    [dispatch]
  );
  return { handleFilter: updateFilter };
};

export const useCollectionDetails = (): Returns => {
  const collectionDetails = useSelector(
    (state: State) => state.collectionDetails
  );
  return {
    collectionDetailState: Object.assign([], collectionDetails),
    data: Object.assign([], collectionDetails.data),
    name: collectionDetails.name,
    description: collectionDetails.description,
    imageUrl: collectionDetails.imageUrl,
    nfts: collectionDetails.nfts,
    nftCount: collectionDetails.nftCount,
    total: collectionDetails.total,
    isLoading: collectionDetails.isLoading,
    isLoaded: collectionDetails.isLoaded,
    sortOrder: collectionDetails.sortOrder,
    sortField: collectionDetails.sortField,
    collectionId: collectionDetails.collectionId,
  };
};
