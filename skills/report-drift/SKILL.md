---
name: report-drift
description: "Drift: load this skill before choosing or reporting whenever any task reaches this suspicion threshold: two stable project sources—or one stable project source and observed current behavior—appear incompatible or materially stale, and relying on either could change implementation, operation, or maintenance. Covers architecture, ownership, interfaces, data, configuration, process, and runtime behavior."
---

# Report Drift

Drift branches the current task. The description triggers loading; [research-contract.md](references/research-contract.md) decides whether it is confirmed.

## Ordered workflow

1. **Branch.** Record the seed. Pause only the path blocked on authority; continue independent work and expose uncertainty.
2. **Freeze.** Freeze only evidence paths/observation records. For every path record a content hash and, when clean, its revision; for dirty paths record the dirty hash and admit them only when the task explicitly establishes stability. Context isolation ≠ filesystem isolation/worktree; frozen evidence stays read-only.
3. **Research.** Read [research-contract.md](references/research-contract.md) yourself. Resolve capabilities and send its exact read-only brief to a context-isolated subagent, or follow it inline. Initial research makes no edits, issue, message, or user-visible task.
4. **Validate.** Recompute every frozen path’s content hash and every clean revision before validation and follow-up. If evidence changes before validation, refreeze and retry once; a second change is `skipped: unstable evidence`. Accept only schema-valid results tied to the freeze; a research `false_positive` or top-level `blocked` result becomes terminal `skipped: <reason>` and never confirms. After validation, a change refreshes finding/proposals and returns to `needs_decision`; resolved or unrecoverable evidence is `skipped`.
5. **Prepare.** For confirmed drift, read [github-follow-up.md](references/github-follow-up.md) only when GitHub follow-up is supported, and [task-follow-up.md](references/task-follow-up.md) only when a user-visible task primitive is supported. Show each supported action’s complete payload/brief. A GitHub action blocker does not end the branch while a task action remains supported; an existing issue is terminal only if no supported action remains or the user selects **Skip**.
6. **Decide.** If neither follow-up capability is supported, return terminal `skipped: no supported follow-up capability`. Otherwise recommend among supported actions: explicit user preference, GitHub, task, Skip. A recommendation or “proceed” is not authorization. When `request_user_input` is exposed, offer the supported subset of **Report on GitHub** and **Address in a new task**, plus **Skip**, as 2–3 mutually exclusive options with the recommendation first and labeled `(Recommended)`. Otherwise show the supported proposals, ask `Which supported action should I take?` in the final, and stop—never block in commentary or render a textual multiple-choice question. No answer remains `needs_decision`.
7. **Apply.** Require an exact-label selection and unchanged payload/brief; a generic/no selection or mismatch returns to `needs_decision`. Recheck the freeze. Use an isolated GitHub writer when available, otherwise the authorized parent; use the native task primitive. If the selected action is blocked and another supported action remains, return to **Prepare**; otherwise emit `skipped` only for an explicit **Skip**, resolved evidence, or an unrecoverable blocker. **Skip** does nothing.
8. **Finish.** Include the requested result plus finding, decision, issue, follow-up, marker, or blocker. `needs_decision` is nonterminal; `created`, `queued`, `completed`, and `skipped` are terminal.
