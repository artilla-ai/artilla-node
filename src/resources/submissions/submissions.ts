// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SubmissionsAPI from './submissions';
import * as ExamplesAPI from './examples';

export class Submissions extends APIResource {
  examples: ExamplesAPI.Examples = new ExamplesAPI.Examples(this._client);

  /**
   * Create a new submission for a proposal
   */
  create(
    params: SubmissionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubmissionCreateResponse> {
    const { authorization, 'x-api-key': xAPIKey, ...body } = params;
    return this._client.post('/api/v1/submission/', {
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
   * Fetch existing submissions
   */
  list(params: SubmissionListParams, options?: Core.RequestOptions): Core.APIPromise<SubmissionListResponse> {
    const { authorization, 'x-api-key': xAPIKey, ...query } = params;
    return this._client.get('/api/v1/submission/', {
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
   * Upload files to a submission
   */
  finalize(
    submissionId: string,
    params?: SubmissionFinalizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubmissionFinalizeResponse>;
  finalize(submissionId: string, options?: Core.RequestOptions): Core.APIPromise<SubmissionFinalizeResponse>;
  finalize(
    submissionId: string,
    params: SubmissionFinalizeParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubmissionFinalizeResponse> {
    if (isRequestOptions(params)) {
      return this.finalize(submissionId, {}, params);
    }
    const { authorization, 'x-api-key': xAPIKey } = params;
    return this._client.get(`/api/v1/submission/${submissionId}/finalize`, {
      ...options,
      headers: {
        ...(authorization != null ? { authorization: authorization } : undefined),
        ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Set the progress on a submission
   */
  progress(
    submissionId: string,
    params: SubmissionProgressParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubmissionProgressResponse> {
    const { authorization, 'x-api-key': xAPIKey, ...body } = params;
    return this._client.post(`/api/v1/submission/${submissionId}/progress`, {
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
   * Allows users to add a rating for the submission completed by the agent by
   * providing a 1-5 start rating and optional comments
   */
  rating(
    submissionId: string,
    params: SubmissionRatingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubmissionRatingResponse> {
    const { authorization, 'x-api-key': xAPIKey, ...body } = params;
    return this._client.post(`/api/v1/submission/${submissionId}/rating`, {
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
   * Upload files to a submission
   */
  upload(
    submissionId: string,
    params: SubmissionUploadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubmissionUploadResponse> {
    const { authorization, 'x-api-key': xAPIKey, ...body } = params;
    return this._client.post(`/api/v1/submission/${submissionId}`, {
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

export interface SubmissionCreateResponse {
  submission: SubmissionCreateResponse.Submission;

  success: boolean;
}

export namespace SubmissionCreateResponse {
  export interface Submission {
    id: string;

    revision: number;
  }
}

export interface SubmissionListResponse {
  submissions: Array<SubmissionListResponse.Submission>;

  success: boolean;
}

export namespace SubmissionListResponse {
  export interface Submission {
    id: string;

    agent: Submission.Agent;

    data: Submission.Data;

    proposal: Submission.Proposal;

    workspace: Submission.Workspace;
  }

  export namespace Submission {
    export interface Agent {
      id: string;

      title: string;
    }

    export interface Data {
      files: Array<Data.File>;

      progress: Data.Progress;

      message?: string;
    }

    export namespace Data {
      export interface File {
        contentType: string;

        key: string;

        url: string;

        description?: string;
      }

      export interface Progress {
        percent: number;

        text: string;

        timestamp: string;
      }
    }

    export interface Proposal {
      id: string;
    }

    export interface Workspace {
      id: string;

      title: string;
    }
  }
}

export interface SubmissionFinalizeResponse {
  success: boolean;
}

export interface SubmissionProgressResponse {
  success: boolean;

  message?: string;
}

export interface SubmissionRatingResponse {
  success: boolean;

  message?: string;
}

export interface SubmissionUploadResponse {
  submission: SubmissionUploadResponse.Submission;

  success: boolean;
}

export namespace SubmissionUploadResponse {
  export interface Submission {
    id: string;

    revision: number;
  }
}

export interface SubmissionCreateParams {
  /**
   * Body param:
   */
  proposalId: string;

  /**
   * Header param: A valid JWT token
   */
  authorization?: string;

  /**
   * Header param: A valid API key
   */
  'x-api-key'?: string;
}

export interface SubmissionListParams {
  /**
   * Query param:
   */
  agentId: string;

  /**
   * Query param:
   */
  status: string;

  /**
   * Query param:
   */
  workspaceOwnerId: string;

  /**
   * Header param: A valid JWT token
   */
  authorization?: string;

  /**
   * Header param: A valid API key
   */
  'x-api-key'?: string;
}

export interface SubmissionFinalizeParams {
  /**
   * A valid JWT token
   */
  authorization?: string;

  /**
   * A valid API key
   */
  'x-api-key'?: string;
}

export interface SubmissionProgressParams {
  /**
   * Body param:
   */
  progressPercent: number;

  /**
   * Body param:
   */
  text: string;

  /**
   * Header param: A valid JWT token
   */
  authorization?: string;

  /**
   * Header param: A valid API key
   */
  'x-api-key'?: string;
}

export interface SubmissionRatingParams {
  /**
   * Body param:
   */
  comment: string | null;

  /**
   * Body param:
   */
  rating: number;

  /**
   * Body param:
   */
  fileComments?: Record<string, string | null>;

  /**
   * Body param:
   */
  fileRatings?: Record<string, number | null>;

  /**
   * Header param: A valid JWT token
   */
  authorization?: string;

  /**
   * Header param: A valid API key
   */
  'x-api-key'?: string;
}

export interface SubmissionUploadParams {
  /**
   * Body param:
   */
  files: Array<SubmissionUploadParams.File>;

  /**
   * Body param:
   */
  message: string;

  /**
   * Header param: A valid JWT token
   */
  authorization?: string;

  /**
   * Header param: A valid API key
   */
  'x-api-key'?: string;
}

export namespace SubmissionUploadParams {
  export interface File {
    contentType: string;

    description: string;

    key: string;

    url: string;
  }
}

export namespace Submissions {
  export import SubmissionCreateResponse = SubmissionsAPI.SubmissionCreateResponse;
  export import SubmissionListResponse = SubmissionsAPI.SubmissionListResponse;
  export import SubmissionFinalizeResponse = SubmissionsAPI.SubmissionFinalizeResponse;
  export import SubmissionProgressResponse = SubmissionsAPI.SubmissionProgressResponse;
  export import SubmissionRatingResponse = SubmissionsAPI.SubmissionRatingResponse;
  export import SubmissionUploadResponse = SubmissionsAPI.SubmissionUploadResponse;
  export import SubmissionCreateParams = SubmissionsAPI.SubmissionCreateParams;
  export import SubmissionListParams = SubmissionsAPI.SubmissionListParams;
  export import SubmissionFinalizeParams = SubmissionsAPI.SubmissionFinalizeParams;
  export import SubmissionProgressParams = SubmissionsAPI.SubmissionProgressParams;
  export import SubmissionRatingParams = SubmissionsAPI.SubmissionRatingParams;
  export import SubmissionUploadParams = SubmissionsAPI.SubmissionUploadParams;
  export import Examples = ExamplesAPI.Examples;
  export import ExampleRetrieveResponse = ExamplesAPI.ExampleRetrieveResponse;
  export import ExampleRetrieveParams = ExamplesAPI.ExampleRetrieveParams;
}
