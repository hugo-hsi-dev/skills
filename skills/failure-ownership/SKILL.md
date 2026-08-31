---
name: failure-ownership
description: Use when a task adds, changes, or audits a material failure path, including error handling, recovery, propagation, retry, cleanup, null/default/fallback, partial-success, or defensive branches.
---

# Failure Ownership

Set `OPERATION`: `implement` = authorized add/change/fix; inspect, edit, verify. `audit` = review only; do not edit. Apply this workflow to every material branch—one changing a result, contract, integrity, resource lifetime, observability, or retry. If none exists, no failure-policy work is needed.

## 1. Inspect the failure path

Before changing or judging a branch, answer these questions from the repository:

- What exact runtime state and inputs trigger it?
- What does the code do now, and where does the failure go next?
- Which layer owns the decision, and which existing mechanism expresses its policy?
- Which test, type, configuration, contract, or task requirement defines the expected behavior?

Trace the caller → callee → failure-site path. Locate where untrusted, external, persisted, or untyped data becomes internal state; how failure travels (exception, rejected task, error result, callback/event, status, or exit); and the request, route, component, job, transaction, service, process, logging, or retry boundary that receives it. Check whether event handlers and detached/background work escape the apparent boundary.

Inspect the caller, callee, analogous paths, focused tests, declared types/contracts, configuration, and task requirements as applicable. Research is complete when the trigger, current route, trust boundary, signal, owner, and expected behavior are supported by evidence. If evidence does not establish one of them, treat it as unknown rather than inventing policy.

## 2. Classify and assign ownership

Apply the first matching row. Cleanup is additive after acquisition.

| Order | Condition | Owner/action |
|---:|---|---|
| 1 | Cancellation, interruption, redirect, abort, or native control flow | Preserve identity/propagation; established owner decides. |
| 2 | Expected domain outcome | Use the domain owner's existing contract. |
| 3 | Untrusted boundary input | Validate once at the boundary; return its documented failure. |
| 4 | Explicitly optional side effect | Preserve primary result; degrade observably. |
| 5 | Known transient dependency failure | Retry only at the time-budget/idempotency owner; read [branch mechanics](references/failure-mechanics.md). |
| 6 | Proven impossible state | Use exhaustiveness or approved assertion; never synthesize a value. |
| 7 | Broad invariant violation or unexpected bug | Repair producer when in scope; otherwise propagate or assert at the established owner. |

**Guard rule:** end each guard in exactly one of: continue under a proven invariant; documented boundary/domain failure; primary-preserving optional failure; or propagation. Never map unknown/invariant failure to success, default, or fallback, or hide cancellation. Handle locally only for an owned policy: documented result, cause-preserving translation, authorized compensation, local rendering, observable optional degradation, or retry. Otherwise propagate. Done when each branch has one row, owner, action, and guard outcome.

## 3. Resolve authority

Proceed only when trace evidence names this layer as owner, or explicit task authorization names this owner and scope; a mechanism-only request does not assign ownership. The action must remain in scope. Otherwise preserve the existing path. Authorization never waives trust, security, transaction, integrity, cancellation, or retry gates.

Changes to authority, scope, public results/configuration, infrastructure, observability, or compatibility require authorization from the governing task or project contract. Until that authority exists, preserve the established behavior. How the agent obtains or communicates authorization is outside this skill.

Load [branch mechanics](references/failure-mechanics.md) for null/default/fallback/partial-success, error identity/observability/async, retry, or cleanup. Authority is resolved when the owner and permitted scope are evidenced; otherwise the branch remains unchanged.

## 4. Verify with a matrix

Fill every applicable row with exactly `PASS`, `FAIL`, or `NOT RUN`, plus evidence/reason:

| Check | Result and evidence/reason |
|---|---|
| Expected outcomes use the documented contract | PASS / FAIL / NOT RUN — [...] |
| Unexpected and impossible failures reach the intended owner | PASS / FAIL / NOT RUN — [...] |
| Translation retains cause/context when supported | PASS / FAIL / NOT RUN — [...] |
| Retry passes transience, repeat-safety, reconciliation, authority, and finite bounds | PASS / FAIL / NOT RUN — [...] |
| Cleanup preserves primary and secondary outcomes | PASS / FAIL / NOT RUN — [...] |
| Optional degradation is observable and truthful | PASS / FAIL / NOT RUN — [...] |
| Existing validation, security, transaction, timeout, and integrity protections remain | PASS / FAIL / NOT RUN — [...] |

Review every changed catch, conversion, guard, default, fallback, retry, assertion, wrapper, or partial-success branch. In `implement`, correct every `FAIL`; code work is complete when no applicable row is `FAIL`. In `audit`, leave code unchanged. `NOT RUN` means unverified and never becomes `PASS` without evidence. Verification is complete when every applicable row has a truthful status and evidence or reason.
