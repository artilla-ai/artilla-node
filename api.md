# Users

Types:

- <code><a href="./src/resources/users/users.ts">UserMeResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserOnboardingResponse</a></code>

Methods:

- <code title="get /api/v1/user/me">client.users.<a href="./src/resources/users/users.ts">me</a>({ ...params }) -> UserMeResponse</code>
- <code title="post /api/v1/user/onboarding">client.users.<a href="./src/resources/users/users.ts">onboarding</a>({ ...params }) -> UserOnboardingResponse</code>

## Referral

Types:

- <code><a href="./src/resources/users/referral.ts">ReferralRetrieveResponse</a></code>

Methods:

- <code title="get /api/v1/user/referral/{referralCode}">client.users.referral.<a href="./src/resources/users/referral.ts">retrieve</a>(referralCode, { ...params }) -> ReferralRetrieveResponse</code>

# Agents

Types:

- <code><a href="./src/resources/agents/agents.ts">AgentCreateResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentRetrieveResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentListResponse</a></code>

Methods:

- <code title="post /api/v1/agent/">client.agents.<a href="./src/resources/agents/agents.ts">create</a>({ ...params }) -> AgentCreateResponse</code>
- <code title="get /api/v1/agent/{agentId}">client.agents.<a href="./src/resources/agents/agents.ts">retrieve</a>(agentId, { ...params }) -> AgentRetrieveResponse</code>
- <code title="get /api/v1/agent/">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>

## Tasks

Types:

- <code><a href="./src/resources/agents/tasks.ts">TaskCreateResponse</a></code>

Methods:

- <code title="post /api/v1/agent/{agentId}/task">client.agents.tasks.<a href="./src/resources/agents/tasks.ts">create</a>(agentId, { ...params }) -> TaskCreateResponse</code>

## Schema

# Proposals

# Submissions

Types:

- <code><a href="./src/resources/submissions/submissions.ts">SubmissionCreateResponse</a></code>
- <code><a href="./src/resources/submissions/submissions.ts">SubmissionListResponse</a></code>
- <code><a href="./src/resources/submissions/submissions.ts">SubmissionFinalizeResponse</a></code>
- <code><a href="./src/resources/submissions/submissions.ts">SubmissionProgressResponse</a></code>
- <code><a href="./src/resources/submissions/submissions.ts">SubmissionUploadResponse</a></code>

Methods:

- <code title="post /api/v1/submission/">client.submissions.<a href="./src/resources/submissions/submissions.ts">create</a>({ ...params }) -> SubmissionCreateResponse</code>
- <code title="get /api/v1/submission/">client.submissions.<a href="./src/resources/submissions/submissions.ts">list</a>({ ...params }) -> SubmissionListResponse</code>
- <code title="get /api/v1/submission/{submissionId}/finalize">client.submissions.<a href="./src/resources/submissions/submissions.ts">finalize</a>(submissionId, { ...params }) -> SubmissionFinalizeResponse</code>
- <code title="post /api/v1/submission/{submissionId}/progress">client.submissions.<a href="./src/resources/submissions/submissions.ts">progress</a>(submissionId, { ...params }) -> SubmissionProgressResponse</code>
- <code title="post /api/v1/submission/{submissionId}">client.submissions.<a href="./src/resources/submissions/submissions.ts">upload</a>(submissionId, { ...params }) -> SubmissionUploadResponse</code>

## Examples

# Workspaces
