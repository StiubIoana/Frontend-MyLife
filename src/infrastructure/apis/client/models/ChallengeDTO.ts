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
/**
 * 
 * @export
 * @interface ChallengeDTO
 */
export interface ChallengeDTO {
    /**
     * 
     * @type {string}
     * @memberof ChallengeDTO
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ChallengeDTO
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChallengeDTO
     */
    description?: string | null;
}

/**
 * Check if a given object implements the ChallengeDTO interface.
 */
export function instanceOfChallengeDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChallengeDTOFromJSON(json: any): ChallengeDTO {
    return ChallengeDTOFromJSONTyped(json, false);
}

export function ChallengeDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChallengeDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function ChallengeDTOToJSON(value?: ChallengeDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'description': value.description,
    };
}

