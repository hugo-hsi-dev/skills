# Drift research workflow

This workflow belongs to the parallel subagent. On the initial dispatch, complete steps 1–4 and stop before any external write. Complete step 5 only after the user chooses **Report on GitHub** for the exact proposed issue.

## 1. Research the drift

Treat **drift** as a concrete contradiction or materially stale contract among stable project sources. Read the relevant repository artifacts and history needed to confirm or reject the seed finding.

A finding qualifies only when every conflicting source is reproducible and the difference could mislead implementation, operation, or maintenance. Different wording with equivalent meaning, formatting or style, missing background, generated or vendor files, intentional deprecation, transient branches, and uncommitted work in progress are not drift.

Group evidence that violates the same contract and can be reconciled by the same authority decision. Handle independently resolvable contradictions in separate workflow runs.

Research is complete with one conclusion:

- **False positive:** the mismatch is not reproducible or does not qualify as drift, with a concise reason.
- **Confirmed drift:** the affected area, impact, specific repository references, conflicting claims or behavior, and any uncertainty about the source of truth.

## 2. Research GitHub

For confirmed drift, use GitHub Issues only. Determine the target from explicit project instructions, then from an unambiguous GitHub remote. Read relevant issue templates and contribution rules. Use an available GitHub integration or CLI; do not install one or invent an endpoint.

Search existing issues using the affected area, paths, symbols, and domain terms from the finding. Inspect plausible matches closely enough to distinguish the same root mismatch from a similar symptom.

- If the same drift is already reported, carry its canonical URL forward and do not compose another issue.
- If no matching issue exists and the target is writable, carry forward the applicable template and existing labels. Never create a label.
- If GitHub cannot be resolved, searched, or written, carry the concrete blocker forward.

GitHub research is complete when exactly one of those branches is established.

## 3. Compose the GitHub issue

Compose an issue only when no matching issue exists and GitHub is writable.

Use this title:

```text
Drift: <affected area or contract>
```

Name the affected area precisely enough that a maintainer can route the issue from the title alone. Prefer the project's domain vocabulary over filenames.

Draft the body in this shape, adapting it to any repository issue template:

```markdown
## Discovery context

Found while <brief current-task context>.

## Drift

**Impact:** <why the disagreement matters>

## Evidence

### Source 1

- Reference: <stable path + line/symbol/heading or permalink>
- Claim or behavior: <concise evidence>

### Source 2

- Reference: <stable path + line/symbol/heading or permalink>
- Claim or behavior: <concise evidence>

<repeat for additional conflicting sources>

## Authority and uncertainty

<known source of truth, or the decision needed without choosing a winner>

## Suggested resolution

<smallest useful reconciliation or authority question>

## Acceptance criteria

- [ ] <the authoritative contract is decided or confirmed>
- [ ] <the conflicting sources are reconciled or the intentional exception is documented>
```

Redact secrets and private or customer data. Quote only the minimum text needed to establish the contradiction. Use a GitHub permalink only when the referenced content exists at that commit; otherwise use an honest path and symbol reference.

Composition is complete when the proposed issue has a routable title, reproducible evidence, and acceptance criteria that describe reconciliation rather than an assumed implementation.

## 4. Return the finding

Return only a compact conclusion to the parent agent:

- For a false positive, return the concise reason.
- For confirmed drift, return the affected area, impact, evidence references, and authority uncertainty, followed by exactly one GitHub result: existing issue URL, exact proposed issue payload, or blocker.

Do not return raw research notes, unrelated file contents, full existing issue bodies, or comment threads. The initial subagent run is complete here. Resume with step 5 only if the parent later sends an approved GitHub payload; every other user decision needs no further work from this subagent.

## 5. Create the GitHub issue

Confirm that the repository, title, body, and labels exactly match the approved payload. Re-read the evidence references; if the drift has already been resolved, return `skipped: resolved before submission`.

Recheck for a matching issue immediately before creation. If one now exists, return `skipped: already reported at <canonical URL>`. Otherwise create only the approved issue.

Verify the created issue by reading it and confirming its repository, number, title, and canonical URL. If creation succeeds, return `created: <canonical URL>`.

If the write fails, times out, or returns an unverifiable identifier, search and fetch before considering another attempt. Never retry creation automatically. If the outcome remains uncertain or failed, return `skipped` with the concrete reason and any returned identifier. A later retry requires a new duplicate search and user decision.
