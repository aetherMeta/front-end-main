/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssetDto } from './AssetDto';
import type { CollectionResponse } from './CollectionResponse';

export type NFTResponse = {
    tokenId: string;
    total: string;
    collections?: CollectionResponse | null;
    asset: AssetDto;
    chainId: number;
    address: string;
    name?: string;
    description?: string;
};

