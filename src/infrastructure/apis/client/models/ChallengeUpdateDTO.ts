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
 * @interface ChallengeUpdateDTO
 */
export interface ChallengeUpdateDTO {
    /**
     * 
     * @type {string}
     * @memberof ChallengeUpdateDTO
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ChallengeUpdateDTO
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChallengeUpdateDTO
     */
    description?: string | null;
}

/**
 * Check if a given object implements the ChallengeUpdateDTO interface.
 */
export function instanceOfChallengeUpdateDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChallengeUpdateDTOFromJSON(json: any): ChallengeUpdateDTO {
    return ChallengeUpdateDTOFromJSONTyped(json, false);
}

export function ChallengeUpdateDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChallengeUpdateDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function ChallengeUpdateDTOToJSON(value?: ChallengeUpdateDTO | null): any {
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
