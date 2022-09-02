/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrimaryAuctionResponse } from './PrimaryAuctionResponse';

export type PrimaryBidResponse = {
    price: string;
    'r': string;
    's': string;
    auction: PrimaryAuctionResponse;
    id: string;
    'v': number;
};

