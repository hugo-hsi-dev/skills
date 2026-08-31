# Visual QA reference

Load after implementation, or during an audit that includes rendered behavior, responsive layout, accessibility, performance, or interaction states. This reference owns QA coverage, the status matrix, and the maximum-three-pass refinement loop.

## Coverage

For structural, responsive, or multi-surface work, inspect a representative narrow mobile, intermediate tablet/small-laptop, and wide desktop viewport. For targeted work, inspect affected breakpoint(s), one nearby regression boundary, and relevant states. Cover every applicable state that changes layout or behavior: default, hover where pointer-relevant, focus, active, disabled, loading, empty, success, and error. If a state is not supported by the product, do not invent it; mark it out of scope. If no browser or preview exists, run static checks and mark rendered checks `not-run`.

## Checks

- **Responsive composition:** design mobile intentionally; decide order, alignment, crop, spacing, and interaction for each multi-column/asymmetric section. Preserve image focal points, reserve media dimensions, account for safe areas, and test long labels, localization expansion, zoom, dynamic content, clipping, and reflow.
- **Overflow:** at every checked viewport run a mechanical horizontal test: `document.documentElement.scrollWidth <= document.documentElement.clientWidth` (and the relevant scroll container when applicable). Any unexplained horizontal overflow fails. Hiding it with `overflow-x: hidden`, clipping, or a masking overlay is not a pass; find and fix the cause.
- **Navigation and conversion:** where applicable, mobile navigation is reachable and operable; primary actions have an accessible name, visible focus, input-suitable target, and a real authorized destination. Do not substitute a placeholder URL or invented flow.
- **Hierarchy/content:** primary job and action are obvious. Check information density, line length, small-label legibility, truthful copy, required proof/content for marketing or launch work, and purposeful repetition. Do not apply the marketing hero rule to non-marketing surfaces.
- **Accessibility:** preserve semantic reading/tab order; check names, focus, contrast on actual backgrounds and overlays, keyboard/touch operation, text zoom/reflow, screen-reader relationships, field labels/errors, and reduced motion as applicable. Never communicate status by color alone.
- **Performance/motion:** reserve media dimensions, size initial assets, avoid unearned fonts/effects, and watch layout shift, main-thread work, animation stutter, and interaction latency. Continuous/autoplay motion needs pause controls and reduced-motion behavior.
- **Contracts/scope:** verify the diff/source against the selected stack, routes, semantics, assets, analytics, SEO, localization, legal copy, and request scope.

## Matrix and refinement

Record one status per applicable check. `pass` requires evidence; `fail` means a concrete issue remains; `not-run` means required evidence or tooling was unavailable.

```text
| Check | Evidence | Status | Follow-up or limitation |
| Visual direction and hierarchy | [viewport/state/source] | pass/fail/not-run | [detail] |
| Responsive composition | [viewport/boundary] | pass/fail/not-run | [detail] |
| Interaction and content states | [state] | pass/fail/not-run | [detail] |
| Accessibility | [keyboard/zoom/contrast/screen reader/etc.] | pass/fail/not-run | [detail] |
| Performance and motion | [trace/render/reduced-motion] | pass/fail/not-run | [detail] |
| Overflow/navigation/conversion | [viewport/command/destination] | pass/fail/not-run | [detail] |
| Contracts and scope | [diff/source check] | pass/fail/not-run | [detail] |
```

Refine in at most three passes. Each pass names a failed check, makes the smallest useful correction, and reruns that check plus a nearby regression. Stop when all applicable checks pass, no concrete issue remains, or a pass makes no improvement. Report unresolved failures and unrun checks; do not polish toward subjective perfection. If an expressive surface remains generic, return once to the Design Read and strengthen one distinctive brief-supported idea. If a familiar task surface is intentional, verify that restraint improves usability.
