---
name: frontend-design
description: "Use when a web-frontend task materially changes or evaluates rendered presentation or interaction states: a new or changed screen/component, layout, typography, color, imagery, responsive behavior, motion, or states such as loading, empty, error, disabled, focus, hover, or success. For a localized visual fix, limit work to the affected surface and states; skip behavior-only work that leaves rendered output unchanged."
---

# Frontend Design

Use this recipe when the task changes or evaluates what users see or interact with in the rendered interface. It sets visual direction and quality; preserve the project stack, contracts, and product behavior.

## 1. Route the work

Set these values once before choosing a direction:

- `OPERATION`: `implement` changes the interface; `audit` inspects and reports without editing.
- `SCOPE`: `targeted` is one existing surface, breakpoint, or state, including a localized visual fix; `substantive` is greenfield, an overhaul, or a multi-surface/shared-system change.
- `CHANGE_MODE`: `greenfield` derives a new surface from the brief; `preserve-and-modernize` keeps recognizable identity and structure while improving it; `visual-overhaul` establishes a new thesis while preserving out-of-scope content and behavior; `not-applicable` is for audits without redesign work and targeted/localized fixes.

If a material ambiguity changes operation, scope, or mode, revise the values and follow the new route. An audit never edits.

## 2. Inspect evidence

Read the brief, relevant routes/components/styles, tests, configuration, and current render or preview. For `targeted`, inspect the affected surface and shared dependencies; for `substantive`, include the shared system and every affected surface. Inventory tokens, primitives, patterns, brand assets, icons, fonts, animation capabilities, and dependencies. Record contracts visual work could disturb: routes, semantics, navigation, forms, tracking, analytics, SEO, localization, and legal copy.

Inspect every supplied screenshot, URL, admired, and rejected example. Extract its principle (hierarchy, rhythm, density, material, interaction, or tone), not surface details. Record unavailable evidence as a limitation.

Before direction, be able to name the affected surface, primary user job, audience, existing visual system or its absence, relevant constraints, and contracts.

## 3. Audit route

When `OPERATION=audit`, load [audit-and-scope.md](references/audit-and-scope.md). Also load it before resolving a scope decision or setting direction for a redesign implementation. Load [visual-qa.md](references/visual-qa.md) when rendered, responsive, accessibility, performance, or interaction-state checks are in scope, and load [visual-system.md](references/visual-system.md) only for detailed visual findings.

Compare source and rendered evidence with the applicable rules. Use the audit finding template in `audit-and-scope.md`, ordered by impact and confidence. Do not set dials, write a thesis, plan implementation, or edit files in an audit. Go to step 6.

## 4. Set implementation direction

For `OPERATION=implement`, load [visual-system.md](references/visual-system.md). For `SCOPE=substantive`, prepare this preflight before editing:

```text
Evidence: [brief, repository, render, references, assets, constraints]
Assumptions: [only unresolved assumptions that affect the result]
Design Read: Reading this as a [surface] for [audience], using [visual language] to make [primary job] feel [quality].
DESIGN_VARIANCE: [1-10] — [composition consequence]
MOTION_INTENSITY: [1-10] — [movement and reduced-motion consequence]
VISUAL_DENSITY: [1-10] — [information and scan consequence]
Visual thesis: [one coherent idea expressed through type, palette, composition, shape, material, and motion]
Decision: [proceed] or [ask one question]
```

For a targeted change, keep the goal and local principle internal or state them briefly; use dials or a thesis only when they resolve a consequential choice. For artifact-only output, keep the preflight and handoff internal; return only the requested artifact.

Ask one question only when two plausible readings remain, available evidence cannot resolve them, and the choice materially changes the result. If `request_user_input` is available, call it with 2–3 mutually exclusive options, put the recommendation first, and suffix its label with `(Recommended)`. Otherwise ask this exact question as the final response and end the turn—never put a blocking question in commentary:

```text
I found [ambiguity]. [Option A] and [Option B] lead to different [outcome]. Which should govern?
```

If no question is needed, state the assumption and proceed. Cover every applicable changed interaction state—default, hover where relevant, focus, active, disabled, loading, empty, success, and error—without inventing unsupported product behavior.

## 5. Implement within contracts

Preserve the selected framework, tooling, component architecture, styling approach, route structure, semantics, and conventions. Reuse coherent tokens, primitives, and patterns. Do not migrate, install a new component system, or add a dependency just to express a preference. Keep brand assets, tracking, analytics, SEO, localization, and legal copy unless explicitly in scope.

Before using a new external/generated asset, icon family, typeface, animation capability, or dependency, record:

```text
Need: [material and affected surface]
Authorization: [user request or project authorization]
Provenance/terms: [source, license, usage limits]
Impact: [install, performance, maintenance, contract consequence]
Decision: [use / existing alternative / ask]
```

Proceed only when authorization, terms, and impact are acceptable; otherwise use existing resources or name the missing requirement. Apply `visual-system.md`.

## 6. Verify and hand off

After implementation, load [visual-qa.md](references/visual-qa.md) and follow its coverage, mechanical checks, status matrix, and maximum-three-pass refinement loop exactly. If no browser or preview exists, run the strongest static checks and mark rendered checks `not-run`. For an audit, include only checks actually in scope and do not imply edits or rendered verification.

Implementation handoff:

```text
Direction: [Design Read/thesis or targeted principle]
Changed: [files and contracts intentionally preserved]
Coverage: [viewports and applicable interaction/content states]
QA: [visual-qa status matrix]
Limitations: [unavailable evidence, tools, or unresolved failures]
```

Audit handoff:

```text
Findings: [prioritized audit findings using the exact template]
Checks: [only checks in audit scope]
No edits: [confirm source was not changed]
Limitations: [unavailable evidence or verification]
```

The handoff is complete when it is self-contained, distinguishes evidence from assumptions, gives a status for every applicable check, and names every unresolved limitation.
