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
import type { ChallengeProgress } from './ChallengeProgress';
import {
    ChallengeProgressFromJSON,
    ChallengeProgressFromJSONTyped,
    ChallengeProgressToJSON,
} from './ChallengeProgress';

/**
 * 
 * @export
 * @interface ChallengeProgressPagedResponse
 */
export interface ChallengeProgressPagedResponse {
    /**
     * 
     * @type {number}
     * @memberof ChallengeProgressPagedResponse
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof ChallengeProgressPagedResponse
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ChallengeProgressPagedResponse
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<ChallengeProgress>}
     * @memberof ChallengeProgressPagedResponse
     */
    data?: Array<ChallengeProgress> | null;
}

/**
 * Check if a given object implements the ChallengeProgressPagedResponse interface.
 */
export function instanceOfChallengeProgressPagedResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChallengeProgressPagedResponseFromJSON(json: any): ChallengeProgressPagedResponse {
    return ChallengeProgressPagedResponseFromJSONTyped(json, false);
}

export function ChallengeProgressPagedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChallengeProgressPagedResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'page': !exists(json, 'page') ? undefined : json['page'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(ChallengeProgressFromJSON)),
    };
}

export function ChallengeProgressPagedResponseToJSON(value?: ChallengeProgressPagedResponse | null): any {
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
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(ChallengeProgressToJSON)),
    };
}

