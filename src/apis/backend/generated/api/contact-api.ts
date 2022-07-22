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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreatePartnershipInquiryDto } from '../models';
// @ts-ignore
import { CreatePartnershipInquiryResponse } from '../models';
/**
 * ContactApi - axios parameter creator
 * @export
 */
export const ContactApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreatePartnershipInquiryDto} createPartnershipInquiryDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        partnershipControllerCreate: async (createPartnershipInquiryDto: CreatePartnershipInquiryDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createPartnershipInquiryDto' is not null or undefined
            assertParamExists('partnershipControllerCreate', 'createPartnershipInquiryDto', createPartnershipInquiryDto)
            const localVarPath = `/contact/partnership`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createPartnershipInquiryDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        partnershipControllerFindAll: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/contact/partnership`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        partnershipControllerFindOne: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('partnershipControllerFindOne', 'id', id)
            const localVarPath = `/contact/partnership/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        partnershipControllerRemove: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('partnershipControllerRemove', 'id', id)
            const localVarPath = `/contact/partnership/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ContactApi - functional programming interface
 * @export
 */
export const ContactApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ContactApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CreatePartnershipInquiryDto} createPartnershipInquiryDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async partnershipControllerCreate(createPartnershipInquiryDto: CreatePartnershipInquiryDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CreatePartnershipInquiryResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.partnershipControllerCreate(createPartnershipInquiryDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async partnershipControllerFindAll(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.partnershipControllerFindAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async partnershipControllerFindOne(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.partnershipControllerFindOne(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async partnershipControllerRemove(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.partnershipControllerRemove(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ContactApi - factory interface
 * @export
 */
export const ContactApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ContactApiFp(configuration)
    return {
        /**
         * 
         * @param {CreatePartnershipInquiryDto} createPartnershipInquiryDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        partnershipControllerCreate(createPartnershipInquiryDto: CreatePartnershipInquiryDto, options?: any): AxiosPromise<Array<CreatePartnershipInquiryResponse>> {
            return localVarFp.partnershipControllerCreate(createPartnershipInquiryDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        partnershipControllerFindAll(options?: any): AxiosPromise<void> {
            return localVarFp.partnershipControllerFindAll(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        partnershipControllerFindOne(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.partnershipControllerFindOne(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        partnershipControllerRemove(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.partnershipControllerRemove(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ContactApi - object-oriented interface
 * @export
 * @class ContactApi
 * @extends {BaseAPI}
 */
export class ContactApi extends BaseAPI {
    /**
     * 
     * @param {CreatePartnershipInquiryDto} createPartnershipInquiryDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactApi
     */
    public partnershipControllerCreate(createPartnershipInquiryDto: CreatePartnershipInquiryDto, options?: AxiosRequestConfig) {
        return ContactApiFp(this.configuration).partnershipControllerCreate(createPartnershipInquiryDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactApi
     */
    public partnershipControllerFindAll(options?: AxiosRequestConfig) {
        return ContactApiFp(this.configuration).partnershipControllerFindAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactApi
     */
    public partnershipControllerFindOne(id: string, options?: AxiosRequestConfig) {
        return ContactApiFp(this.configuration).partnershipControllerFindOne(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactApi
     */
    public partnershipControllerRemove(id: string, options?: AxiosRequestConfig) {
        return ContactApiFp(this.configuration).partnershipControllerRemove(id, options).then((request) => request(this.axios, this.basePath));
    }
}
