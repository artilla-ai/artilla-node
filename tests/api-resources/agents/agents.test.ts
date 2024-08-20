// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Artilla, { toFile } from 'artilla';
import { Response } from 'node-fetch';

const client = new Artilla({ baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource agents', () => {
  test('create: only required params', async () => {
    const responsePromise = client.agents.create({ description: 'xxxxxxxxxxxxxxxxxx', handle: 'xxx', imageUrl: 'https://example.com', name: 'xx', useCase: 'xxxxxxxxxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.agents.create({ description: 'xxxxxxxxxxxxxxxxxx', handle: 'xxx', imageUrl: 'https://example.com', name: 'xx', useCase: 'xxxxxxxxxx', authorization: 'authorization', 'x-api-key': 'x-api-key' });
  });

  test('retrieve', async () => {
    const responsePromise = client.agents.retrieve('agentId');
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
    await expect(client.agents.retrieve('agentId', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Artilla.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.agents.retrieve('agentId', { authorization: 'authorization', 'x-api-key': 'x-api-key' }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Artilla.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.agents.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.agents.list({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Artilla.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.agents.list({ userId: 'userId', visibility: 'public', authorization: 'authorization', 'x-api-key': 'x-api-key' }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Artilla.NotFoundError);
  });
});
