import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { CollectionDetailState, Sale, State } from "store/types";
import { useAppDispatch } from "store";
import {
  dispatchCollectionDetailPublicDataAsync,
  setCollectionDetailFilters,
  resetCollectionDetailData,
  setCollectionDetailId,
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
  dispatch(setCollectionDetailId(params.id));
  useEffect(() => {
    const dispatchCollectionDetailPublicData = async () => {
      dispatch(
        dispatchCollectionDetailPublicDataAsync(collectionDetails.collectionId)
      );
    };
    if (collectionDetails?.collectionId) {
      dispatchCollectionDetailPublicData();
    }
  }, [dispatch, collectionDetails.collectionId]);

  useEffect(() => {
    const dispatchFilterChange = async () => {
      dispatch(resetCollectionDetailData());
      dispatch(
        dispatchCollectionDetailPublicDataAsync(collectionDetails.collectionId)
      );
    };
    dispatchFilterChange();
  }, [
    dispatch,
    collectionDetails.filters,
    collectionDetails.collectionId,
    collectionDetails.sortField,
    collectionDetails.sortOrder,
  ]);
};

export const useUpdateCollectionDetailId = () => {
  const dispatch = useAppDispatch();
  const updateCollectionDetailPage = useCallback(
    async (id: string) => {
      dispatch(setCollectionDetailId(id));
    },
    [dispatch]
  );
  return { updateCollectionDetailPage };
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
  };
};
