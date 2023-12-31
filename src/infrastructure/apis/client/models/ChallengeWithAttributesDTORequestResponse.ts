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
import type { ChallengeWithAttributesDTO } from './ChallengeWithAttributesDTO';
import {
    ChallengeWithAttributesDTOFromJSON,
    ChallengeWithAttributesDTOFromJSONTyped,
    ChallengeWithAttributesDTOToJSON,
} from './ChallengeWithAttributesDTO';
import type { ErrorMessage } from './ErrorMessage';
import {
    ErrorMessageFromJSON,
    ErrorMessageFromJSONTyped,
    ErrorMessageToJSON,
} from './ErrorMessage';

/**
 * 
 * @export
 * @interface ChallengeWithAttributesDTORequestResponse
 */
export interface ChallengeWithAttributesDTORequestResponse {
    /**
     * 
     * @type {ChallengeWithAttributesDTO}
     * @memberof ChallengeWithAttributesDTORequestResponse
     */
    response?: ChallengeWithAttributesDTO;
    /**
     * 
     * @type {ErrorMessage}
     * @memberof ChallengeWithAttributesDTORequestResponse
     */
    errorMessage?: ErrorMessage;
}

/**
 * Check if a given object implements the ChallengeWithAttributesDTORequestResponse interface.
 */
export function instanceOfChallengeWithAttributesDTORequestResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChallengeWithAttributesDTORequestResponseFromJSON(json: any): ChallengeWithAttributesDTORequestResponse {
    return ChallengeWithAttributesDTORequestResponseFromJSONTyped(json, false);
}

export function ChallengeWithAttributesDTORequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChallengeWithAttributesDTORequestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'response': !exists(json, 'response') ? undefined : ChallengeWithAttributesDTOFromJSON(json['response']),
        'errorMessage': !exists(json, 'errorMessage') ? undefined : ErrorMessageFromJSON(json['errorMessage']),
    };
}

export function ChallengeWithAttributesDTORequestResponseToJSON(value?: ChallengeWithAttributesDTORequestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'response': ChallengeWithAttributesDTOToJSON(value.response),
        'errorMessage': ErrorMessageToJSON(value.errorMessage),
    };
}

