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



/**
 * 
 * @export
 * @interface CreatePrimaryAuctionDto
 */
export interface CreatePrimaryAuctionDto {
    /**
     * 
     * @type {string}
     * @memberof CreatePrimaryAuctionDto
     */
    'r': string;
    /**
     * 
     * @type {string}
     * @memberof CreatePrimaryAuctionDto
     */
    's': string;
    /**
     * 
     * @type {string}
     * @memberof CreatePrimaryAuctionDto
     */
    'currency': string;
    /**
     * 
     * @type {string}
     * @memberof CreatePrimaryAuctionDto
     */
    'amount': string;
    /**
     * 
     * @type {string}
     * @memberof CreatePrimaryAuctionDto
     */
    'price': string;
    /**
     * 
     * @type {string}
     * @memberof CreatePrimaryAuctionDto
     */
    'nonce': string;
    /**
     * 
     * @type {number}
     * @memberof CreatePrimaryAuctionDto
     */
    'v': number;
    /**
     * 
     * @type {string}
     * @memberof CreatePrimaryAuctionDto
     */
    'royaltyRecipient': string;
    /**
     * 
     * @type {number}
     * @memberof CreatePrimaryAuctionDto
     */
    'royaltyValue': number;
    /**
     * 
     * @type {string}
     * @memberof CreatePrimaryAuctionDto
     */
    'expiresAt': string;
    /**
     * 
     * @type {string}
     * @memberof CreatePrimaryAuctionDto
     */
    'uri': string;
    /**
     * 
     * @type {object}
     * @memberof CreatePrimaryAuctionDto
     */
    'chainId': object;
}

