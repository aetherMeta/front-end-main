/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComissionDto } from './ComissionDto';
import type { NFTResponse } from './NFTResponse';

export type SecondarySaleResponse = {
    id: string;
    name: string;
    description: string;
    chainId: number;
    amount: string;
    amountSold: string;
    price: string;
    nonce: string;
    'r': string;
    's': string;
    commission: ComissionDto;
    nft?: NFTResponse | null;
    expiresAt: string;
    createdAt: string;
    sellerAddress: string;
    currency: string;
    completedAt: string | null;
    'v': number;
};

