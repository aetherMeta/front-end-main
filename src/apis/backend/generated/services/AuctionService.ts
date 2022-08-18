/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePrimaryAuctionDto } from '../models/CreatePrimaryAuctionDto';
import type { CreatePrimaryBidDto } from '../models/CreatePrimaryBidDto';
import type { CreateSecondaryAuctionDto } from '../models/CreateSecondaryAuctionDto';
import type { CreateSecondaryBidDto } from '../models/CreateSecondaryBidDto';
import type { PrimaryAuctionResponse } from '../models/PrimaryAuctionResponse';
import type { PrimaryBidResponse } from '../models/PrimaryBidResponse';
import type { SecondaryAuctionResponse } from '../models/SecondaryAuctionResponse';
import type { SecondaryBidResponse } from '../models/SecondaryBidResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuctionService {

    /**
     * @returns PrimaryAuctionResponse Created primary auction
     * @throws ApiError
     */
    public static primaryAuctionControllerCreate({
        requestBody,
    }: {
        requestBody: CreatePrimaryAuctionDto,
    }): CancelablePromise<PrimaryAuctionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auctions/primary',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns PrimaryAuctionResponse Found primary auctions
     * @throws ApiError
     */
    public static primaryAuctionControllerFindAll(): CancelablePromise<Array<PrimaryAuctionResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auctions/primary',
        });
    }

    /**
     * @returns PrimaryAuctionResponse Found primary auction
     * @throws ApiError
     */
    public static primaryAuctionControllerFindOne({
        id,
    }: {
        id: string,
    }): CancelablePromise<PrimaryAuctionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auctions/primary/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns PrimaryBidResponse Bids for an auction
     * @throws ApiError
     */
    public static primaryAuctionControllerFindBids({
        auctionId,
    }: {
        auctionId: string,
    }): CancelablePromise<Array<PrimaryBidResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auctions/primary/{auctionId}/bids',
            path: {
                'auctionId': auctionId,
            },
        });
    }

    /**
     * @returns PrimaryBidResponse Created bid
     * @throws ApiError
     */
    public static primaryAuctionControllerBid({
        auctionId,
        requestBody,
    }: {
        auctionId: string,
        requestBody: CreatePrimaryBidDto,
    }): CancelablePromise<PrimaryBidResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auctions/primary/{auctionId}/bid',
            path: {
                'auctionId': auctionId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns SecondaryAuctionResponse Created secondary auction
     * @throws ApiError
     */
    public static secondaryAuctionControllerCreate({
        requestBody,
    }: {
        requestBody: CreateSecondaryAuctionDto,
    }): CancelablePromise<SecondaryAuctionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auctions/secondary',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns SecondaryAuctionResponse Found primary auctions
     * @throws ApiError
     */
    public static secondaryAuctionControllerFindAll(): CancelablePromise<Array<SecondaryAuctionResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auctions/secondary',
        });
    }

    /**
     * @returns SecondaryAuctionResponse Found primary auction
     * @throws ApiError
     */
    public static secondaryAuctionControllerFindOne({
        id,
    }: {
        id: string,
    }): CancelablePromise<SecondaryAuctionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auctions/secondary/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns SecondaryBidResponse Bids for an auction
     * @throws ApiError
     */
    public static secondaryAuctionControllerFindBids({
        auctionId,
    }: {
        auctionId: string,
    }): CancelablePromise<Array<SecondaryBidResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auctions/secondary/{auctionId}/bids',
            path: {
                'auctionId': auctionId,
            },
        });
    }

    /**
     * @returns SecondaryBidResponse Created bid
     * @throws ApiError
     */
    public static secondaryAuctionControllerBid({
        auctionId,
        requestBody,
    }: {
        auctionId: string,
        requestBody: CreateSecondaryBidDto,
    }): CancelablePromise<SecondaryBidResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auctions/secondary/{auctionId}/bid',
            path: {
                'auctionId': auctionId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
