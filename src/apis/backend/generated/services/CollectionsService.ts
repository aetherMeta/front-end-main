/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionResponse } from '../models/CollectionResponse';
import type { CreateCollectionDto } from '../models/CreateCollectionDto';
import type { DateFilterValues } from '../models/DateFilterValues';
import type { FilterValues } from '../models/FilterValues';
import type { NFTResponse } from '../models/NFTResponse';
import type { PaginatedResponse } from '../models/PaginatedResponse';
import type { UpdateCollectionDto } from '../models/UpdateCollectionDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CollectionsService {

    /**
     * @returns NFTResponse A collection
     * @throws ApiError
     */
    public static collectionsControllerCollectionNfts({
        id,
        cursor,
        skip,
        take,
        sortField,
        sortOrder,
    }: {
        id: string,
        cursor?: string,
        skip?: number,
        take?: number,
        sortField?: 'createdAt' | 'updatedAt' | 'name',
        sortOrder?: 'asc' | 'desc',
    }): CancelablePromise<Array<NFTResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/collections/{id}/nfts',
            path: {
                'id': id,
            },
            query: {
                'cursor': cursor,
                'skip': skip,
                'take': take,
                'sortField': sortField,
                'sortOrder': sortOrder,
            },
        });
    }

    /**
     * @returns CollectionResponse Creates a collection
     * @throws ApiError
     */
    public static collectionsControllerCreate({
        formData,
    }: {
        formData: CreateCollectionDto,
    }): CancelablePromise<CollectionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/collections',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns PaginatedResponse
     * @throws ApiError
     */
    public static collectionsControllerFindAll({
        cursor,
        skip,
        take,
        createdAt,
        updatedAt,
        name,
        sortField,
        sortOrder,
    }: {
        cursor?: string,
        skip?: number,
        take?: number,
        createdAt?: DateFilterValues,
        updatedAt?: DateFilterValues,
        name?: FilterValues,
        sortField?: 'createdAt' | 'updatedAt' | 'name',
        sortOrder?: 'asc' | 'desc',
    }): CancelablePromise<PaginatedResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/collections',
            query: {
                'cursor': cursor,
                'skip': skip,
                'take': take,
                'createdAt': createdAt,
                'updatedAt': updatedAt,
                'name': name,
                'sortField': sortField,
                'sortOrder': sortOrder,
            },
        });
    }

    /**
     * @returns CollectionResponse A collection
     * @throws ApiError
     */
    public static collectionsControllerFindOne({
        id,
    }: {
        id: string,
    }): CancelablePromise<CollectionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/collections/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns CollectionResponse Updated collection
     * @throws ApiError
     */
    public static collectionsControllerUpdate({
        id,
        formData,
    }: {
        id: string,
        formData: UpdateCollectionDto,
    }): CancelablePromise<CollectionResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/collections/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static collectionsControllerConnectPrimarySaleToCollection({
        collectionId,
        saleId,
    }: {
        collectionId: string,
        saleId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/collections/{collectionId}/add-primary-sale/{saleId}',
            path: {
                'collectionId': collectionId,
                'saleId': saleId,
            },
        });
    }

}
