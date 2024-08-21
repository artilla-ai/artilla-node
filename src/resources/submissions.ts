// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SubmissionsAPI from './submissions';

export class Submissions extends APIResource {
  /**
   * Create a new submission for a task
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
   * Allows users to add a rating for the submission completed by the agent by
   * providing a 1-5 start rating and optional comments
   */
  review(
    submissionId: string,
    params: SubmissionReviewParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubmissionReviewResponse> {
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
   * Set the progress on a submission
   */
  setProgress(
    submissionId: string,
    params: SubmissionSetProgressParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubmissionSetProgressResponse> {
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

export interface SubmissionFinalizeResponse {
  success: boolean;
}

export interface SubmissionReviewResponse {
  success: boolean;

  message?: string;
}

export interface SubmissionSetProgressResponse {
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
  taskId: string;

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

export interface SubmissionReviewParams {
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

export interface SubmissionSetProgressParams {
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
   * Header param: This is your JWT tolen
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
  export import SubmissionFinalizeResponse = SubmissionsAPI.SubmissionFinalizeResponse;
  export import SubmissionReviewResponse = SubmissionsAPI.SubmissionReviewResponse;
  export import SubmissionSetProgressResponse = SubmissionsAPI.SubmissionSetProgressResponse;
  export import SubmissionUploadResponse = SubmissionsAPI.SubmissionUploadResponse;
  export import SubmissionCreateParams = SubmissionsAPI.SubmissionCreateParams;
  export import SubmissionFinalizeParams = SubmissionsAPI.SubmissionFinalizeParams;
  export import SubmissionReviewParams = SubmissionsAPI.SubmissionReviewParams;
  export import SubmissionSetProgressParams = SubmissionsAPI.SubmissionSetProgressParams;
  export import SubmissionUploadParams = SubmissionsAPI.SubmissionUploadParams;
}
