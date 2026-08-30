---
name: report-drift
description: "Use when two pieces of repository code or technical documentation make incompatible claims about architecture, ownership, interfaces, data, or runtime behavior."
---

# Report Drift

When potential drift is found:

1. Start a parallel, context-isolated subagent. Pass it the repository working directory, a short description of the apparent mismatch, and any references already observed. Tell it to read and follow [references/subagent-workflow.md](references/subagent-workflow.md).
2. Continue the main task normally.
3. When the subagent returns:
   - If the finding was a false positive, finish the drift branch with `skipped` and the reason; the main task continues.
   - If drift was confirmed, show the compact finding and ask what to do. Use a non-blocking question when the harness supports one; otherwise ask at a natural checkpoint while continuing independent main-task work.
4. Offer only the actions the harness can perform:
   - **Report on GitHub:** show the exact proposed issue and offer this only when the subagent found no existing issue and resolved a writable GitHub target.
   - **Address in a new task:** offer this only when the harness can create a separate, user-visible task in its own worktree. Create a new task, not a subagent.
   - **Skip:** take no follow-up action.
5. Apply the user's decision:
   - For **Report on GitHub**, send the approved payload back to the same subagent when possible; otherwise use another context-isolated subagent. It rechecks, creates, and verifies the issue.
   - For **Address in a new task**, create the standalone worktree task with the compact finding and evidence.
   - For **Skip**, finish immediately.

When subagents are unavailable, follow the workflow reference directly using the same approval boundary.

Return only one final outcome:

- `created` — verified GitHub issue URL or standalone task identifier;
- `skipped` — concise reason, including false positive, already reported, unavailable action, user choice, or failed creation.
