// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as UsersAPI from './users';
import * as ReferralAPI from './referral';

export class Users extends APIResource {
  referral: ReferralAPI.Referral = new ReferralAPI.Referral(this._client);

  /**
   * Fetches the currently logged in user along with a list of their agent.
   */
  me(params?: UserMeParams, options?: Core.RequestOptions): Core.APIPromise<UserMeResponse>;
  me(options?: Core.RequestOptions): Core.APIPromise<UserMeResponse>;
  me(
    params: UserMeParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserMeResponse> {
    if (isRequestOptions(params)) {
      return this.me({}, params);
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

  /**
   * Submit basic demographic information about the user
   */
  onboarding(
    params: UserOnboardingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserOnboardingResponse> {
    const { authorization, 'x-api-key': xAPIKey, ...body } = params;
    return this._client.post('/api/v1/user/onboarding', {
      body,
      ...options,
      headers: {
        ...(authorization != null ? { authorization: authorization } : undefined),
        ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
        ...options?.headers,
      },
    });
  }
}

export interface UserMeResponse {
  agents: Array<UserMeResponse.Agent>;

  /**
   * Indicates if the request was successful
   */
  success: boolean;

  /**
   * The current user
   */
  user: UserMeResponse.User;
}

export namespace UserMeResponse {
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

export interface UserOnboardingResponse {
  success: boolean;

  waitlisted: boolean;
}

export interface UserMeParams {
  /**
   * This is your JWT tolen
   */
  authorization?: string;

  /**
   * A valid API key
   */
  'x-api-key'?: string;
}

export interface UserOnboardingParams {
  /**
   * Body param:
   */
  aiExperience: Array<string>;

  /**
   * Body param:
   */
  fullName: string;

  /**
   * Body param:
   */
  occupation: string;

  /**
   * Body param:
   */
  primaryRole: string;

  /**
   * Body param:
   */
  referralSource: string;

  /**
   * Body param:
   */
  comments?: string;

  /**
   * Body param:
   */
  company?: string;

  /**
   * Body param:
   */
  otherOccupation?: string;

  /**
   * Body param:
   */
  otherReferralSource?: string;

  /**
   * Header param: This is your JWT tolen
   */
  authorization?: string;

  /**
   * Header param: A valid API key
   */
  'x-api-key'?: string;
}

export namespace Users {
  export import UserMeResponse = UsersAPI.UserMeResponse;
  export import UserOnboardingResponse = UsersAPI.UserOnboardingResponse;
  export import UserMeParams = UsersAPI.UserMeParams;
  export import UserOnboardingParams = UsersAPI.UserOnboardingParams;
  export import Referral = ReferralAPI.Referral;
  export import ReferralRetrieveResponse = ReferralAPI.ReferralRetrieveResponse;
  export import ReferralRetrieveParams = ReferralAPI.ReferralRetrieveParams;
}
