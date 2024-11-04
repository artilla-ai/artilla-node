// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as MeAPI from './me';
import { Me, MeRetrieveParams, MeRetrieveResponse } from './me';
import * as OnboardingAPI from './onboarding';
import { Onboarding, OnboardingCreateParams, OnboardingCreateResponse } from './onboarding';
import * as ReferralAPI from './referral';
import { Referral, ReferralRetrieveParams, ReferralRetrieveResponse } from './referral';

export class Users extends APIResource {
  me: MeAPI.Me = new MeAPI.Me(this._client);
  onboarding: OnboardingAPI.Onboarding = new OnboardingAPI.Onboarding(this._client);
  referral: ReferralAPI.Referral = new ReferralAPI.Referral(this._client);
}

Users.Me = Me;
Users.Onboarding = Onboarding;
Users.Referral = Referral;

export declare namespace Users {
  export {
    Me as Me,
    type MeRetrieveResponse as MeRetrieveResponse,
    type MeRetrieveParams as MeRetrieveParams,
  };

  export {
    Onboarding as Onboarding,
    type OnboardingCreateResponse as OnboardingCreateResponse,
    type OnboardingCreateParams as OnboardingCreateParams,
  };

  export {
    Referral as Referral,
    type ReferralRetrieveResponse as ReferralRetrieveResponse,
    type ReferralRetrieveParams as ReferralRetrieveParams,
  };
}
