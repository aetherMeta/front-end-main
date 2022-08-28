/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChallengeRequestBodyDto } from '../models/ChallengeRequestBodyDto';
import type { ChallengeResponseDto } from '../models/ChallengeResponseDto';
import type { FreeJwtDto } from '../models/FreeJwtDto';
import type { VerifyBodyDto } from '../models/VerifyBodyDto';
import type { VerifyResponseDto } from '../models/VerifyResponseDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthenticationService {

    /**
     * Verifies a challenge
     * @returns ChallengeResponseDto Challenge to sign
     * @throws ApiError
     */
    public static authControllerChallenge({
        requestBody,
    }: {
        requestBody: ChallengeRequestBodyDto,
    }): CancelablePromise<ChallengeResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/challenge',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Verifies a challenge
     * @returns VerifyResponseDto JWT for authentication
     * @throws ApiError
     */
    public static authControllerVerify({
        requestBody,
    }: {
        requestBody: VerifyBodyDto,
    }): CancelablePromise<VerifyResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/verify',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Improperly formatted request body.`,
                403: `- Invalid/Expired challenge
                - Invalid signature`,
            },
        });
    }

    /**
     * DEBUG: Generates a JWT of a user without authentication
     * @returns any
     * @throws ApiError
     */
    public static authControllerTest({
        requestBody,
    }: {
        requestBody: FreeJwtDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/free-jwt',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
