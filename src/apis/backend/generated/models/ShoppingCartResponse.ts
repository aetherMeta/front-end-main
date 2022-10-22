/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ShoppingCartItemResponse } from './ShoppingCartItemResponse';

export type ShoppingCartResponse = {
    shoppingCartItems: Array<ShoppingCartItemResponse>;
    id: string;
    userId: string;
    createdAt: string;
};

