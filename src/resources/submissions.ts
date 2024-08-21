// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SubmissionsAPI from './submissions';

export class Submissions extends APIResource {
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
   * Allows users to add a rating for the submission completed by the agent by
   * providing a 1-5 start rating and optional comments
   */
  addReview(
    submissionId: string,
    params: SubmissionAddReviewParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubmissionAddReviewResponse> {
    const { authorization, 'x-api-key': xAPIKey, ...body } = params;
    return this._client.post(`/api/v1/submission/${submissionId}/review`, {
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
  updateProgress(
    submissionId: string,
    params: SubmissionUpdateProgressParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubmissionUpdateProgressResponse> {
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
   * Upload files to a submission
   */
  uploadFiles(
    submissionId: string,
    params: SubmissionUploadFilesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubmissionUploadFilesResponse> {
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

export interface SubmissionAddReviewResponse {
  success: boolean;

  message?: string;
}

export interface SubmissionFinalizeResponse {
  success: boolean;
}

export interface SubmissionUpdateProgressResponse {
  success: boolean;

  message?: string;
}

export interface SubmissionUploadFilesResponse {
  submission: SubmissionUploadFilesResponse.Submission;

  success: boolean;
}

export namespace SubmissionUploadFilesResponse {
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
   * Header param: This is your JWT tolen
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
   * Header param: This is your JWT tolen
   */
  authorization?: string;

  /**
   * Header param: A valid API key
   */
  'x-api-key'?: string;
}

export interface SubmissionAddReviewParams {
  /**
   * Body param:
   */
  comment: string | null;

  /**
   * Body param:
   */
  isPublic: boolean;

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
   * Header param: This is your JWT tolen
   */
  authorization?: string;

  /**
   * Header param: A valid API key
   */
  'x-api-key'?: string;
}

export interface SubmissionFinalizeParams {
  /**
   * This is your JWT tolen
   */
  authorization?: string;

  /**
   * A valid API key
   */
  'x-api-key'?: string;
}

export interface SubmissionUpdateProgressParams {
  /**
   * Body param:
   */
  progressPercent: number;

  /**
   * Body param:
   */
  text: string;

  /**
   * Header param: This is your JWT tolen
   */
  authorization?: string;

  /**
   * Header param: A valid API key
   */
  'x-api-key'?: string;
}

export interface SubmissionUploadFilesParams {
  /**
   * Body param:
   */
  files: Array<SubmissionUploadFilesParams.File>;

  /**
   * Body param:
   */
  message: string;

  /**
   * Header param: This is your JWT tolen
   */
  authorization?: string;

  /**
   * Header param: A valid API key
   */
  'x-api-key'?: string;
}

export namespace SubmissionUploadFilesParams {
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
  export import SubmissionAddReviewResponse = SubmissionsAPI.SubmissionAddReviewResponse;
  export import SubmissionFinalizeResponse = SubmissionsAPI.SubmissionFinalizeResponse;
  export import SubmissionUpdateProgressResponse = SubmissionsAPI.SubmissionUpdateProgressResponse;
  export import SubmissionUploadFilesResponse = SubmissionsAPI.SubmissionUploadFilesResponse;
  export import SubmissionCreateParams = SubmissionsAPI.SubmissionCreateParams;
  export import SubmissionListParams = SubmissionsAPI.SubmissionListParams;
  export import SubmissionAddReviewParams = SubmissionsAPI.SubmissionAddReviewParams;
  export import SubmissionFinalizeParams = SubmissionsAPI.SubmissionFinalizeParams;
  export import SubmissionUpdateProgressParams = SubmissionsAPI.SubmissionUpdateProgressParams;
  export import SubmissionUploadFilesParams = SubmissionsAPI.SubmissionUploadFilesParams;
}
