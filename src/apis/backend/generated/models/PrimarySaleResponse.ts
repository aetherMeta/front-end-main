/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssetDto } from './AssetDto';
import type { AttributeDto } from './AttributeDto';
import type { ComissionDto } from './ComissionDto';
import type { NFTResponse } from './NFTResponse';
import type { RoyaltyDto } from './RoyaltyDto';
import type { TokenDto } from './TokenDto';

export type PrimarySaleResponse = {
    amount: string;
    amountSold: string;
    price: string;
    nonce: string;
    'r': string;
    's': string;
    royalty: RoyaltyDto;
    token: TokenDto;
    commission: ComissionDto;
    nft?: NFTResponse | null;
    asset: AssetDto;
    attributes: Array<AttributeDto>;
    id: string;
    name: string;
    description: string;
    chainId: number;
    expiresAt: string;
    createdAt: string;
    sellerAddress: string;
    currency: string;
    completedAt: string | null;
    'v': number;
};

