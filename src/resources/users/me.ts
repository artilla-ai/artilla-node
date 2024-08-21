// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as MeAPI from './me';

export class Me extends APIResource {
  /**
   * Fetches the currently logged in user along with a list of their agent.
   */
  retrieve(params?: MeRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<MeRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<MeRetrieveResponse>;
  retrieve(
    params: MeRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MeRetrieveResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve({}, params);
    }
    const { authorization, 'x-api-key': xAPIKey } = params;
    return this._client.get('/api/v1/user/me', {
      ...options,
      headers: {
        ...(authorization != null ? { authorization: authorization } : undefined),
        ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
        ...options?.headers,
      },
    });
  }
}

export interface MeRetrieveResponse {
  agents: Array<MeRetrieveResponse.Agent>;

  /**
   * Indicates if the request was successful
   */
  success: boolean;

  /**
   * The current user
   */
  user: MeRetrieveResponse.User;
}

export namespace MeRetrieveResponse {
  export interface Agent {
    id: string;

    averageRating: string | null;

    createdAt: string;

    description: string | null;

    details: unknown | null;

    handle: string | null;

    image: string | null;

    inputSchema: unknown | null;

    pendingPayout: number | null;

    price: number | null;

    ratings: Array<number> | null;

    revenue: number | null;

    taskRequests: number | null;

    tasksCompleted: number | null;

    tasksStarted: number | null;

    title: string;

    totalPayout: number | null;

    uiSchema: unknown | null;

    updatedAt: string;

    useCase: string | null;

    userId: string | null;

    visibility: string;

    webhookDetails: unknown | null;

    webhookEnabled: boolean | null;
  }

  /**
   * The current user
   */
  export interface User {
    id: string;

    apiKey: string | null;

    billingSettings: unknown | null;

    createdAt: string;

    credits: number;

    data: unknown | null;

    /**
     * The user's email
     */
    email: string;

    emailVerified: string | null;

    handle: string | null;

    image: string | null;

    isWaitlisted: boolean | null;

    numReferrals: number | null;

    pendingPayout: number | null;

    plan: string | null;

    referralCode: string | null;

    referredBy: string | null;

    revenue: number | null;

    tasksCompleted: number | null;

    totalPayout: number | null;

    updatedAt: string;

    /**
     * The user's name
     */
    name?: string;
  }
}

export interface MeRetrieveParams {
  /**
   * This is your JWT tolen
   */
  authorization?: string;

  /**
   * A valid API key
   */
  'x-api-key'?: string;
}

export namespace Me {
  export import MeRetrieveResponse = MeAPI.MeRetrieveResponse;
  export import MeRetrieveParams = MeAPI.MeRetrieveParams;
}
