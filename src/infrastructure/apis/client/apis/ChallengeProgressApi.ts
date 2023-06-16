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


import * as runtime from '../runtime';
import type {
  ChallengeProgressAddDTO,
  ChallengeProgressDTORequestResponse,
  ChallengeProgressDetailedDTOPagedResponseRequestResponse,
  ChallengeProgressPagedResponseRequestResponse,
  ChallengeProgressUpdateDTO,
  RequestResponse,
} from '../models';
import {
    ChallengeProgressAddDTOFromJSON,
    ChallengeProgressAddDTOToJSON,
    ChallengeProgressDTORequestResponseFromJSON,
    ChallengeProgressDTORequestResponseToJSON,
    ChallengeProgressDetailedDTOPagedResponseRequestResponseFromJSON,
    ChallengeProgressDetailedDTOPagedResponseRequestResponseToJSON,
    ChallengeProgressPagedResponseRequestResponseFromJSON,
    ChallengeProgressPagedResponseRequestResponseToJSON,
    ChallengeProgressUpdateDTOFromJSON,
    ChallengeProgressUpdateDTOToJSON,
    RequestResponseFromJSON,
    RequestResponseToJSON,
} from '../models';

export interface ApiChallengeProgressAddForCurrentUserChallengeIdPostRequest {
    challengeId: string;
}

export interface ApiChallengeProgressAddPostRequest {
    challengeProgressAddDTO?: ChallengeProgressAddDTO;
}

export interface ApiChallengeProgressDeleteByIdIdDeleteRequest {
    id: string;
}

export interface ApiChallengeProgressDeleteForCurrentUserChallengeIdDeleteRequest {
    challengeId: string;
}

export interface ApiChallengeProgressDeleteUserIdChallengeIdDeleteRequest {
    userId: string;
    challengeId: string;
}

export interface ApiChallengeProgressGetByCurrentUserGetRequest {
    page?: number;
    pageSize?: number;
}

export interface ApiChallengeProgressGetByIdIdGetRequest {
    id: string;
}

export interface ApiChallengeProgressGetByUserIdUserIdGetRequest {
    userId: string;
    page?: number;
    pageSize?: number;
}

export interface ApiChallengeProgressGetUserIdChallengeIdGetRequest {
    userId: string;
    challengeId: string;
}

export interface ApiChallengeProgressUpdatePutRequest {
    challengeProgressUpdateDTO?: ChallengeProgressUpdateDTO;
}

/**
 * 
 */
export class ChallengeProgressApi extends runtime.BaseAPI {

