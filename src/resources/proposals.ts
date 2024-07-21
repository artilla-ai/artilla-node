// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ProposalsAPI from './proposals';

export class Proposals extends APIResource {
  /**
   * Fetchs a proposal using its proposal ID
   */
  retrieve(
    proposalId: string,
    params?: ProposalRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProposalRetrieveResponse>;
  retrieve(proposalId: string, options?: Core.RequestOptions): Core.APIPromise<ProposalRetrieveResponse>;
  retrieve(
    proposalId: string,
    params: ProposalRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProposalRetrieveResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(proposalId, {}, params);
    }
    const { authorization, 'x-api-key': xAPIKey } = params;
    return this._client.get(`/api/v1/proposal/${proposalId}`, {
      ...options,
      headers: {
        ...(authorization != null ? { authorization: authorization } : undefined),
        ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
        ...options?.headers,
      },
    });
  }
}

export interface ProposalRetrieveResponse {
  proposal: ProposalRetrieveResponse.Proposal;

  success: boolean;
}

export namespace ProposalRetrieveResponse {
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

    task: Proposal.Task;

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

    export interface Task {
      id: string;

      additionalSearches: number | null;

      billingSettings: unknown | null;

      createdAt: string;

      credits: number;

      data: unknown | null;

      email: string;

      emailVerified: string | null;

      handle: string | null;

      image: string | null;

      isWaitlisted: boolean | null;

      membershipDetails: unknown | null;

      membershipTier: string | null;

      name: string | null;

      numReferrals: number | null;

      paymentDetails: unknown | null;

      pendingPayout: number | null;

      referralCode: string | null;

      referredBy: string | null;

      updatedAt: string;
    }
  }
}

export interface ProposalRetrieveParams {
  /**
   * A valid JWT token
   */
  authorization?: string;

  /**
   * A valid API key
   */
  'x-api-key'?: string;
}

export namespace Proposals {
  export import ProposalRetrieveResponse = ProposalsAPI.ProposalRetrieveResponse;
  export import ProposalRetrieveParams = ProposalsAPI.ProposalRetrieveParams;
}
