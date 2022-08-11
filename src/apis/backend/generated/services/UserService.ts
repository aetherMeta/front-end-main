/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PatchUserRequestDto } from '../models/PatchUserRequestDto';
import type { UserResponseDto } from '../models/UserResponseDto';
import type { WhitelistUserRequestDto } from '../models/WhitelistUserRequestDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Gets the current user's info.
     * @returns UserResponseDto Returns current user info
     * @throws ApiError
     */
    public static userControllerGet(): CancelablePromise<UserResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user',
            errors: {
                400: `Bad request.`,
                403: `Invalid JWT.`,
                404: `User does not exist.`,
            },
        });
    }

    /**
     * Updates a user's profile.
     * @returns UserResponseDto Returns the updated user details.
     * @throws ApiError
     */
    public static userControllerPatch({
        requestBody,
    }: {
        requestBody: PatchUserRequestDto,
    }): CancelablePromise<UserResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/user',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Improperly formatted request body.`,
            },
        });
    }

    /**
     * @returns UserResponseDto Returns current user info
     * @throws ApiError
     */
    public static userControllerWhitelist({
        requestBody,
    }: {
        requestBody: WhitelistUserRequestDto,
    }): CancelablePromise<UserResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/user/whitelist',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns UserResponseDto Returns current user info
     * @throws ApiError
     */
    public static userControllerMetaverseUpdate(): CancelablePromise<UserResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/user/metaverse/update',
        });
    }

}
