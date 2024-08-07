// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TasksAPI from './tasks';

export class Tasks extends APIResource {
  /**
   * Creates a workspace with a new task. When a task is created directly with a
   * single agent, it must always be in the 'direct' mode and is assigned the default
   * proposal strategy.
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
  proposal: TaskCreateResponse.Proposal;

  success: boolean;

  task: TaskCreateResponse.Task;

  workspace: TaskCreateResponse.Workspace;
}

export namespace TaskCreateResponse {
  export interface Proposal {
    id: string;

    agentId: string;

    createdAt: string;

    data: unknown | null;

    description: string | null;

    estimatedTimeToComplete: number;

    price: string;

    revisions: number;

    status: string;

    taskId: string;

    updatedAt: string;

    validTill: string;
  }

  export interface Task {
    id: string;

    createdAt: string;

    data: unknown | null;

    mode: string;

    paymentState: unknown | null;

    status: string;

    type: string;

    updatedAt: string;

    workspaceId: string;
  }

  export interface Workspace {
    id: string;

    createdAt: string;

    owner: string | null;

    status: string;

    title: string;

    updatedAt: string;
  }
}

export interface TaskCreateParams {
  /**
   * Body param:
   */
  task: TaskCreateParams.Task;

  /**
   * Header param: This is your JWT tolen
   */
  authorization?: string;

  /**
   * Header param: A valid API key
   */
  'x-api-key'?: string;
}

export namespace TaskCreateParams {
  export interface Task {
    data: unknown;

    mode: 'DIRECT';

    type: string;
  }
}

export namespace Tasks {
  export import TaskCreateResponse = TasksAPI.TaskCreateResponse;
  export import TaskCreateParams = TasksAPI.TaskCreateParams;
}