    /**
     */
    async apiChallengeProgressAddForCurrentUserChallengeIdPostRaw(requestParameters: ApiChallengeProgressAddForCurrentUserChallengeIdPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        if (requestParameters.challengeId === null || requestParameters.challengeId === undefined) {
            throw new runtime.RequiredError('challengeId','Required parameter requestParameters.challengeId was null or undefined when calling apiChallengeProgressAddForCurrentUserChallengeIdPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/ChallengeProgress/AddForCurrentUser/{challengeId}`.replace(`{${"challengeId"}}`, encodeURIComponent(String(requestParameters.challengeId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiChallengeProgressAddForCurrentUserChallengeIdPost(requestParameters: ApiChallengeProgressAddForCurrentUserChallengeIdPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiChallengeProgressAddForCurrentUserChallengeIdPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiChallengeProgressAddPostRaw(requestParameters: ApiChallengeProgressAddPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/ChallengeProgress/Add`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ChallengeProgressAddDTOToJSON(requestParameters.challengeProgressAddDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiChallengeProgressAddPost(requestParameters: ApiChallengeProgressAddPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiChallengeProgressAddPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiChallengeProgressDeleteByIdIdDeleteRaw(requestParameters: ApiChallengeProgressDeleteByIdIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiChallengeProgressDeleteByIdIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/ChallengeProgress/DeleteById/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiChallengeProgressDeleteByIdIdDelete(requestParameters: ApiChallengeProgressDeleteByIdIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiChallengeProgressDeleteByIdIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiChallengeProgressDeleteForCurrentUserChallengeIdDeleteRaw(requestParameters: ApiChallengeProgressDeleteForCurrentUserChallengeIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        if (requestParameters.challengeId === null || requestParameters.challengeId === undefined) {
            throw new runtime.RequiredError('challengeId','Required parameter requestParameters.challengeId was null or undefined when calling apiChallengeProgressDeleteForCurrentUserChallengeIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/ChallengeProgress/DeleteForCurrentUser/{challengeId}`.replace(`{${"challengeId"}}`, encodeURIComponent(String(requestParameters.challengeId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiChallengeProgressDeleteForCurrentUserChallengeIdDelete(requestParameters: ApiChallengeProgressDeleteForCurrentUserChallengeIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiChallengeProgressDeleteForCurrentUserChallengeIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiChallengeProgressDeleteUserIdChallengeIdDeleteRaw(requestParameters: ApiChallengeProgressDeleteUserIdChallengeIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling apiChallengeProgressDeleteUserIdChallengeIdDelete.');
        }

        if (requestParameters.challengeId === null || requestParameters.challengeId === undefined) {
            throw new runtime.RequiredError('challengeId','Required parameter requestParameters.challengeId was null or undefined when calling apiChallengeProgressDeleteUserIdChallengeIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/ChallengeProgress/Delete/{userId}/{challengeId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))).replace(`{${"challengeId"}}`, encodeURIComponent(String(requestParameters.challengeId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiChallengeProgressDeleteUserIdChallengeIdDelete(requestParameters: ApiChallengeProgressDeleteUserIdChallengeIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiChallengeProgressDeleteUserIdChallengeIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiChallengeProgressGetByCurrentUserGetRaw(requestParameters: ApiChallengeProgressGetByCurrentUserGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChallengeProgressDetailedDTOPagedResponseRequestResponse>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['Page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['PageSize'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/ChallengeProgress/GetByCurrentUser`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChallengeProgressDetailedDTOPagedResponseRequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiChallengeProgressGetByCurrentUserGet(requestParameters: ApiChallengeProgressGetByCurrentUserGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChallengeProgressDetailedDTOPagedResponseRequestResponse> {
        const response = await this.apiChallengeProgressGetByCurrentUserGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiChallengeProgressGetByIdIdGetRaw(requestParameters: ApiChallengeProgressGetByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChallengeProgressDTORequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiChallengeProgressGetByIdIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/ChallengeProgress/GetById/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChallengeProgressDTORequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiChallengeProgressGetByIdIdGet(requestParameters: ApiChallengeProgressGetByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChallengeProgressDTORequestResponse> {
        const response = await this.apiChallengeProgressGetByIdIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiChallengeProgressGetByUserIdUserIdGetRaw(requestParameters: ApiChallengeProgressGetByUserIdUserIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChallengeProgressPagedResponseRequestResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling apiChallengeProgressGetByUserIdUserIdGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['Page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['PageSize'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/ChallengeProgress/GetByUserId/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChallengeProgressPagedResponseRequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiChallengeProgressGetByUserIdUserIdGet(requestParameters: ApiChallengeProgressGetByUserIdUserIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChallengeProgressPagedResponseRequestResponse> {
        const response = await this.apiChallengeProgressGetByUserIdUserIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiChallengeProgressGetUserIdChallengeIdGetRaw(requestParameters: ApiChallengeProgressGetUserIdChallengeIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChallengeProgressDTORequestResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling apiChallengeProgressGetUserIdChallengeIdGet.');
        }

        if (requestParameters.challengeId === null || requestParameters.challengeId === undefined) {
            throw new runtime.RequiredError('challengeId','Required parameter requestParameters.challengeId was null or undefined when calling apiChallengeProgressGetUserIdChallengeIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/ChallengeProgress/Get/{userId}/{challengeId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))).replace(`{${"challengeId"}}`, encodeURIComponent(String(requestParameters.challengeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChallengeProgressDTORequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiChallengeProgressGetUserIdChallengeIdGet(requestParameters: ApiChallengeProgressGetUserIdChallengeIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChallengeProgressDTORequestResponse> {
        const response = await this.apiChallengeProgressGetUserIdChallengeIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiChallengeProgressUpdatePutRaw(requestParameters: ApiChallengeProgressUpdatePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/ChallengeProgress/Update`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ChallengeProgressUpdateDTOToJSON(requestParameters.challengeProgressUpdateDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiChallengeProgressUpdatePut(requestParameters: ApiChallengeProgressUpdatePutRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiChallengeProgressUpdatePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
