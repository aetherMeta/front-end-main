/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionFilter } from '../models/CollectionFilter';
import type { CreatePrimarySaleDto } from '../models/CreatePrimarySaleDto';
import type { CreateSecondarySaleDto } from '../models/CreateSecondarySaleDto';
import type { DateFilterValues } from '../models/DateFilterValues';
import type { FilterValues } from '../models/FilterValues';
import type { PaginatedResponse } from '../models/PaginatedResponse';
import type { PrimarySaleResponse } from '../models/PrimarySaleResponse';
import type { SecondarySaleResponse } from '../models/SecondarySaleResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SalesService {

    /**
     * @returns SecondarySaleResponse Created secondary sale
     * @throws ApiError
     */
    public static secondarySaleControllerCreate({
        requestBody,
    }: {
        requestBody: CreateSecondarySaleDto,
    }): CancelablePromise<SecondarySaleResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sales/secondary',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns PaginatedResponse
     * @throws ApiError
     */
    public static secondarySaleControllerFindAll({
        sortField,
        sortOrder,
        cursor,
        skip,
        take,
        createdAt,
        name,
        price,
        availability = 'ALL',
        updatedAt,
    }: {
        sortField?: 'createdAt' | 'updatedAt' | 'name' | 'price',
        sortOrder?: 'asc' | 'desc',
        cursor?: string,
        skip?: number,
        take?: number,
        createdAt?: DateFilterValues,
        name?: FilterValues,
        price?: FilterValues,
        availability?: 'AVAILABLE' | 'SOLD' | 'ALL',
        updatedAt?: DateFilterValues,
    }): CancelablePromise<PaginatedResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sales/secondary',
            query: {
                'sortField': sortField,
                'sortOrder': sortOrder,
                'cursor': cursor,
                'skip': skip,
                'take': take,
                'createdAt': createdAt,
                'name': name,
                'price': price,
                'availability': availability,
                'updatedAt': updatedAt,
            },
        });
    }

    /**
     * @returns SecondarySaleResponse A secondary sale
     * @throws ApiError
     */
    public static secondarySaleControllerFindOne({
        id,
    }: {
        id: string,
    }): CancelablePromise<SecondarySaleResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sales/secondary/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns PrimarySaleResponse Created primary sale
     * @throws ApiError
     */
    public static primarySaleControllerCreate({
        formData,
    }: {
        formData: CreatePrimarySaleDto,
    }): CancelablePromise<PrimarySaleResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sales/primary',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns PaginatedResponse
     * @throws ApiError
     */
    public static primarySaleControllerFindAll({
        sortField,
        sortOrder,
        cursor,
        skip,
        take,
        createdAt,
        name,
        price,
        collection,
        availability = 'ALL',
        updatedAt,
    }: {
        sortField?: 'createdAt' | 'updatedAt' | 'name' | 'price',
        sortOrder?: 'asc' | 'desc',
        cursor?: string,
        skip?: number,
        take?: number,
        createdAt?: DateFilterValues,
        name?: FilterValues,
        price?: FilterValues,
        collection?: CollectionFilter,
        availability?: 'AVAILABLE' | 'SOLD' | 'ALL',
        updatedAt?: DateFilterValues,
    }): CancelablePromise<PaginatedResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sales/primary',
            query: {
                'sortField': sortField,
                'sortOrder': sortOrder,
                'cursor': cursor,
                'skip': skip,
                'take': take,
                'createdAt': createdAt,
                'name': name,
                'price': price,
                'collection': collection,
                'availability': availability,
                'updatedAt': updatedAt,
            },
        });
    }

    /**
     * @returns PrimarySaleResponse A primary sale
     * @throws ApiError
     */
    public static primarySaleControllerFindOne({
        id,
    }: {
        id: string,
    }): CancelablePromise<PrimarySaleResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sales/primary/{id}',
            path: {
                'id': id,
            },
        });
    }

}
