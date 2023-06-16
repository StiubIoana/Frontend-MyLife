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
import type { ChallengeAttributeWithScoresDTOPagedResponse } from './ChallengeAttributeWithScoresDTOPagedResponse';
import {
    ChallengeAttributeWithScoresDTOPagedResponseFromJSON,
    ChallengeAttributeWithScoresDTOPagedResponseFromJSONTyped,
    ChallengeAttributeWithScoresDTOPagedResponseToJSON,
} from './ChallengeAttributeWithScoresDTOPagedResponse';
import type { ErrorMessage } from './ErrorMessage';
import {
    ErrorMessageFromJSON,
    ErrorMessageFromJSONTyped,
    ErrorMessageToJSON,
} from './ErrorMessage';

/**
 * 
 * @export
 * @interface ChallengeAttributeWithScoresDTOPagedResponseRequestResponse
 */
export interface ChallengeAttributeWithScoresDTOPagedResponseRequestResponse {
    /**
     * 
     * @type {ChallengeAttributeWithScoresDTOPagedResponse}
     * @memberof ChallengeAttributeWithScoresDTOPagedResponseRequestResponse
     */
    response?: ChallengeAttributeWithScoresDTOPagedResponse;
    /**
     * 
     * @type {ErrorMessage}
     * @memberof ChallengeAttributeWithScoresDTOPagedResponseRequestResponse
     */
    errorMessage?: ErrorMessage;
}

/**
 * Check if a given object implements the ChallengeAttributeWithScoresDTOPagedResponseRequestResponse interface.
 */
export function instanceOfChallengeAttributeWithScoresDTOPagedResponseRequestResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChallengeAttributeWithScoresDTOPagedResponseRequestResponseFromJSON(json: any): ChallengeAttributeWithScoresDTOPagedResponseRequestResponse {
    return ChallengeAttributeWithScoresDTOPagedResponseRequestResponseFromJSONTyped(json, false);
}

export function ChallengeAttributeWithScoresDTOPagedResponseRequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChallengeAttributeWithScoresDTOPagedResponseRequestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'response': !exists(json, 'response') ? undefined : ChallengeAttributeWithScoresDTOPagedResponseFromJSON(json['response']),
        'errorMessage': !exists(json, 'errorMessage') ? undefined : ErrorMessageFromJSON(json['errorMessage']),
    };
}

export function ChallengeAttributeWithScoresDTOPagedResponseRequestResponseToJSON(value?: ChallengeAttributeWithScoresDTOPagedResponseRequestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'response': ChallengeAttributeWithScoresDTOPagedResponseToJSON(value.response),
        'errorMessage': ErrorMessageToJSON(value.errorMessage),
    };
}
