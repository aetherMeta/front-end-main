/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SecondaryAuctionResponse } from './SecondaryAuctionResponse';

export type SecondaryBidResponse = {
    price: string;
    'r': string;
    's': string;
    auction: SecondaryAuctionResponse;
    id: string;
    'v': number;
};

