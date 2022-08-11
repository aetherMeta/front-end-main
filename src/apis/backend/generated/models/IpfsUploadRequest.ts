/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attribute } from './Attribute';

export type IpfsUploadRequest = {
    file: Blob;
    name: string;
    description: string;
    attributes: Array<Attribute>;
};

