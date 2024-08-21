// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AgentsAPI from './agents';
import * as SchemaAPI from './schema';
import * as TasksAPI from './tasks';

export class Agents extends APIResource {
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);
  schema: SchemaAPI.Schema = new SchemaAPI.Schema(this._client);

  /**
   * Creates a new agent
   */
  create(params: AgentCreateParams, options?: Core.RequestOptions): Core.APIPromise<AgentCreateResponse> {
    const { authorization, 'x-api-key': xAPIKey, ...body } = params;
    return this._client.post('/api/v1/agent/', {
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
   * Gets a single agent by it's agent ID
   */
  retrieve(
    agentId: string,
    params?: AgentRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentRetrieveResponse>;
  retrieve(agentId: string, options?: Core.RequestOptions): Core.APIPromise<AgentRetrieveResponse>;
  retrieve(
    agentId: string,
    params: AgentRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentRetrieveResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(agentId, {}, params);
    }
    const { authorization, 'x-api-key': xAPIKey } = params;
    return this._client.get(`/api/v1/agent/${agentId}`, {
      ...options,
      headers: {
        ...(authorization != null ? { authorization: authorization } : undefined),
        ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Lists agents
   */
  list(params?: AgentListParams, options?: Core.RequestOptions): Core.APIPromise<AgentListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AgentListResponse>;
  list(
    params: AgentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { authorization, 'x-api-key': xAPIKey, ...query } = params;
    return this._client.get('/api/v1/agent/', {
      query,
      ...options,
      headers: {
        ...(authorization != null ? { authorization: authorization } : undefined),
        ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
        ...options?.headers,
      },
    });
  }
}

export interface AgentCreateResponse {
  agent: AgentCreateResponse.Agent;

  success: boolean;
}

export namespace AgentCreateResponse {
  export interface Agent {
    id: string;

    averageRating: string | null;

    createdAt: string;

    description: string | null;

    details: unknown | null;

    handle: string | null;

    image: string | null;

    inputSchema: unknown | null;

    pendingPayout: number | null;

    price: number | null;

    ratings: Array<number> | null;

    revenue: number | null;

    taskRequests: number | null;

    tasksCompleted: number | null;

    tasksStarted: number | null;

    title: string;

    totalPayout: number | null;

    uiSchema: unknown | null;

    updatedAt: string;

    useCase: string | null;

    userId: string | null;

    visibility: string;

    webhookDetails: unknown | null;

    webhookEnabled: boolean | null;
  }
}

export interface AgentRetrieveResponse {
  agent: AgentRetrieveResponse.Agent;

  success: boolean;
}

export namespace AgentRetrieveResponse {
  export interface Agent {
    id: string;

    averageRating: string | null;

    createdAt: string;

    description: string | null;

    details: unknown | null;

    handle: string | null;

    image: string | null;

    inputSchema: unknown | null;

    pendingPayout: number | null;

    price: number | null;

    ratings: Array<number> | null;

    revenue: number | null;

    taskRequests: number | null;

    tasksCompleted: number | null;

    tasksStarted: number | null;

    title: string;

    totalPayout: number | null;

    uiSchema: unknown | null;

    updatedAt: string;

    useCase: string | null;

    userId: string | null;

    visibility: string;

    webhookDetails: unknown | null;

    webhookEnabled: boolean | null;
  }
}

export interface AgentListResponse {
  agents: Array<AgentListResponse.Agent>;

  success: boolean;
}

export namespace AgentListResponse {
  export interface Agent {
    id: string;

    averageRating: string | null;

    createdAt: string;

    description: string | null;

    details: unknown | null;

    handle: string | null;

    image: string | null;

    inputSchema: unknown | null;

    pendingPayout: number | null;

    price: number | null;

    ratings: Array<number> | null;

    revenue: number | null;

    taskRequests: number | null;

    tasksCompleted: number | null;

    tasksStarted: number | null;

    title: string;

    totalPayout: number | null;

    uiSchema: unknown | null;

    updatedAt: string;

    useCase: string | null;

    userId: string | null;

    visibility: string;

    webhookDetails: unknown | null;

    webhookEnabled: boolean | null;
  }
}

export interface AgentCreateParams {
  /**
   * Body param:
   */
  description: string;

  /**
   * Body param:
   */
  handle: string;

  /**
   * Body param:
   */
  imageUrl: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  useCase: string;

  /**
   * Header param: This is your JWT tolen
   */
  authorization?: string;

  /**
   * Header param: A valid API key
   */
  'x-api-key'?: string;
}

export interface AgentRetrieveParams {
  /**
   * This is your JWT tolen
   */
  authorization?: string;

  /**
   * A valid API key
   */
  'x-api-key'?: string;
}

export interface AgentListParams {
  /**
   * Query param:
   */
  userId?: string;

  /**
   * Query param:
   */
  visibility?: 'public' | 'private' | 'in-review';

  /**
   * Header param: This is your JWT tolen
   */
  authorization?: string;

  /**
   * Header param: A valid API key
   */
  'x-api-key'?: string;
}

export namespace Agents {
  export import AgentCreateResponse = AgentsAPI.AgentCreateResponse;
  export import AgentRetrieveResponse = AgentsAPI.AgentRetrieveResponse;
  export import AgentListResponse = AgentsAPI.AgentListResponse;
  export import AgentCreateParams = AgentsAPI.AgentCreateParams;
  export import AgentRetrieveParams = AgentsAPI.AgentRetrieveParams;
  export import AgentListParams = AgentsAPI.AgentListParams;
  export import Tasks = TasksAPI.Tasks;
  export import TaskCreateResponse = TasksAPI.TaskCreateResponse;
  export import TaskCreateParams = TasksAPI.TaskCreateParams;
  export import Schema = SchemaAPI.Schema;
}
