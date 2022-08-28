/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrimarySaleResponse } from './PrimarySaleResponse';

export type ShoppingCartItemResponse = {
    type: ShoppingCartItemResponse.type;
    sale: PrimarySaleResponse;
    shoppingCartId: string;
    primarySaleId: string;
    secondarySaleId: string;
    amount: number;
};

export namespace ShoppingCartItemResponse {

    export enum type {
        PRIMARY_SALE = 'PRIMARY_SALE',
        SECONDARY_SALE = 'SECONDARY_SALE',
    }


}

