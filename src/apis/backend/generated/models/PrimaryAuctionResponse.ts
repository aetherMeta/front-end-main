/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssetDto } from './AssetDto';
import type { ComissionDto } from './ComissionDto';
import type { NFTResponse } from './NFTResponse';
import type { RoyaltyDto } from './RoyaltyDto';
import type { TokenDto } from './TokenDto';

export type PrimaryAuctionResponse = {
    amount: string;
    price: string;
    nonce: string;
    'r': string;
    's': string;
    royalty: RoyaltyDto;
    token: TokenDto;
    commission: ComissionDto;
    nft: NFTResponse;
    asset: AssetDto;
    id: string;
    name: string;
    description: string;
    chainId: number;
    currency: string;
    sellerAddress: string;
    expiresAt: string;
    'v': number;
};

