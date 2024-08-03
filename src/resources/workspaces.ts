// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as WorkspacesAPI from './workspaces';

export class Workspaces extends APIResource {
  /**
   * Get a workspace by its ID and return all tasks and proposals associated with it
   */
  retrieve(
    workspaceId: string,
    params?: WorkspaceRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkspaceRetrieveResponse>;
  retrieve(workspaceId: string, options?: Core.RequestOptions): Core.APIPromise<WorkspaceRetrieveResponse>;
  retrieve(
    workspaceId: string,
    params: WorkspaceRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkspaceRetrieveResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(workspaceId, {}, params);
    }
    const { authorization, 'x-api-key': xAPIKey } = params;
    return this._client.get(`/api/v1/workspace/${workspaceId}`, {
      ...options,
      headers: {
        ...(authorization != null ? { authorization: authorization } : undefined),
        ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Fetches the list of workspaces belonging to a user
   */
  list(params?: WorkspaceListParams, options?: Core.RequestOptions): Core.APIPromise<WorkspaceListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<WorkspaceListResponse>;
  list(
    params: WorkspaceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkspaceListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { authorization, 'x-api-key': xAPIKey } = params;
    return this._client.get('/api/v1/workspace/', {
      ...options,
      headers: {
        ...(authorization != null ? { authorization: authorization } : undefined),
        ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Watches a workspace for changes using the event streaming and notifies a user
   * when the workspace has been updated. In production, make sure to add the /edge
   * path to the endpoint to ensure long-running connections
   */
  watch(
    workspaceId: string,
    params?: WorkspaceWatchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  watch(workspaceId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  watch(
    workspaceId: string,
    params: WorkspaceWatchParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.watch(workspaceId, {}, params);
    }
    const { authorization, 'x-api-key': xAPIKey } = params;
    return this._client.get(`/api/v1/workspace/${workspaceId}/watch`, {
      ...options,
      headers: {
        Accept: '*/*',
        ...(authorization != null ? { authorization: authorization } : undefined),
        ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
        ...options?.headers,
      },
    });
  }
}

export interface WorkspaceRetrieveResponse {
  success: boolean;

  tasks: Array<WorkspaceRetrieveResponse.Task>;

  workspace: WorkspaceRetrieveResponse.Workspace;
}

export namespace WorkspaceRetrieveResponse {
  export interface Task {
    id: string;

    createdAt: string;

    data: unknown | null;

    mode: string;

    paymentState: unknown | null;

    proposals: Array<Task.Proposal>;

    status: string;

    type: string;

    updatedAt: string;

    workspaceId: string;
  }

  export namespace Task {
    export interface Proposal {
      id: string;

      agent: Proposal.Agent;

      agentId: string;

      createdAt: string;

      data: unknown | null;

      description: string | null;

      estimatedTimeToComplete: number;

      price: string;

      revisions: number;

      status: string;

      submissions: Array<Proposal.Submission>;

      taskId: string;

      updatedAt: string;

      validTill: string;
    }

    export namespace Proposal {
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

      export interface Submission {
        id: string;

        createdAt: string;

        data: unknown | null;

        events: unknown | null;

        progressPercent: number;

        proposalId: string;

        rating: Submission.Rating;

        ratingId: string | null;

        revision: number;

        status: string;

        updatedAt: string;
      }

      export namespace Submission {
        export interface Rating {
          id: string;

          agentId: string | null;

          comment: string | null;

          createdAt: string;

          data: unknown | null;

          rating: number;

          updatedAt: string;
        }
      }
    }
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

export interface WorkspaceListResponse {
  success: boolean;

  workspaces: Array<WorkspaceListResponse.Workspace>;
}

export namespace WorkspaceListResponse {
  export interface Workspace {
    id: string;

    createdAt: string;

    owner: string | null;

    status: string;

    tasks: Array<Workspace.Task>;

    title: string;

    updatedAt: string;
  }

  export namespace Workspace {
    export interface Task {
      id: string;

      createdAt: string;

      data: unknown | null;

      mode: string;

      paymentState: unknown | null;

      proposals: Array<Task.Proposal>;

      status: string;

      type: string;

      updatedAt: string;

      workspaceId: string;
    }

    export namespace Task {
      export interface Proposal {
        id: string;

        agent: Proposal.Agent;

        agentId: string;

        createdAt: string;

        data: unknown | null;

        description: string | null;

        estimatedTimeToComplete: number;

        price: string;

        revisions: number;

        status: string;

        submissions: Array<Proposal.Submission>;

        taskId: string;

        updatedAt: string;

        validTill: string;
      }

      export namespace Proposal {
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

        export interface Submission {
          id: string;

          createdAt: string;

          data: unknown | null;

          events: unknown | null;

          progressPercent: number;

          proposalId: string;

          ratingId: string | null;

          revision: number;

          status: string;

          updatedAt: string;
        }
      }
    }
  }
}

export interface WorkspaceRetrieveParams {
  /**
   * This is your JWT tolen
   */
  authorization?: string;

  /**
   * A valid API key
   */
  'x-api-key'?: string;
}

export interface WorkspaceListParams {
  /**
   * This is your JWT tolen
   */
  authorization?: string;

  /**
   * A valid API key
   */
  'x-api-key'?: string;
}

export interface WorkspaceWatchParams {
  /**
   * This is your JWT tolen
   */
  authorization?: string;

  /**
   * A valid API key
   */
  'x-api-key'?: string;
}

export namespace Workspaces {
  export import WorkspaceRetrieveResponse = WorkspacesAPI.WorkspaceRetrieveResponse;
  export import WorkspaceListResponse = WorkspacesAPI.WorkspaceListResponse;
  export import WorkspaceRetrieveParams = WorkspacesAPI.WorkspaceRetrieveParams;
  export import WorkspaceListParams = WorkspacesAPI.WorkspaceListParams;
  export import WorkspaceWatchParams = WorkspacesAPI.WorkspaceWatchParams;
}
