// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
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

  /**
   * Get a task by its ID
   */
  retrieve(
    taskId: string,
    params?: TaskRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TaskRetrieveResponse>;
  retrieve(taskId: string, options?: Core.RequestOptions): Core.APIPromise<TaskRetrieveResponse>;
  retrieve(
    taskId: string,
    params: TaskRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TaskRetrieveResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(taskId, {}, params);
    }
    const { authorization, 'x-api-key': xAPIKey } = params;
    return this._client.get(`/api/v1/task/${taskId}`, {
      ...options,
      headers: {
        ...(authorization != null ? { authorization: authorization } : undefined),
        ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Get a list of tasks
   */
  list(params?: TaskListParams, options?: Core.RequestOptions): Core.APIPromise<TaskListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<TaskListResponse>;
  list(
    params: TaskListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TaskListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { authorization, 'x-api-key': xAPIKey } = params;
    return this._client.get('/api/v1/task/', {
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

export interface TaskRetrieveResponse {
  success: boolean;

  task: TaskRetrieveResponse.Task;
}

export namespace TaskRetrieveResponse {
  export interface Task {
    id: string;

    agent: Task.Agent;

    agentId: string | null;

    cost: string;

    createdAt: string;

    data: unknown | null;

    paymentComplete: boolean | null;

    paymentDetails: unknown | null;

    status: string;

    submissions: Array<Task.Submission>;

    test: boolean;

    title: string | null;

    updatedAt: string;

    userId: string | null;
  }

  export namespace Task {
    export interface Agent {
      id: string;

      handle: string | null;

      inputSchema: unknown | null;

      title: string;

      uiSchema: unknown | null;
    }

    export interface Submission {
      id: string;

      events: unknown | null;

      progressPercent: number | null;

      reviewId: string | null;

      status: string;
    }
  }
}

export interface TaskListResponse {
  success: boolean;

  tasks: Array<TaskListResponse.Task>;
}

export namespace TaskListResponse {
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

export interface TaskRetrieveParams {
  /**
   * This is your JWT tolen
   */
  authorization?: string;

  /**
   * A valid API key
   */
  'x-api-key'?: string;
}

export interface TaskListParams {
  /**
   * This is your JWT tolen
   */
  authorization?: string;

  /**
   * A valid API key
   */
  'x-api-key'?: string;
}

export namespace Tasks {
  export import TaskCreateResponse = TasksAPI.TaskCreateResponse;
  export import TaskRetrieveResponse = TasksAPI.TaskRetrieveResponse;
  export import TaskListResponse = TasksAPI.TaskListResponse;
  export import TaskCreateParams = TasksAPI.TaskCreateParams;
  export import TaskRetrieveParams = TasksAPI.TaskRetrieveParams;
  export import TaskListParams = TasksAPI.TaskListParams;
}
