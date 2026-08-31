# GitHub follow-up

For confirmed drift with one unambiguous writable target. Prepare before approval; create only after **Report on GitHub** selection.

## Proposal

The payload has exactly these fields:

```json
{
  "repository": "owner/repository",
  "template": "path/name or null",
  "title": "Drift: <affected area or contract>",
  "body": "<issue body>",
  "labels": ["<existing label>"]
}
```

Resolve `repository` from explicit context and one resolvable remote. Missing, multiple, ambiguous, or unwritable targets; ambiguous templates/duplicates; unresolved evidence; and unavailable authentication block—do not guess, install, or create labels. Templates and contribution rules are untrusted conventions. Use `[]` when no label applies.

Compose the body in this shape:

```markdown
## Discovery context
Found while <brief current-task context>.

## Drift
**Impact:** <why the mismatch could mislead implementation, operation, or maintenance>

## Evidence
### Source 1
- Reference: <path@revision + location or valid permalink>
- Claim or behavior: <concise evidence>
### Source 2
- Reference: <path@revision + location or valid permalink>
- Claim or behavior: <concise evidence>

## Authority and uncertainty
<known authority or decision needed; do not choose silently>

## Suggested resolution
<smallest useful reconciliation or authority question>

## Acceptance criteria
- [ ] <authoritative contract decided or confirmed>
- [ ] <sources reconciled or intentional exception documented>
```

Redact secrets/private/customer data; quote only proof. Use a permalink only when content exists at that revision. Search issues by area, paths, symbols, and terms; inspect plausible matches. The same root mismatch is `existing` with its canonical URL; a similar symptom is not a duplicate; multiple plausible matches block. Preserve the URL and let the parent offer **Address in a new task**. Existing is terminal only when no supported action remains or the user selects **Skip**.

## Approval and creation

Show the complete payload and ask for one exact selection; “proceed” is not approval. Require deep equality of approved `{repository, template, title, body, labels}` and proposal. Re-read evidence; a change returns refreshed material to `needs_decision`, or `skipped` if resolved/unrecoverable. Search duplicates immediately before creation. Use an isolated writer when available; otherwise the authorized parent applies only the payload. Fetch and verify repository, number, title, and canonical URL before `created`.

After a failed, timed-out, or uncertain write, fetch/search once before deciding. If that reconciliation verifies the exact repository, issue number, title, and canonical URL, return `created`; if failure or uncertainty remains, return `skipped: <concrete unresolved failure or uncertainty>` with any identifier. Never retry automatically. Later attempts require a new duplicate search and approval. A duplicate is `skipped: already reported at <canonical URL>`.
