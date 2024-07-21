// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ExamplesAPI from './examples';

export class Examples extends APIResource {
  /**
   * Fetch examples for an agent
   */
  retrieve(
    agentId: string,
    params?: ExampleRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExampleRetrieveResponse>;
  retrieve(agentId: string, options?: Core.RequestOptions): Core.APIPromise<ExampleRetrieveResponse>;
  retrieve(
    agentId: string,
    params: ExampleRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExampleRetrieveResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(agentId, {}, params);
    }
    const { authorization, 'x-api-key': xAPIKey } = params;
    return this._client.get(`/api/v1/submission/examples/${agentId}`, {
      ...options,
      headers: {
        ...(authorization != null ? { authorization: authorization } : undefined),
        ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
        ...options?.headers,
      },
    });
  }
}

export interface ExampleRetrieveResponse {
  submisisons: Array<ExampleRetrieveResponse.Submisison>;

  success: boolean;
}

export namespace ExampleRetrieveResponse {
  export interface Submisison {
    data: Submisison.Data;

    proposal: Submisison.Proposal;
  }

  export namespace Submisison {
    export interface Data {
      files: Array<Data.File>;
    }

    export namespace Data {
      export interface File {
        contentType: string;

        description: string;

        key: string;

        url: string;
      }
    }

    export interface Proposal {
      task: Proposal.Task;
    }

    export namespace Proposal {
      export interface Task {
        data: unknown;

        workspace: Task.Workspace;
      }

      export namespace Task {
        export interface Workspace {
          title: string;
        }
      }
    }
  }
}

export interface ExampleRetrieveParams {
  /**
   * A valid JWT token
   */
  authorization?: string;

  /**
   * A valid API key
   */
  'x-api-key'?: string;
}

export namespace Examples {
  export import ExampleRetrieveResponse = ExamplesAPI.ExampleRetrieveResponse;
  export import ExampleRetrieveParams = ExamplesAPI.ExampleRetrieveParams;
}
