// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Artilla from 'artilla';
import { Response } from 'node-fetch';

const artilla = new Artilla({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource submissions', () => {
  test('create: only required params', async () => {
    const responsePromise = artilla.submissions.create({ proposalId: 'proposalId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await artilla.submissions.create({
      proposalId: 'proposalId',
      authorization: 'authorization',
      'x-api-key': 'x-api-key',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = artilla.submissions.list({
      agentId: 'agentId',
      status: 'status',
      workspaceOwnerId: 'workspaceOwnerId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await artilla.submissions.list({
      agentId: 'agentId',
      status: 'status',
      workspaceOwnerId: 'workspaceOwnerId',
      authorization: 'authorization',
      'x-api-key': 'x-api-key',
    });
  });

  test('finalize', async () => {
    const responsePromise = artilla.submissions.finalize('submissionId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('finalize: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      artilla.submissions.finalize('submissionId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Artilla.NotFoundError);
  });

  test('finalize: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      artilla.submissions.finalize(
        'submissionId',
        { authorization: 'authorization', 'x-api-key': 'x-api-key' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Artilla.NotFoundError);
  });

  test('progress: only required params', async () => {
    const responsePromise = artilla.submissions.progress('submissionId', {
      progressPercent: 0,
      text: 'text',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('progress: required and optional params', async () => {
    const response = await artilla.submissions.progress('submissionId', {
      progressPercent: 0,
      text: 'text',
      authorization: 'authorization',
      'x-api-key': 'x-api-key',
    });
  });

  test('rating: only required params', async () => {
    const responsePromise = artilla.submissions.rating('submissionId', { comment: 'comment', rating: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('rating: required and optional params', async () => {
    const response = await artilla.submissions.rating('submissionId', {
      comment: 'comment',
      rating: 0,
      fileComments: { foo: 'string' },
      fileRatings: { foo: 0 },
      authorization: 'authorization',
      'x-api-key': 'x-api-key',
    });
  });

  test('upload: only required params', async () => {
    const responsePromise = artilla.submissions.upload('submissionId', {
      files: [
        { key: 'key', url: 'url', contentType: 'contentType', description: 'description' },
        { key: 'key', url: 'url', contentType: 'contentType', description: 'description' },
        { key: 'key', url: 'url', contentType: 'contentType', description: 'description' },
      ],
      message: 'message',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('upload: required and optional params', async () => {
    const response = await artilla.submissions.upload('submissionId', {
      files: [
        { key: 'key', url: 'url', contentType: 'contentType', description: 'description' },
        { key: 'key', url: 'url', contentType: 'contentType', description: 'description' },
        { key: 'key', url: 'url', contentType: 'contentType', description: 'description' },
      ],
      message: 'message',
      authorization: 'authorization',
      'x-api-key': 'x-api-key',
    });
  });
});
