/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NFTResponse } from '../models/NFTResponse';
import type { PatchNFTRequestBodyDto } from '../models/PatchNFTRequestBodyDto';
import type { PostNFTRequestBodyDto } from '../models/PostNFTRequestBodyDto';
import type { UserNFTResponse } from '../models/UserNFTResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NfTsService {

    /**
     * @returns UserNFTResponse Get's all NFTs owned by user at this address
     * @throws ApiError
     */
    public static nftsControllerFindUserNft({
        address,
    }: {
        address: string,
    }): CancelablePromise<Array<UserNFTResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/nfts/users/{address}',
            path: {
                'address': address,
            },
        });
    }

    /**
     * @returns NFTResponse Get's an nft at this chainID, address, tokenId
     * @throws ApiError
     */
    public static nftsControllerFindOne({
        chainId,
        address,
        tokenId,
    }: {
        chainId: number,
        address: string,
        tokenId: number,
    }): CancelablePromise<NFTResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/nfts/{chainId}/{address}/{tokenId}',
            path: {
                'chainId': chainId,
                'address': address,
                'tokenId': tokenId,
            },
        });
    }

    /**
     * @returns NFTResponse Admin endpoint to manually add an nft
     * @throws ApiError
     */
    public static nftsControllerCreate({
        requestBody,
    }: {
        requestBody: PostNFTRequestBodyDto,
    }): CancelablePromise<NFTResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/nfts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns NFTResponse Admin endpoint to manually edit an nft
     * @throws ApiError
     */
    public static nftsControllerUpdateNft({
        requestBody,
    }: {
        requestBody: PatchNFTRequestBodyDto,
    }): CancelablePromise<NFTResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/nfts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any Manually invoke backend to update nfts
     * @throws ApiError
     */
    public static nftsControllerForceFetch(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/nfts/fetch-new-tokens',
        });
    }

}
