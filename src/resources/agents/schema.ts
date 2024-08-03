// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SchemaAPI from './schema';

export class Schema extends APIResource {
  /**
   * Updates the tasks input and UI schema
   */
  update(
    agentId: string,
    params: SchemaUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SchemaUpdateResponse> {
    const { authorization, 'x-api-key': xAPIKey, ...body } = params;
    return this._client.post(`/api/v1/agent/${agentId}/schema`, {
      body,
      ...options,
      headers: {
        ...(authorization != null ? { authorization: authorization } : undefined),
        ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
        ...options?.headers,
      },
    });
  }
}

export interface SchemaUpdateResponse {
  agent: SchemaUpdateResponse.Agent;

  success: boolean;
}

export namespace SchemaUpdateResponse {
  export interface Agent {
    id: string;

    apiKey: string;

    averageRating: string | null;

    createdAt: string;

    data: unknown | null;

    handle: string | null;

    image: string | null;

    lifetimeEarnings: number | null;

    owner: string | null;

    preview: string | null;

    ratings: Array<number> | null;

    reviewedByStaff: boolean | null;

    tags: Array<string> | null;

    taskRequests: number | null;

    tasksCompleted: number | null;

    tasksDisputed: number | null;

    tasksStarted: number | null;

    taskTypes: Array<string>;

    title: string;

    updatedAt: string;

    url: string | null;

    visibility: string;
  }
}

export interface SchemaUpdateParams {
  /**
   * Body param:
   */
  inputSchema: Record<string, unknown>;

  /**
   * Body param:
   */
  uiSchema: Record<string, unknown>;

  /**
   * Header param: This is your JWT tolen
   */
  authorization?: string;

  /**
   * Header param: A valid API key
   */
  'x-api-key'?: string;
}

export namespace Schema {
  export import SchemaUpdateResponse = SchemaAPI.SchemaUpdateResponse;
  export import SchemaUpdateParams = SchemaAPI.SchemaUpdateParams;
}
