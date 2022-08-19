/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComissionDto } from './ComissionDto';
import type { NFTResponse } from './NFTResponse';

export type SecondaryAuctionResponse = {
    amount: string;
    price: string;
    nonce: string;
    'r': string;
    's': string;
    commission: ComissionDto;
    nft: NFTResponse;
    id: string;
    chainId: number;
    currency: string;
    sellerAddress: string;
    expiresAt: string;
    'v': number;
};

