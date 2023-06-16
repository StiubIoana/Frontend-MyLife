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
import type { Challenge } from './Challenge';
import {
    ChallengeFromJSON,
    ChallengeFromJSONTyped,
    ChallengeToJSON,
} from './Challenge';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';

/**
 * 
 * @export
 * @interface ChallengeAttribute
 */
export interface ChallengeAttribute {
    /**
     * 
     * @type {string}
     * @memberof ChallengeAttribute
     */
    id?: string;
    /**
     * 
     * @type {Date}
     * @memberof ChallengeAttribute
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ChallengeAttribute
     */
    updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof ChallengeAttribute
     */
    name?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ChallengeAttribute
     */
    points?: number;
    /**
     * 
     * @type {Array<Challenge>}
     * @memberof ChallengeAttribute
     */
    challenges?: Array<Challenge> | null;
    /**
     * 
     * @type {Array<Score>}
     * @memberof ChallengeAttribute
     */
    scores?: Array<Score> | null;
}

/**
 * Check if a given object implements the ChallengeAttribute interface.
 */
export function instanceOfChallengeAttribute(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChallengeAttributeFromJSON(json: any): ChallengeAttribute {
    return ChallengeAttributeFromJSONTyped(json, false);
}

export function ChallengeAttributeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChallengeAttribute {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'points': !exists(json, 'points') ? undefined : json['points'],
        'challenges': !exists(json, 'challenges') ? undefined : (json['challenges'] === null ? null : (json['challenges'] as Array<any>).map(ChallengeFromJSON)),
        'scores': !exists(json, 'scores') ? undefined : (json['scores'] === null ? null : (json['scores'] as Array<any>).map(ScoreFromJSON)),
    };
}

export function ChallengeAttributeToJSON(value?: ChallengeAttribute | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'name': value.name,
        'points': value.points,
        'challenges': value.challenges === undefined ? undefined : (value.challenges === null ? null : (value.challenges as Array<any>).map(ChallengeToJSON)),
        'scores': value.scores === undefined ? undefined : (value.scores === null ? null : (value.scores as Array<any>).map(ScoreToJSON)),
    };
}

