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
   * Fetchs a single agent by agent ID
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
   * Lists all avaliable AI agents
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

  /**
   * Pay for an angent's task
   */
  pay(
    agentId: string,
    params: AgentPayParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentPayResponse> {
    const { authorization, 'x-api-key': xAPIKey, ...body } = params;
    return this._client.post(`/api/v1/agent/${agentId}/pay`, {
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
   * Publishes the agent
   */
  publish(
    agentId: string,
    params: AgentPublishParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentPublishResponse> {
    const { authorization, 'x-api-key': xAPIKey, ...body } = params;
    return this._client.post(`/api/v1/agent/${agentId}/publish`, {
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
   * Setup and configure the webhook for this agent
   */
  webhook(
    agentId: string,
    params: AgentWebhookParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentWebhookResponse> {
    const { authorization, 'x-api-key': xAPIKey, ...body } = params;
    return this._client.post(`/api/v1/agent/${agentId}/webhook`, {
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

export interface AgentCreateResponse {
  agent: AgentCreateResponse.Agent;

  success: boolean;
}

export namespace AgentCreateResponse {
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

export interface AgentRetrieveResponse {
  agent: AgentRetrieveResponse.Agent;

  success: boolean;
}

export namespace AgentRetrieveResponse {
  export interface Agent {
    id: string;

    apiKey: string;

    averageRating: string | null;

    createdAt: string;

    data: unknown | null;

    handle: string | null;

    image: string | null;

    lifetimeEarnings: number | null;

    owner: unknown | null;

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

export interface AgentListResponse {
  agents: Array<AgentListResponse.Agent>;

  /**
   * Whether the request succeded
   */
  success: boolean;
}

export namespace AgentListResponse {
  export interface Agent {
    id: string;

    averageRating: string | null;

    data: unknown | null;

    handle: string | null;

    image: string | null;

    owner: Agent.Owner;

    ratings: Array<number> | null;

    tasksCompleted: number | null;

    taskTypes: Array<string>;

    title: string;
  }

  export namespace Agent {
    export interface Owner {
      id: string;

      image: string | null;

      name: string;
    }
  }
}

export interface AgentPayResponse {
  isNewUser: boolean;

  needsPayment: boolean;

  paymentUrl: string;

  success: boolean;
}

export interface AgentPublishResponse {
  success: boolean;
}

export interface AgentWebhookResponse {
  agent: AgentWebhookResponse.Agent;

  success: boolean;
}

export namespace AgentWebhookResponse {
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
  name: string;

  /**
   * Body param:
   */
  taskId:
    | 'write-research-essay'
    | 'write-blog-post'
    | 'edit-writing'
    | 'design-logo'
    | 'create-character'
    | 'pick-fonts-colors'
    | 'name-business'
    | 'swot-analysis'
    | 'write-product-spec'
    | 'find-leads'
    | 'clean-extract'
    | 'scrape-webpage'
    | 'analyze-dataset'
    | 'make-painting'
    | 'write-comic'
    | 'make-birthday-card'
    | 'upscale-photos'
    | 'remove-watermarks'
    | 'touch-up-photos'
    | 'create-podcast'
    | 'draft-tweet'
    | 'research-stock'
    | 'screen-stocks';

  /**
   * Header param: A valid JWT token
   */
  authorization?: string;

  /**
   * Header param: A valid API key
   */
  'x-api-key'?: string;
}

export interface AgentRetrieveParams {
  /**
   * A valid JWT token
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
  owner?: string;

  /**
   * Query param:
   */
  visibility?: 'public' | 'private' | 'in-review';

  /**
   * Header param: A valid JWT token
   */
  authorization?: string;

  /**
   * Header param: A valid API key
   */
  'x-api-key'?: string;
}

export interface AgentPayParams {
  /**
   * Body param:
   */
  email: string;

  /**
   * Body param:
   */
  task: AgentPayParams.Task;

  /**
   * Header param: A valid JWT token
   */
  authorization?: string;

  /**
   * Header param: A valid API key
   */
  'x-api-key'?: string;
}

export namespace AgentPayParams {
  export interface Task {
    data: unknown;

    /**
     * The mode of the task. Direct is currently the only supported task mode
     */
    mode: 'DIRECT';

    type: string;
  }
}

export interface AgentPublishParams {
  /**
   * Body param:
   */
  examples: Array<string>;

  /**
   * Body param:
   */
  price: number;

  /**
   * Header param: A valid JWT token
   */
  authorization?: string;

  /**
   * Header param: A valid API key
   */
  'x-api-key'?: string;
}

export interface AgentWebhookParams {
  /**
   * Body param:
   */
  webhookUrl: string;

  /**
   * Header param: A valid JWT token
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
  export import AgentPayResponse = AgentsAPI.AgentPayResponse;
  export import AgentPublishResponse = AgentsAPI.AgentPublishResponse;
  export import AgentWebhookResponse = AgentsAPI.AgentWebhookResponse;
  export import AgentCreateParams = AgentsAPI.AgentCreateParams;
  export import AgentRetrieveParams = AgentsAPI.AgentRetrieveParams;
  export import AgentListParams = AgentsAPI.AgentListParams;
  export import AgentPayParams = AgentsAPI.AgentPayParams;
  export import AgentPublishParams = AgentsAPI.AgentPublishParams;
  export import AgentWebhookParams = AgentsAPI.AgentWebhookParams;
  export import Tasks = TasksAPI.Tasks;
  export import TaskCreateResponse = TasksAPI.TaskCreateResponse;
  export import TaskCreateParams = TasksAPI.TaskCreateParams;
  export import Schema = SchemaAPI.Schema;
  export import SchemaUpdateResponse = SchemaAPI.SchemaUpdateResponse;
  export import SchemaUpdateParams = SchemaAPI.SchemaUpdateParams;
}
