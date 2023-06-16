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
 * @interface ScoreUpdateDTO
 */
export interface ScoreUpdateDTO {
    /**
     * 
     * @type {string}
     * @memberof ScoreUpdateDTO
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof ScoreUpdateDTO
     */
    attributeId?: string;
    /**
     * 
     * @type {number}
     * @memberof ScoreUpdateDTO
     */
    scorePoints?: number | null;
}

/**
 * Check if a given object implements the ScoreUpdateDTO interface.
 */
export function instanceOfScoreUpdateDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScoreUpdateDTOFromJSON(json: any): ScoreUpdateDTO {
    return ScoreUpdateDTOFromJSONTyped(json, false);
}

export function ScoreUpdateDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScoreUpdateDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'attributeId': !exists(json, 'attributeId') ? undefined : json['attributeId'],
        'scorePoints': !exists(json, 'scorePoints') ? undefined : json['scorePoints'],
    };
}

export function ScoreUpdateDTOToJSON(value?: ScoreUpdateDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'attributeId': value.attributeId,
        'scorePoints': value.scorePoints,
    };
}

