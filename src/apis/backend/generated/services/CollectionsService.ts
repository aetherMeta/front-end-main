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
        sortField,
        sortOrder,
        cursor,
        skip,
        take,
    }: {
        id: string,
        sortField?: 'createdAt' | 'updatedAt' | 'name',
        sortOrder?: 'asc' | 'desc',
        cursor?: string,
        skip?: number,
        take?: number,
    }): CancelablePromise<Array<NFTResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/collections/{id}/nfts',
            path: {
                'id': id,
            },
            query: {
                'sortField': sortField,
                'sortOrder': sortOrder,
                'cursor': cursor,
                'skip': skip,
                'take': take,
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
        sortField,
        sortOrder,
        cursor,
        skip,
        take,
        createdAt,
        updatedAt,
        name,
    }: {
        sortField?: 'createdAt' | 'updatedAt' | 'name',
        sortOrder?: 'asc' | 'desc',
        cursor?: string,
        skip?: number,
        take?: number,
        createdAt?: DateFilterValues,
        updatedAt?: DateFilterValues,
        name?: FilterValues,
    }): CancelablePromise<PaginatedResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/collections',
            query: {
                'sortField': sortField,
                'sortOrder': sortOrder,
                'cursor': cursor,
                'skip': skip,
                'take': take,
                'createdAt': createdAt,
                'updatedAt': updatedAt,
                'name': name,
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

}
