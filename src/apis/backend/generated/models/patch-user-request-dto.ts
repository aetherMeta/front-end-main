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
 * @interface PatchUserRequestDto
 */
export interface PatchUserRequestDto {
    /**
     * 
     * @type {string}
     * @memberof PatchUserRequestDto
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof PatchUserRequestDto
     */
    'pendingEmail': string;
    /**
     * 
     * @type {string}
     * @memberof PatchUserRequestDto
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchUserRequestDto
     */
    'lastName'?: string;
}

