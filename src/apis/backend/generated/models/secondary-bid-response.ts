/* tslint:disable */
/* eslint-disable */
/**
 * Aether Backend
 * The following is a list of endpoints for Aether Backend, plus their respective request and response data transfer objects.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { SecondaryAuctionResponse } from './secondary-auction-response';

/**
 * 
 * @export
 * @interface SecondaryBidResponse
 */
export interface SecondaryBidResponse {
    /**
     * 
     * @type {string}
     * @memberof SecondaryBidResponse
     */
    'price': string;
    /**
     * 
     * @type {string}
     * @memberof SecondaryBidResponse
     */
    'r': string;
    /**
     * 
     * @type {string}
     * @memberof SecondaryBidResponse
     */
    's': string;
    /**
     * 
     * @type {SecondaryAuctionResponse}
     * @memberof SecondaryBidResponse
     */
    'auction': SecondaryAuctionResponse;
    /**
     * 
     * @type {string}
     * @memberof SecondaryBidResponse
     */
    'id': string;
    /**
     * 
     * @type {number}
     * @memberof SecondaryBidResponse
     */
    'v': number;
}

