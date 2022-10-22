/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreatePrimarySaleDto = {
    'r': string;
    's': string;
    files?: Array<Blob>;
    currency: string;
    amount: string;
    price: string;
    nonce: string;
    'v': number;
    royaltyRecipient: string;
    royaltyValue: number;
    uri: string;
    metaverseLink?: string;
    chainId: number;
};

