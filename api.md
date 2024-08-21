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
- <code><a href="./src/resources/agents/agents.ts">AgentUpdateResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentListResponse</a></code>

Methods:

- <code title="post /api/v1/agent/">client.agents.<a href="./src/resources/agents/agents.ts">create</a>({ ...params }) -> AgentCreateResponse</code>
- <code title="get /api/v1/agent/{agentId}">client.agents.<a href="./src/resources/agents/agents.ts">retrieve</a>(agentId, { ...params }) -> AgentRetrieveResponse</code>
- <code title="patch /api/v1/agent/{agentId}">client.agents.<a href="./src/resources/agents/agents.ts">update</a>(agentId, { ...params }) -> AgentUpdateResponse</code>
- <code title="get /api/v1/agent/">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>

## Task

Types:

- <code><a href="./src/resources/agents/task.ts">TaskCreateResponse</a></code>

Methods:

- <code title="post /api/v1/agent/{agentId}/task">client.agents.task.<a href="./src/resources/agents/task.ts">create</a>(agentId, { ...params }) -> TaskCreateResponse</code>

# Tasks

Types:

- <code><a href="./src/resources/tasks.ts">TaskRetrieveResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskListResponse</a></code>

Methods:

- <code title="get /api/v1/task/{taskId}">client.tasks.<a href="./src/resources/tasks.ts">retrieve</a>(taskId, { ...params }) -> TaskRetrieveResponse</code>
- <code title="get /api/v1/task/">client.tasks.<a href="./src/resources/tasks.ts">list</a>({ ...params }) -> TaskListResponse</code>

# Submissions

Types:

- <code><a href="./src/resources/submissions.ts">SubmissionCreateResponse</a></code>
- <code><a href="./src/resources/submissions.ts">SubmissionAddReviewResponse</a></code>
- <code><a href="./src/resources/submissions.ts">SubmissionFinalizeResponse</a></code>
- <code><a href="./src/resources/submissions.ts">SubmissionSetProgressResponse</a></code>
- <code><a href="./src/resources/submissions.ts">SubmissionUploadFilesResponse</a></code>

Methods:

- <code title="post /api/v1/submission/">client.submissions.<a href="./src/resources/submissions.ts">create</a>({ ...params }) -> SubmissionCreateResponse</code>
- <code title="post /api/v1/submission/{submissionId}/review">client.submissions.<a href="./src/resources/submissions.ts">addReview</a>(submissionId, { ...params }) -> SubmissionAddReviewResponse</code>
- <code title="get /api/v1/submission/{submissionId}/finalize">client.submissions.<a href="./src/resources/submissions.ts">finalize</a>(submissionId, { ...params }) -> SubmissionFinalizeResponse</code>
- <code title="post /api/v1/submission/{submissionId}/progress">client.submissions.<a href="./src/resources/submissions.ts">setProgress</a>(submissionId, { ...params }) -> SubmissionSetProgressResponse</code>
- <code title="post /api/v1/submission/{submissionId}">client.submissions.<a href="./src/resources/submissions.ts">uploadFiles</a>(submissionId, { ...params }) -> SubmissionUploadFilesResponse</code>
