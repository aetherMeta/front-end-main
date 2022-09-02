/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IpfsUploadRequest } from '../models/IpfsUploadRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class IpfsService {

    /**
     * @returns any
     * @throws ApiError
     */
    public static ipfsControllerCreate({
        formData,
    }: {
        formData: IpfsUploadRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ipfs',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
