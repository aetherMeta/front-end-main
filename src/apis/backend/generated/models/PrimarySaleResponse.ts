/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComissionDto } from './ComissionDto';
import type { NFTResponse } from './NFTResponse';
import type { RoyaltyDto } from './RoyaltyDto';
import type { TokenDto } from './TokenDto';

export type PrimarySaleResponse = {
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
    royalty: RoyaltyDto;
    token: TokenDto;
    commission: ComissionDto;
    nft: NFTResponse;
    createdAt: string;
    sellerAddress: string;
    currency: string;
    completedAt: string | null;
    'v': number;
};

