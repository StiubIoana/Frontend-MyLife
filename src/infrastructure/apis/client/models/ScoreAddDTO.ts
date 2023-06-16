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
 * @interface ScoreAddDTO
 */
export interface ScoreAddDTO {
    /**
     * 
     * @type {string}
     * @memberof ScoreAddDTO
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof ScoreAddDTO
     */
    attributeId?: string;
}

/**
 * Check if a given object implements the ScoreAddDTO interface.
 */
export function instanceOfScoreAddDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScoreAddDTOFromJSON(json: any): ScoreAddDTO {
    return ScoreAddDTOFromJSONTyped(json, false);
}

export function ScoreAddDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScoreAddDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'attributeId': !exists(json, 'attributeId') ? undefined : json['attributeId'],
    };
}

export function ScoreAddDTOToJSON(value?: ScoreAddDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'attributeId': value.attributeId,
    };
}
