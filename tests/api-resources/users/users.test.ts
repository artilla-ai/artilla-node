// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Artilla from 'artilla';
import { Response } from 'node-fetch';

const client = new Artilla({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource users', () => {
  test('onboarding: only required params', async () => {
    const responsePromise = client.users.onboarding({
      aiExperience: ['string'],
      fullName: 'x',
      occupation: 'x',
      primaryRole: 'x',
      referralSource: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('onboarding: required and optional params', async () => {
    const response = await client.users.onboarding({
      aiExperience: ['string'],
      fullName: 'x',
      occupation: 'x',
      primaryRole: 'x',
      referralSource: 'x',
      comments: 'comments',
      company: 'company',
      otherOccupation: 'otherOccupation',
      otherReferralSource: 'otherReferralSource',
      authorization: 'authorization',
      'x-api-key': 'x-api-key',
    });
  });
});
