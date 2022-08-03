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


import { AssetDto } from './asset-dto';
import { AttributeDto } from './attribute-dto';
import { ComissionDto } from './comission-dto';
import { RoyaltyDto } from './royalty-dto';
import { SecondarySaleResponseNft } from './secondary-sale-response-nft';
import { TokenDto } from './token-dto';

/**
 * 
 * @export
 * @interface PrimarySaleResponse
 */
export interface PrimarySaleResponse {
    /**
     * 
     * @type {string}
     * @memberof PrimarySaleResponse
     */
    'amount': string;
    /**
     * 
     * @type {string}
     * @memberof PrimarySaleResponse
     */
    'amountSold': string;
    /**
     * 
     * @type {string}
     * @memberof PrimarySaleResponse
     */
    'price': string;
    /**
     * 
     * @type {string}
     * @memberof PrimarySaleResponse
     */
    'nonce': string;
    /**
     * 
     * @type {string}
     * @memberof PrimarySaleResponse
     */
    'r': string;
    /**
     * 
     * @type {string}
     * @memberof PrimarySaleResponse
     */
    's': string;
    /**
     * 
     * @type {RoyaltyDto}
     * @memberof PrimarySaleResponse
     */
    'royalty': RoyaltyDto;
    /**
     * 
     * @type {TokenDto}
     * @memberof PrimarySaleResponse
     */
    'token': TokenDto;
    /**
     * 
     * @type {ComissionDto}
     * @memberof PrimarySaleResponse
     */
    'commission': ComissionDto;
    /**
     * 
     * @type {SecondarySaleResponseNft}
     * @memberof PrimarySaleResponse
     */
    'nft'?: SecondarySaleResponseNft | null;
    /**
     * 
     * @type {AssetDto}
     * @memberof PrimarySaleResponse
     */
    'asset': AssetDto;
    /**
     * 
     * @type {AttributeDto}
     * @memberof PrimarySaleResponse
     */
    'attributes': AttributeDto;
    /**
     * 
     * @type {string}
     * @memberof PrimarySaleResponse
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof PrimarySaleResponse
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof PrimarySaleResponse
     */
    'description': string;
    /**
     * 
     * @type {number}
     * @memberof PrimarySaleResponse
     */
    'chainId': number;
    /**
     * 
     * @type {string}
     * @memberof PrimarySaleResponse
     */
    'expiresAt': string;
    /**
     * 
     * @type {string}
     * @memberof PrimarySaleResponse
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof PrimarySaleResponse
     */
    'sellerAddress': string;
    /**
     * 
     * @type {string}
     * @memberof PrimarySaleResponse
     */
    'currency': string;
    /**
     * 
     * @type {string}
     * @memberof PrimarySaleResponse
     */
    'completedAt': string | null;
    /**
     * 
     * @type {number}
     * @memberof PrimarySaleResponse
     */
    'v': number;
}

