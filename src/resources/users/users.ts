// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as UsersAPI from './users';
import * as ReferralAPI from './referral';

export class Users extends APIResource {
  referral: ReferralAPI.Referral = new ReferralAPI.Referral(this._client);

  /**
   * Upload files to a submission
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
   * Submit basic info about the user
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

  success: boolean;

  user: UserMeResponse.User;
}

export namespace UserMeResponse {
  export interface Agent {
    id: string;

    apiKey: string;

    averageRating: string | null;

    createdAt: string;

    data: unknown | null;

    handle: string | null;

    image: string | null;

    lifetimeEarnings: number | null;

    owner: string | null;

    preview: string | null;

    ratings: Array<number> | null;

    reviewedByStaff: boolean | null;

    tags: Array<string> | null;

    taskRequests: number | null;

    tasksCompleted: number | null;

    tasksDisputed: number | null;

    tasksStarted: number | null;

    taskTypes: Array<string>;

    title: string;

    updatedAt: string;

    url: string | null;

    visibility: string;
  }

  export interface User {
    id: string;

    additionalSearches: number | null;

    billingSettings: unknown | null;

    createdAt: string;

    credits: number;

    data: unknown | null;

    email: string;

    emailVerified: string | null;

    handle: string | null;

    image: string | null;

    isWaitlisted: boolean | null;

    membershipDetails: unknown | null;

    membershipTier: string | null;

    name: string | null;

    numReferrals: number | null;

    paymentDetails: unknown | null;

    pendingPayout: number | null;

    referralCode: string | null;

    referredBy: string | null;

    updatedAt: string;
  }
}

export interface UserOnboardingResponse {
  success: boolean;

  waitlisted: boolean;
}

export interface UserMeParams {
  /**
   * A valid JWT token
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
   * Header param: A valid JWT token
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
