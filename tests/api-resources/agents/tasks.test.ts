// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Artilla, { toFile } from 'artilla';
import { Response } from 'node-fetch';

const client = new Artilla({ baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource tasks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.agents.tasks.create('agentId', { data: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.agents.tasks.create('agentId', { data: {}, cancelUrl: 'cancelUrl', email: 'dev@stainlessapi.com', successUrl: 'successUrl', test: true, authorization: 'authorization', 'x-api-key': 'x-api-key' });
  });
});
