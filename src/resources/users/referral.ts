// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ReferralAPI from './referral';

export class Referral extends APIResource {
  /**
   * Fetch the name and display image of a referring user by the referral code
   */
  retrieve(
    referralCode: string,
    params?: ReferralRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReferralRetrieveResponse>;
  retrieve(referralCode: string, options?: Core.RequestOptions): Core.APIPromise<ReferralRetrieveResponse>;
  retrieve(
    referralCode: string,
    params: ReferralRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReferralRetrieveResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(referralCode, {}, params);
    }
    const { authorization, 'x-api-key': xAPIKey } = params;
    return this._client.get(`/api/v1/user/referral/${referralCode}`, {
      ...options,
      headers: {
        ...(authorization != null ? { authorization: authorization } : undefined),
        ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
        ...options?.headers,
      },
    });
  }
}

export interface ReferralRetrieveResponse {
  referralRecorded: boolean;

  success: boolean;

  user: ReferralRetrieveResponse.User;
}

export namespace ReferralRetrieveResponse {
  export interface User {
    image: string | null;

    name: string | null;
  }
}

export interface ReferralRetrieveParams {
  /**
   * This is your JWT tolen
   */
  authorization?: string;

  /**
   * A valid API key
   */
  'x-api-key'?: string;
}

export namespace Referral {
  export import ReferralRetrieveResponse = ReferralAPI.ReferralRetrieveResponse;
  export import ReferralRetrieveParams = ReferralAPI.ReferralRetrieveParams;
}
