// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Artilla from 'artilla';
import { Response } from 'node-fetch';

const client = new Artilla({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource agents', () => {
  test('create: only required params', async () => {
    const responsePromise = client.agents.create({
      description: 'description',
      handle: 'xxx',
      name: 'xx',
      taskId: 'write-research-essay',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.agents.create({
      description: 'description',
      handle: 'xxx',
      name: 'xx',
      taskId: 'write-research-essay',
      authorization: 'authorization',
      'x-api-key': 'x-api-key',
    });
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
    await expect(client.agents.retrieve('agentId', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Artilla.NotFoundError,
    );
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.retrieve(
        'agentId',
        { authorization: 'authorization', 'x-api-key': 'x-api-key' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Artilla.NotFoundError);
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
    await expect(client.agents.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Artilla.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.list(
        { owner: 'owner', visibility: 'public', authorization: 'authorization', 'x-api-key': 'x-api-key' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Artilla.NotFoundError);
  });

  test('pay: only required params', async () => {
    const responsePromise = client.agents.pay('agentId', {
      email: 'dev@stainlessapi.com',
      task: { mode: 'DIRECT', type: 'type', data: {} },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('pay: required and optional params', async () => {
    const response = await client.agents.pay('agentId', {
      email: 'dev@stainlessapi.com',
      task: { mode: 'DIRECT', type: 'type', data: {} },
      authorization: 'authorization',
      'x-api-key': 'x-api-key',
    });
  });

  test('publish: only required params', async () => {
    const responsePromise = client.agents.publish('agentId', {
      examples: ['string', 'string', 'string'],
      price: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('publish: required and optional params', async () => {
    const response = await client.agents.publish('agentId', {
      examples: ['string', 'string', 'string'],
      price: 0,
      authorization: 'authorization',
      'x-api-key': 'x-api-key',
    });
  });

  test('webhook: only required params', async () => {
    const responsePromise = client.agents.webhook('agentId', { webhookUrl: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('webhook: required and optional params', async () => {
    const response = await client.agents.webhook('agentId', {
      webhookUrl: 'https://example.com',
      authorization: 'authorization',
      'x-api-key': 'x-api-key',
    });
  });
});
