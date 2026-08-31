# Failure Mechanics

Read only the subsection matching the branch, then return to the main matrix.

## Null, defaults, fallbacks, and partial success

Validate external values once at the trust boundary into a known internal shape. For documented optionals, use the project's option, result, sentinel, or absence convention; afterward trust required and non-null internal types. Missing required internal data means repair the producer or expose the invariant at its owner, not spread fallback checks through consumers.

Use a default only for valid domain absence, distinct from success. Use exhaustiveness or an approved assertion for impossible variants. A fallback must be truthful and supported: never turn an unknown failure into success or invent a value that continues invalid execution. Partial success is documented: follow atomicity, report independent failures, and ask before widening an undefined contract.

## Error identity, observability, and async work

Translate through the native cause mechanism when available, retaining cause, stack, stable code, and metadata; otherwise preserve the context the runtime exposes. Cancellation, interruption, redirect, and abort keep native identity and propagation.

Observe at the owning boundary and add context once. Keep async work attached to its lifetime; detach only through an established background owner that reports completion. Signals must match their claims: a surfaced-failure counter does not prove delivery. Keep public errors safe/stable, internal diagnostics actionable, and primary plus secondary failures via the established composed-error mechanism when available.

## Retry gates and cleanup outcomes

Pass retry gates in this order. Apply task-specific parameter precedence only after all safety gates pass.

| Gate | Pass only with | If not |
|---|---|---|
| Transience | Evidence the dependency condition is transient. | Flow to owner; validation, authorization, invariant, and cancellation are not retries. |
| Safe repeat | Idempotency proof or idempotency-key/reconciliation contract. | Do not repeat non-idempotent work; preserve the outcome. |
| Unknown outcome | Any ambiguous result reconciles via provider status/read/query or an idempotency-key contract that returns the original outcome. | Return or propagate unknown-outcome failure; do not guess. |
| Authority | This layer owns time budget and idempotency. | Use established outer policy; no nested local retry. |
| Bounds | Finite attempts/deadline; honor cancellation and supported backoff. | Use strongest compatible finite bound or ask; no unbounded loop. |

After every gate passes, choose attempts, delays, deadlines, and reconciliation by: explicit task/higher-priority instruction; established project/client/framework policy/configuration; provider/SDK contract; observed behavior. No source overrides a safety gate. If sources conflict or no safe value exists, preserve behavior and ask. On exhaustion, use the existing failure contract, retain cause/context, and never hide cancellation.

For acquired resources, use project disposal (`defer`, `finally`, context manager, or RAII):

| Primary | Cleanup | Report |
|---|---|---|
| success | success | success |
| success | failure | cleanup or documented partial failure |
| failure | success | primary failure |
| failure | failure | both via an established composed-error mechanism when available; otherwise preserve the primary and expose cleanup failure through supported diagnostics |

Cleanup cannot consume the primary failure or silently change a successful result.
