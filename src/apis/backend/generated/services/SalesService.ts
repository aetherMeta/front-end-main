/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatedAtFilter } from '../models/CreatedAtFilter';
import type { CreatePrimarySaleDto } from '../models/CreatePrimarySaleDto';
import type { CreateSecondarySaleDto } from '../models/CreateSecondarySaleDto';
import type { FilterValues } from '../models/FilterValues';
import type { NameFilter } from '../models/NameFilter';
import type { PaginatedResponse } from '../models/PaginatedResponse';
import type { PriceFilter } from '../models/PriceFilter';
import type { PrimarySaleResponse } from '../models/PrimarySaleResponse';
import type { SecondarySaleResponse } from '../models/SecondarySaleResponse';
import type { UpdatedAtFilter } from '../models/UpdatedAtFilter';

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
        cursor,
        skip,
        take,
        createdAt,
        updatedAt,
        name,
        price,
    }: {
        cursor?: string,
        skip?: number,
        take?: number,
        createdAt?: CreatedAtFilter,
        updatedAt?: UpdatedAtFilter,
        name?: NameFilter,
        price?: PriceFilter,
    }): CancelablePromise<PaginatedResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sales/secondary',
            query: {
                'cursor': cursor,
                'skip': skip,
                'take': take,
                'createdAt': createdAt,
                'updatedAt': updatedAt,
                'name': name,
                'price': price,
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
        requestBody,
    }: {
        requestBody: CreatePrimarySaleDto,
    }): CancelablePromise<PrimarySaleResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sales/primary',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns PaginatedResponse
     * @throws ApiError
     */
    public static primarySaleControllerFindAll({
        cursor,
        skip,
        take,
        createdAt,
        updatedAt,
        name,
        price,
    }: {
        cursor?: string,
        skip?: number,
        take?: number,
        createdAt?: FilterValues,
        updatedAt?: FilterValues,
        name?: FilterValues,
        price?: FilterValues,
    }): CancelablePromise<PaginatedResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sales/primary',
            query: {
                'cursor': cursor,
                'skip': skip,
                'take': take,
                'createdAt': createdAt,
                'updatedAt': updatedAt,
                'name': name,
                'price': price,
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
