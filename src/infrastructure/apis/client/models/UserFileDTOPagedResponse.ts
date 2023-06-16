/* tslint:disable */
/* eslint-disable */
/**
 * MobyLab Web App
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UserFileDTO } from './UserFileDTO';
import {
    UserFileDTOFromJSON,
    UserFileDTOFromJSONTyped,
    UserFileDTOToJSON,
} from './UserFileDTO';

/**
 * 
 * @export
 * @interface UserFileDTOPagedResponse
 */
export interface UserFileDTOPagedResponse {
    /**
     * 
     * @type {number}
     * @memberof UserFileDTOPagedResponse
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof UserFileDTOPagedResponse
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof UserFileDTOPagedResponse
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<UserFileDTO>}
     * @memberof UserFileDTOPagedResponse
     */
    data?: Array<UserFileDTO> | null;
}

/**
 * Check if a given object implements the UserFileDTOPagedResponse interface.
 */
export function instanceOfUserFileDTOPagedResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserFileDTOPagedResponseFromJSON(json: any): UserFileDTOPagedResponse {
    return UserFileDTOPagedResponseFromJSONTyped(json, false);
}

export function UserFileDTOPagedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserFileDTOPagedResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'page': !exists(json, 'page') ? undefined : json['page'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(UserFileDTOFromJSON)),
    };
}

export function UserFileDTOPagedResponseToJSON(value?: UserFileDTOPagedResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'page': value.page,
        'pageSize': value.pageSize,
        'totalCount': value.totalCount,
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(UserFileDTOToJSON)),
    };
}

