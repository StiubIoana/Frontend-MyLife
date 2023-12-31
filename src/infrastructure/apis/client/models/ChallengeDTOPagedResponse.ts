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
import type { ChallengeDTO } from './ChallengeDTO';
import {
    ChallengeDTOFromJSON,
    ChallengeDTOFromJSONTyped,
    ChallengeDTOToJSON,
} from './ChallengeDTO';

/**
 * 
 * @export
 * @interface ChallengeDTOPagedResponse
 */
export interface ChallengeDTOPagedResponse {
    /**
     * 
     * @type {number}
     * @memberof ChallengeDTOPagedResponse
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof ChallengeDTOPagedResponse
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ChallengeDTOPagedResponse
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<ChallengeDTO>}
     * @memberof ChallengeDTOPagedResponse
     */
    data?: Array<ChallengeDTO> | null;
}

/**
 * Check if a given object implements the ChallengeDTOPagedResponse interface.
 */
export function instanceOfChallengeDTOPagedResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChallengeDTOPagedResponseFromJSON(json: any): ChallengeDTOPagedResponse {
    return ChallengeDTOPagedResponseFromJSONTyped(json, false);
}

export function ChallengeDTOPagedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChallengeDTOPagedResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'page': !exists(json, 'page') ? undefined : json['page'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(ChallengeDTOFromJSON)),
    };
}

export function ChallengeDTOPagedResponseToJSON(value?: ChallengeDTOPagedResponse | null): any {
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
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(ChallengeDTOToJSON)),
    };
}

