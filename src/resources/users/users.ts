// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as MeAPI from './me';
import * as OnboardingAPI from './onboarding';
import * as ReferralAPI from './referral';

export class Users extends APIResource {
  me: MeAPI.Me = new MeAPI.Me(this._client);
  onboarding: OnboardingAPI.Onboarding = new OnboardingAPI.Onboarding(this._client);
  referral: ReferralAPI.Referral = new ReferralAPI.Referral(this._client);
}

export namespace Users {
  export import Me = MeAPI.Me;
  export import MeRetrieveResponse = MeAPI.MeRetrieveResponse;
  export import MeRetrieveParams = MeAPI.MeRetrieveParams;
  export import Onboarding = OnboardingAPI.Onboarding;
  export import OnboardingCreateResponse = OnboardingAPI.OnboardingCreateResponse;
  export import OnboardingCreateParams = OnboardingAPI.OnboardingCreateParams;
  export import Referral = ReferralAPI.Referral;
  export import ReferralRetrieveResponse = ReferralAPI.ReferralRetrieveResponse;
  export import ReferralRetrieveParams = ReferralAPI.ReferralRetrieveParams;
}
