// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Artilla from 'artilla';
import { Response } from 'node-fetch';

const artilla = new Artilla({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource proposals', () => {
  test('retrieve', async () => {
    const responsePromise = artilla.proposals.retrieve('proposalId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      artilla.proposals.retrieve('proposalId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Artilla.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      artilla.proposals.retrieve(
        'proposalId',
        { authorization: 'authorization', 'x-api-key': 'x-api-key' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Artilla.NotFoundError);
  });
});
