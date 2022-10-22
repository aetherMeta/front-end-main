/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserResponseDto = {
    metaverseAllowanceExceeded: boolean;
    role: UserResponseDto.role;
    pendingEmail: string;
    email: string;
    username: string;
    address: string;
    firstName: string | null;
    lastName: string | null;
    metaverseAccess: boolean;
    twitterHandle: string;
};

export namespace UserResponseDto {

    export enum role {
        ADMIN = 'ADMIN',
        USER = 'USER',
    }


}

