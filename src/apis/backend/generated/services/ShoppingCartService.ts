/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateShoppingCartItemDto } from '../models/CreateShoppingCartItemDto';
import type { ShoppingCartResponse } from '../models/ShoppingCartResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ShoppingCartService {

    /**
     * @returns ShoppingCartResponse Get the shopping cart of the current user
     * @throws ApiError
     */
    public static shoppingCartControllerFindOne(): CancelablePromise<Array<ShoppingCartResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shopping-cart',
        });
    }

    /**
     * @returns CreateShoppingCartItemDto The  shopping cart with all items
     * @throws ApiError
     */
    public static shoppingCartControllerCreate({
        requestBody,
    }: {
        requestBody: CreateShoppingCartItemDto,
    }): CancelablePromise<Array<CreateShoppingCartItemDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/shopping-cart/add-item',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static shoppingCartControllerEmpty(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/shopping-cart/empty',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static shoppingCartControllerRemove({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/shopping-cart/{id}',
            path: {
                'id': id,
            },
        });
    }

}
