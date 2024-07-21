// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Artilla from 'artilla';
import { Response } from 'node-fetch';

const artilla = new Artilla({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource schema', () => {
  test('update: only required params', async () => {
    const responsePromise = artilla.agents.schema.update('agentId', {
      inputSchema: { foo: {} },
      uiSchema: { foo: {} },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await artilla.agents.schema.update('agentId', {
      inputSchema: { foo: {} },
      uiSchema: { foo: {} },
      authorization: 'authorization',
      'x-api-key': 'x-api-key',
    });
  });
});
