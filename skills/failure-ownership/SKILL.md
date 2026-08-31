---
name: failure-ownership
description: Use when a task materially changes failure behavior or audits a material failure path involving error handling, recovery, propagation, retry, cleanup, or defensive branches.
---

# Failure Ownership

Place failure policy at the layer that can act meaningfully. Every new defensive branch needs four answers:

- **Condition:** Which evidenced state or failure triggers it?
- **Owner:** Why does this layer decide what happens next?
- **Action:** How does the branch restore, translate, degrade, retry, clean up, or expose the contract?
- **Evidence:** Which repository fact, external contract, reproduced failure, or explicit task requirement supports that choice?

Explicit task requirements may intentionally change an established failure contract within their authorized scope. When evidence is still incomplete, follow any higher-priority instruction; otherwise preserve the established propagation path or invariant instead of inventing policy locally.

## Trace the existing path

Before editing, inspect enough surrounding code to explain the current failure route:

1. Read the relevant caller and callee, analogous code, focused tests, and declared types or contracts.
2. Locate the trust boundary where untyped, external, user-controlled, persisted, or otherwise untrusted data becomes internal state.
3. Determine how this runtime or API reports failure: exception, rejected task, error result, callback, event, status, process exit, or another mechanism.
4. Find existing request, route, component, job, transaction, service, or process boundaries, plus centralized logging and retry policy.

The trace is complete when you can state where the failure currently goes and name the nearest established owner. Verify the boundary's actual scope; a nearby boundary may not cover event handlers, detached work, sibling scopes, or background execution.

## Classify the condition

Classify from repository evidence before selecting a mechanism.

| Condition | Usual direction |
|---|---|
| Expected domain outcome | Represent it through the project's existing result, option, status, or error value contract. |
| Untrusted boundary input | Validate once at the boundary and return the contractually appropriate failure. |
| Unexpected bug or invariant violation | Fix the producer when in scope; otherwise assert, throw, reject, or propagate to the established owner. |
| Known transient dependency failure | Let the layer owning time budget and idempotency apply the existing bounded retry policy. |
| Explicitly optional side effect | Preserve the primary result and make the supported degradation observable. |
| Cancellation or runtime control flow | Preserve its native identity and propagation semantics when the runtime exposes them. |
| Cleanup obligation | Use the language or framework's structured cleanup mechanism while preserving the primary outcome. |
| Proven impossible internal state | Rely on the invariant, exhaustiveness, or a project-approved assertion instead of adding fallback behavior. |

Treat merely conceivable conditions as hypotheses. They become implementation cases only when the available evidence gives this code responsibility for them.

## Assign the owner

Handle locally when the current layer can perform an owned policy action that a higher boundary cannot perform correctly:

- recover to a valid, documented result;
- translate at an abstraction boundary while preserving the original cause when the language or runtime supports it;
- compensate or roll back in-scope state it owns when the contract authorizes that action;
- render or return an expected local failure state;
- apply an established best-effort degradation for optional work;
- retry with knowledge of transience, idempotency, and any applicable cancellation or deadline controls;
- release resources through structured cleanup.

Otherwise, let the failure reach the established framework, request, job, service, or process boundary. Preventing a crash is not by itself recovery: a rejected operation, non-zero exit, error response, framework fallback, or failed job can be the correct and most observable contract.

Keep a handler or guard scoped to the operation whose condition it understands. Unknown failures remain visible to the next owner.

Unless an explicit task requirement or higher-priority instruction changes a broader contract, the owned action reuses existing project mechanisms and changes only the current contract. New infrastructure, public result shapes, configuration, dashboards, alerts, or future compatibility paths need explicit task evidence rather than being inferred from a local failure branch.

## Calibrate null and default branches

A null, undefined, missing-value, optional-chain, or default branch changes semantics just as a catch does.

- At a trust boundary, validate external values into a known internal shape.
- For documented optional data, follow the project's existing option, result, sentinel, or absence convention.
- After validation, trust required fields and non-null internal types. Keep downstream code direct under that invariant.
- When required internal data can be absent, repair the producer or expose the invariant violation at its owner rather than distributing fallback checks through consumers.
- Use a default only when absence is itself a valid domain value. Keep required absence distinguishable from success.
- Use exhaustiveness or an assertion for impossible variants when it improves diagnosis; avoid a synthetic value that lets execution continue in an invalid state.

## Preserve failure information

- Translation retains the original cause, stack, stable code, and useful metadata through the language's native mechanism when those facilities exist; otherwise preserve the available failure context without inventing unsupported fields.
- Cancellation, interruption, redirect, abort, and similar control-flow signals retain their identity when the runtime exposes it; otherwise preserve their available native behavior.
- Observability belongs at the boundary that owns reporting. Add context once; repeated log-and-rethrow layers create noise without adding policy.
- Async work stays attached to an owning lifetime so both immediate and deferred failures are observed. Detach only through an established background-work mechanism that owns completion and reporting.
- Degradation observability uses an existing mechanism that preserves the primary contract. Its claim matches its signal: a surfaced-failure counter does not prove eventual delivery or detect silent downstream loss.
- Public errors expose safe, stable information while internal diagnostics retain actionable detail.
- Partial success is an explicit domain contract. Follow the documented atomicity for aggregate work; when parts are independent or optional, report their individual failures without making the primary result appear more successful than it is.
- A fallback produces a truthful supported state, never apparent success fabricated from an unknown failure.

## Bound retries and cleanup

A retry belongs to one deliberate layer. Add it only for a known transient condition and an idempotent operation or explicit reconciliation contract. Use a finite attempt bound; honor a total deadline and cancellation when the existing runtime or client supports those controls, and follow the project's backoff policy. If a provider or runtime does not expose a deadline or cancellation hook, preserve its established contract and use the strongest compatible bound rather than inventing an incompatible interface. Prefer an existing client or framework policy over a nested local retry loop. Take attempt counts and delays from an explicit task requirement, existing project policy, or provider/SDK contract; preserve or expose existing configuration when those values are unspecified instead of inventing them. Retry exhaustion follows the existing failure contract and preserves the available cause or failure context. Deterministic validation, authorization, invariant, and cancellation outcomes flow directly to their owner.

Use structured cleanup such as disposal, defer, `finally`, context management, or RAII according to the project. Cleanup alone does not require consuming the primary failure; if cleanup also fails, preserve both outcomes using the language's established mechanism.

## Verify and stop

Review every added catch, error conversion, null guard, default, fallback, retry, assertion, wrapper, and partial-success branch. Each must have a condition, owner, action, and evidence.

Test the selected policy, not generic crash avoidance. As applicable, prove that:

- expected outcomes use their documented contract;
- unexpected failures reach the intended boundary;
- translated errors retain their cause when the language or runtime supports cause chaining;
- retry stops within its budget and respects cancellation;
- cleanup runs without hiding the primary failure;
- optional degradation stays observable and leaves the primary result truthful;
- established security, validation, transaction, timeout, and integrity protections remain intact.

For one-shot work, once the requested behavior and direct verification pass, stop. A task that explicitly requests monitoring, follow-up, persistence, or continued work may continue according to that request. Explore additional hypothetical failure paths only when they can materially change safety, security, data integrity, or an explicit contract.
