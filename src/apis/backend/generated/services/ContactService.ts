/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateContactUsDto } from '../models/CreateContactUsDto';
import type { CreateContactUsResponse } from '../models/CreateContactUsResponse';
import type { CreatePartnershipInquiryDto } from '../models/CreatePartnershipInquiryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ContactService {

    /**
     * @returns CreatePartnershipInquiryDto Partnership Inquiry
     * @throws ApiError
     */
    public static partnershipControllerCreate({
        requestBody,
    }: {
        requestBody: CreatePartnershipInquiryDto,
    }): CancelablePromise<Array<CreatePartnershipInquiryDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/contact/partnership',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static partnershipControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/contact/partnership',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static partnershipControllerFindOne({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/contact/partnership/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static partnershipControllerRemove({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/contact/partnership/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns CreateContactUsResponse Contact us message
     * @throws ApiError
     */
    public static contactUsControllerCreate({
        requestBody,
    }: {
        requestBody: CreateContactUsDto,
    }): CancelablePromise<CreateContactUsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/contact/message',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static contactUsControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/contact/message',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static contactUsControllerFindOne({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/contact/message/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static contactUsControllerRemove({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/contact/message/{id}',
            path: {
                'id': id,
            },
        });
    }

}
