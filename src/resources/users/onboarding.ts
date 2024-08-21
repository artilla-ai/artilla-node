// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as OnboardingAPI from './onboarding';

export class Onboarding extends APIResource {
  /**
   * Submit basic demographic information about the user
   */
  create(
    params: OnboardingCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OnboardingCreateResponse> {
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

export interface OnboardingCreateResponse {
  success: boolean;

  waitlisted: boolean;
}

export interface OnboardingCreateParams {
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

export namespace Onboarding {
  export import OnboardingCreateResponse = OnboardingAPI.OnboardingCreateResponse;
  export import OnboardingCreateParams = OnboardingAPI.OnboardingCreateParams;
}
