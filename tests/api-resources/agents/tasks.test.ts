// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Artilla from 'artilla';
import { Response } from 'node-fetch';

const artilla = new Artilla({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource tasks', () => {
  test('create: only required params', async () => {
    const responsePromise = artilla.agents.tasks.create('agentId', {
      task: {
        mode: 'DIRECT',
        type: 'design-logo',
        data: {
          name: 'My Company',
          what: 'A company',
          forWho: 'Everyone',
          description: ['We are a company'],
          details: ['We are a company'],
        },
      },
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
    const response = await artilla.agents.tasks.create('agentId', {
      task: {
        mode: 'DIRECT',
        type: 'design-logo',
        data: {
          name: 'My Company',
          what: 'A company',
          forWho: 'Everyone',
          description: ['We are a company'],
          details: ['We are a company'],
        },
      },
      authorization: 'authorization',
      'x-api-key': 'x-api-key',
    });
  });
});
