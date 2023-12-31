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
import type { ErrorMessage } from './ErrorMessage';
import {
    ErrorMessageFromJSON,
    ErrorMessageFromJSONTyped,
    ErrorMessageToJSON,
} from './ErrorMessage';
import type { ScoreDTO } from './ScoreDTO';
import {
    ScoreDTOFromJSON,
    ScoreDTOFromJSONTyped,
    ScoreDTOToJSON,
} from './ScoreDTO';

/**
 * 
 * @export
 * @interface ScoreDTORequestResponse
 */
export interface ScoreDTORequestResponse {
    /**
     * 
     * @type {ScoreDTO}
     * @memberof ScoreDTORequestResponse
     */
    response?: ScoreDTO;
    /**
     * 
     * @type {ErrorMessage}
     * @memberof ScoreDTORequestResponse
     */
    errorMessage?: ErrorMessage;
}

/**
 * Check if a given object implements the ScoreDTORequestResponse interface.
 */
export function instanceOfScoreDTORequestResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScoreDTORequestResponseFromJSON(json: any): ScoreDTORequestResponse {
    return ScoreDTORequestResponseFromJSONTyped(json, false);
}

export function ScoreDTORequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScoreDTORequestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'response': !exists(json, 'response') ? undefined : ScoreDTOFromJSON(json['response']),
        'errorMessage': !exists(json, 'errorMessage') ? undefined : ErrorMessageFromJSON(json['errorMessage']),
    };
}

export function ScoreDTORequestResponseToJSON(value?: ScoreDTORequestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'response': ScoreDTOToJSON(value.response),
        'errorMessage': ErrorMessageToJSON(value.errorMessage),
    };
}

