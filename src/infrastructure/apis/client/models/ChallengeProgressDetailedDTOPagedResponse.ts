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
import type { ChallengeProgressDetailedDTO } from './ChallengeProgressDetailedDTO';
import {
    ChallengeProgressDetailedDTOFromJSON,
    ChallengeProgressDetailedDTOFromJSONTyped,
    ChallengeProgressDetailedDTOToJSON,
} from './ChallengeProgressDetailedDTO';

/**
 * 
 * @export
 * @interface ChallengeProgressDetailedDTOPagedResponse
 */
export interface ChallengeProgressDetailedDTOPagedResponse {
    /**
     * 
     * @type {number}
     * @memberof ChallengeProgressDetailedDTOPagedResponse
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof ChallengeProgressDetailedDTOPagedResponse
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ChallengeProgressDetailedDTOPagedResponse
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<ChallengeProgressDetailedDTO>}
     * @memberof ChallengeProgressDetailedDTOPagedResponse
     */
    data?: Array<ChallengeProgressDetailedDTO> | null;
}

/**
 * Check if a given object implements the ChallengeProgressDetailedDTOPagedResponse interface.
 */
export function instanceOfChallengeProgressDetailedDTOPagedResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChallengeProgressDetailedDTOPagedResponseFromJSON(json: any): ChallengeProgressDetailedDTOPagedResponse {
    return ChallengeProgressDetailedDTOPagedResponseFromJSONTyped(json, false);
}

export function ChallengeProgressDetailedDTOPagedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChallengeProgressDetailedDTOPagedResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'page': !exists(json, 'page') ? undefined : json['page'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(ChallengeProgressDetailedDTOFromJSON)),
    };
}

export function ChallengeProgressDetailedDTOPagedResponseToJSON(value?: ChallengeProgressDetailedDTOPagedResponse | null): any {
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
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(ChallengeProgressDetailedDTOToJSON)),
    };
}

