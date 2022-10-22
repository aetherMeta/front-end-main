/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SocialsService {

    /**
     * Redirects to twitter verification
     * @returns void
     * @throws ApiError
     */
    public static socialControllerInitTwitterVerification(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/social/twitter-confirm',
            errors: {
                302: `Twitter oauth flow`,
            },
        });
    }

    /**
     * Callback for twitter to confirm a user and return oauth token
     * @returns void
     * @throws ApiError
     */
    public static socialControllerTwitterCallBack(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/social/twitter-callback',
            errors: {
                302: `User's profile page`,
            },
        });
    }

}
