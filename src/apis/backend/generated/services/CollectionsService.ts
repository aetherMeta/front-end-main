/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionResponse } from '../models/CollectionResponse';
import type { CreateCollectionDto } from '../models/CreateCollectionDto';
import type { DateFilterValues } from '../models/DateFilterValues';
import type { FilterValues } from '../models/FilterValues';
import type { UpdateCollectionDto } from '../models/UpdateCollectionDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CollectionsService {

    /**
     * @returns CollectionResponse Creates a collection
     * @throws ApiError
     */
    public static collectionsControllerCreate({
        requestBody,
    }: {
        requestBody: CreateCollectionDto,
    }): CancelablePromise<CollectionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/collections',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns CollectionResponse All collections
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
    }): CancelablePromise<Array<CollectionResponse>> {
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
        requestBody,
    }: {
        id: string,
        requestBody: UpdateCollectionDto,
    }): CancelablePromise<CollectionResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/collections/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
