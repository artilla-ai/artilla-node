// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as UsersAPI from './users';
import * as MeAPI from './me';
import * as ReferralAPI from './referral';

export class Users extends APIResource {
  me: MeAPI.Me = new MeAPI.Me(this._client);
  referral: ReferralAPI.Referral = new ReferralAPI.Referral(this._client);

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

export interface UserOnboardingResponse {
  success: boolean;

  waitlisted: boolean;
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
  export import UserOnboardingResponse = UsersAPI.UserOnboardingResponse;
  export import UserOnboardingParams = UsersAPI.UserOnboardingParams;
  export import Me = MeAPI.Me;
  export import MeRetrieveResponse = MeAPI.MeRetrieveResponse;
  export import MeRetrieveParams = MeAPI.MeRetrieveParams;
  export import Referral = ReferralAPI.Referral;
  export import ReferralRetrieveResponse = ReferralAPI.ReferralRetrieveResponse;
  export import ReferralRetrieveParams = ReferralAPI.ReferralRetrieveParams;
}
