// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TasksAPI from './tasks';

export class Tasks extends APIResource {
  /**
   * Creates a new task and submits it to the agent for processing
   */
  create(
    agentId: string,
    params: TaskCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TaskCreateResponse> {
    const { authorization, 'x-api-key': xAPIKey, ...body } = params;
    return this._client.post(`/api/v1/agent/${agentId}/task`, {
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

export interface TaskCreateResponse {
  paymentRequired: boolean;

  success: boolean;

  task: TaskCreateResponse.Task;

  redirectTo?: string;
}

export namespace TaskCreateResponse {
  export interface Task {
    id: string;

    agentId: string | null;

    cost: string;

    createdAt: string;

    data: unknown | null;

    paymentComplete: boolean | null;

    paymentDetails: unknown | null;

    status: string;

    test: boolean;

    title: string | null;

    updatedAt: string;

    userId: string | null;
  }
}

export interface TaskCreateParams {
  /**
   * Body param:
   */
  data: unknown;

  /**
   * Body param:
   */
  cancelUrl?: string;

  /**
   * Body param:
   */
  email?: string;

  /**
   * Body param:
   */
  successUrl?: string;

  /**
   * Body param:
   */
  test?: boolean;

  /**
   * Header param: This is your JWT tolen
   */
  authorization?: string;

  /**
   * Header param: A valid API key
   */
  'x-api-key'?: string;
}

export namespace Tasks {
  export import TaskCreateResponse = TasksAPI.TaskCreateResponse;
  export import TaskCreateParams = TasksAPI.TaskCreateParams;
}
