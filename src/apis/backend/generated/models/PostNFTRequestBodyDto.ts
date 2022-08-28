/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PostNFTRequestBodyDto = {
    address: string;
    chainId: number;
    tokenId: string;
    total: number;
    description?: string;
    collectionId?: string;
};

