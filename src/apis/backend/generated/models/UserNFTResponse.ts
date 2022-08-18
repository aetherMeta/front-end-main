/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssetDto } from './AssetDto';
import type { AttributeDto } from './AttributeDto';
import type { CollectionResponse } from './CollectionResponse';

export type UserNFTResponse = {
    tokenId?: string | null;
    total: string;
    collections: CollectionResponse;
    attributes: Array<AttributeDto>;
    asset: AssetDto;
    owned: string;
    chainId: number;
    address: string;
    name?: string;
    description?: string;
};

