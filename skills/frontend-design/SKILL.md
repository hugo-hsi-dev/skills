---
name: frontend-design
description: Use when a web-frontend task materially establishes, changes, or audits visual or interaction output, especially a new page or screen, significant layout or style change, responsive composition, or motion design. For a targeted visual fix, apply it only to the affected surface and states; skip behavior-only work that leaves presentation intact.
---

# Frontend Design

Design from the brief, not from frontend defaults. Preserve the project's framework, build tooling, component architecture, and established conventions. This skill sets visual direction and quality criteria; it does not choose the stack.

## Read signals first

Before changing the interface, read the room. Infer the design from the evidence instead of reaching for a familiar aesthetic.

For substantive visual work, read these signals together. For a targeted change, inspect the signals that can affect the changed surface or its contracts:

1. **Surface:** marketing page, portfolio, editorial page, commerce, application shell, dashboard, workflow, or redesign.
2. **Job:** the primary action the interface must make easy and the information that earns that action.
3. **Audience:** who is deciding, what they already understand, and whether they value speed, trust, expression, clarity, or depth.
4. **Vibe language:** words such as quiet, technical, playful, premium, institutional, editorial, experimental, utilitarian, or warm.
5. **References:** supplied screenshots, URLs, competitors, admired products, and explicitly rejected examples. Extract principles rather than copying surface details.
6. **Existing identity:** logo, type, palette, imagery, spacing, voice, and recognizable interaction patterns.
7. **Constraints:** accessibility, regulation, localization, content volume, device context, performance, and available assets.
8. **Change mode:** greenfield, preserve-and-modernize, or visual overhaul.

If two plausible readings would lead to materially different designs, ask one focused question only when the missing fact cannot be safely inferred or discovered from the brief, repository, or available preview and would materially affect the outcome. Otherwise state the assumption briefly and proceed.

For greenfield work, a visual overhaul, or another substantive multi-surface change, state a one-line **Design Read** before implementation:

> Reading this as a [surface] for [audience], using a [visual language] to make [primary job] feel [intended quality].

The read is complete when it explains the page kind, audience, visual language, and product goal without naming a framework or library. For a targeted change, keep this read internal or state only the affected goal when it helps align a consequential choice.

## Set the three dials for substantive visual work

For substantive visual work, set and briefly justify three values from 1 to 10. They are decisions, not user-facing controls. For a targeted change, the dials are optional and may remain internal; set only the values that guide the affected surface and do not add numeric ceremony when the existing system already answers the question.

- **`DESIGN_VARIANCE`:** 1 is strict repetition and symmetry; 10 is expressive asymmetry and compositional surprise.
- **`MOTION_INTENSITY`:** 1 is nearly static; 10 is highly choreographed or scroll-orchestrated.
- **`VISUAL_DENSITY`:** 1 is gallery-like and sparse; 10 is compact, information-rich, and operational.

Use the brief, not a universal baseline:

| Signal | Variance | Motion | Density |
|---|---:|---:|---:|
| Public service, regulated flow, accessibility-critical | 2-4 | 1-3 | 4-6 |
| Dense dashboard or operational tool | 3-5 | 2-4 | 7-9 |
| Mainstream product or SaaS application | 4-6 | 3-5 | 5-7 |
| Mainstream marketing or SaaS landing page | 6-8 | 4-6 | 3-5 |
| Premium consumer or brand launch | 7-8 | 5-7 | 2-4 |
| Creative studio, campaign, or expressive portfolio | 8-10 | 7-9 | 2-4 |
| Editorial or long-form reading | 5-7 | 2-4 | 3-5 |
| Preserve-and-modernize redesign | Infer current numeric value, then keep or adjust deliberately | Usually current +0-1 | Infer from content needs |

Let the dials govern the whole interface:

- Higher **`DESIGN_VARIANCE`** changes composition, alignment, scale contrast, overlap, and section rhythm. It does not mean random decoration.
- Higher **`MOTION_INTENSITY`** increases choreography only when motion communicates hierarchy, feedback, causality, or narrative.
- Higher **`VISUAL_DENSITY`** increases visible information and shortens travel while preserving grouping and scan order.
- On small screens, reduce spatial variance before sacrificing hierarchy or legibility.
- When dials are set, keep all values numeric and within 1-10. For redesigns that use them, first estimate the current values, then clamp any adjustment to that range.

When used, the dials are complete when another designer could predict the interface's composition, movement, and information load from them.

## Establish a visual thesis when the scope warrants one

For greenfield work, a visual overhaul, or a multi-surface change, choose one coherent idea that can direct the page. Define it through:

- **Type:** the roles of display, body, labels, and data text.
- **Palette:** dominant neutrals, accent strategy, and contrast character.
- **Composition:** grid behavior, alignment, scale changes, and whitespace rhythm.
- **Shape:** corner, border, control, and container language.
- **Material:** flat, tactile, photographic, glass-like, paper-like, industrial, or another brief-supported treatment.
- **Motion:** what moves, why it moves, and what remains still.

A thesis such as "quiet technical precision through compact type, cool neutrals, sharp geometry, and state-driven motion" is useful. A label such as "modern" is not.

Every prominent choice within scope should reinforce the thesis. For a targeted change, align with the existing thesis or define only the local principle needed to make the change coherent. Variation should create rhythm inside the system, not introduce a second system.

Before implementation, communicate the direction compactly for substantive visual work: evidence and assumptions, the **Design Read**, the three numeric dials and their consequences, and the visual thesis. For a targeted change, communicate only the reasoning needed to make consequential visual decisions. Keep the preflight short enough that it supports the work instead of delaying it.

## Direct the design

### Typography

- Give display type and body type distinct jobs. Build hierarchy with size, weight, width, spacing, and contrast rather than size alone.
- Choose typography from the brand and content. A creative brief does not automatically call for a display serif; use serif when editorial, literary, heritage, or luxury cues genuinely support it.
- Keep emphasis within the same family unless the brief, identity, or visual thesis establishes a deliberate mixed-type system.
- Keep body measures readable and line height comfortable. Audit large italic or tightly led type for clipped glyphs.
- Use small uppercase labels only when they add orientation. Repeating an eyebrow above every section creates template rhythm; on marketing pages, one across roughly three sections is a useful starting heuristic, not a quota.

### Color

- Build one palette with a clear neutral temperature and a small number of semantic roles.
- Choose the accent because it belongs to the brand or subject. Keep it consistent across calls to action, focus states, links, and highlights.
- Calibrate saturation against the intended tone. Premium does not automatically mean beige, brass, clay, and espresso; technology does not automatically mean purple-blue glow.
- Use gradients, transparency, and glow as materials with a role, not as proof of polish.
- Verify text, controls, focus indicators, and information states against their actual backgrounds.

### Composition and rhythm

- Make the primary task and reading order obvious before adding novelty.
- Compose the opening viewport as one clear moment. Marketing heroes usually need a concise headline, short support copy, and a clearly prioritized action; supporting proof belongs in its own section.
- Vary section layout according to content. Repeating identical card rows or alternating image-text splits makes the page feel generated.
- Use asymmetry through meaningful differences in scale, alignment, span, or whitespace. Preserve a stable underlying grid.
- Use containers and cards when they express grouping, interaction, or elevation. Prefer spacing, alignment, and restrained dividers when a box adds no meaning.
- Give grids the exact number of cells their content needs. Empty decorative cells and repeated filler weaken the composition.
- Keep horizontal navigation stable, compact, and single-line on desktop when practical. Condense, prioritize, or change the navigation pattern rather than allowing accidental wrapping.

### Shape and surface

- Establish a small radius system and apply it consistently to surfaces and controls.
- Match shadows to the surrounding palette and elevation. Stronger shadows imply stronger separation.
- Use borders, blur, grain, and highlights sparingly enough that material differences remain legible.
- Preserve one page-level theme unless a deliberate theme transition is part of the concept.

### Imagery and graphic language

- Use imagery that advances the story: product evidence, context, process, people, place, or atmosphere.
- Prefer supplied brand assets and real product captures. When new imagery is needed, first check existing assets and project tooling; generate or source it only when the task authorizes that work and the result can be used with suitable licensing and usage rights. If material is sourced externally, preserve its provenance and usage terms with the change.
- Present real interface evidence or a working embedded preview when showing a product. Decorative rectangles that imitate screenshots erode trust.
- Text-led composition is valid when the thesis supports it. Do not use it accidentally as a substitute for missing visual direction; if imagery is essential but unavailable, define the required asset and placement explicitly.
- For each non-decorative visual added or changed, define meaningful alternative text; use an empty alternative for decorative assets and a caption only when it adds context. Confirm provenance and usage rights for any externally sourced material.

### Icons

- Use the project's existing icon family. If the scope permits adding one, choose a coherent family such as Phosphor Icons, Hugeicons, Radix Icons, or Tabler Icons.
- Resolve the correct package or integration for the project's framework at implementation time; the design guidance is independent of package naming.
- Keep one optical style and consistent stroke or fill treatment. Use familiar symbols for common actions and label ambiguous ones.
- Create custom marks only when the brief calls for original identity work and the result can be visually verified.

### Motion

- Give every animation a communicative reason: hierarchy, feedback, continuity, state change, or narrative sequence.
- Match quantity and amplitude to the motion dial. A calm product can feel responsive through precise state transitions without perpetual movement.
- Choreograph a few high-value moments instead of animating every element.
- Use continuous or autoplay motion only when the content benefits from it; make it pausable and subordinate it to reduced-motion preferences.
- Animate properties that avoid layout churn, and keep interaction responsive under load.
- Provide a reduced-motion experience that preserves state, hierarchy, and comprehension.
- Complex scroll behavior must remain understandable with motion disabled and usable by keyboard and touch.

### Content and interaction

- Write in one voice. Prefer concrete claims and functional labels over generic hype or faux-poetic metadata.
- Do not fabricate metrics, testimonials, customers, technical precision, or scarcity. Clearly label sample data when mock content is necessary.
- Keep labels consistent for the same action and context. Use different labels only when the content, audience, or resulting action genuinely differs.
- For each interactive surface added or changed, design the relevant interaction cycle: default, hover where relevant, focus, active, disabled, loading, empty, success, and error as applicable to the product and affected layout. Do not invent unsupported product behavior merely to satisfy a checklist.
- For each field added or changed, provide a persistent, programmatically associated label; keep errors contextual and make recovery obvious.

### Responsive behavior

- Design the mobile composition, not merely the desktop collapse.
- For each multi-column or asymmetric section, decide the small-screen order, alignment, crop, spacing, and interaction model explicitly.
- Preserve the focal point of imagery across crops and reserve media dimensions to prevent layout shift.
- For minimum viewport sizing, prefer stable small-viewport behavior; use dynamic viewport behavior only when the layout is meant to track browser chrome, and account for device safe areas.
- Check long labels, localization expansion, zoom, and dynamic content before treating a layout as complete.

### Accessibility and performance

- Preserve semantic reading and tab order on affected or newly added surfaces. Every interactive element in those surfaces needs an accessible name, visible focus, and a target suited to its input method.
- For statuses and visual layers affected by the change, do not rely on color alone. Check contrast in every relevant state and over every image, gradient, translucent surface, or overlay.
- For affected or newly added surfaces, verify text zoom and reflow, keyboard operation, screen-reader relationships, touch behavior, and reduced-motion behavior as applicable to the change.
- Reserve media dimensions, keep initial visual assets appropriately sized, and avoid loading fonts or imagery that do not earn their cost.
- Watch for layout shift, long main-thread work, expensive visual effects, and animation stutter in the rendered result.

## Audit the defaults

Generic output usually comes from an unexamined default rather than a lack of decoration. Look for these tells. During implementation, replace each with a brief-supported decision; during an audit, recommend the correction:

- A centered headline over a glow followed by three equal feature cards. Give the opening and feature story a composition derived from the actual content.
- The same card treatment around every concept. Use grouping, whitespace, dividers, media, and scale where they communicate hierarchy more clearly.
- Repeated image-text zigzags or identical section headers. Change the rhythm when the section's job changes.
- Eyebrows, section numbers, version stamps, decorative status dots, scroll cues, or locale and weather strips that carry no information. Remove ornamental metadata; keep labels that orient or communicate state.
- Purple-blue gradients for technology and beige-brass palettes for premium goods without evidence from the brand. Choose color from subject, audience, and identity.
- Oversized type, glass, glow, grain, or animation used as a substitute for hierarchy. Give each expressive device a specific role in the thesis.
- Generic claims, invented precision, placeholder brands, or faux-craftsman phrasing. Use concrete, truthful copy suited to the audience.
- Fake product screenshots or decorative interface fragments. Show real evidence, a functioning preview, an intentional illustration, or a clearly specified asset need.

The audit is complete when every distinctive or restrained choice is traceable to the brief, audience, content, task, or identity. Familiarity is a valid choice for operational and public-service interfaces when it improves speed or trust.

## Adapt to the surface

The same aesthetic intensity does not belong everywhere.

- **Marketing and launches:** lead with an ownable composition, concise value proposition, real proof, and a controlled conversion path. Spend motion on narrative and emphasis.
- **Portfolios and creative sites:** allow higher variance and typographic expression, but keep work samples, authorship, and navigation immediately understandable.
- **Editorial and long-form:** prioritize reading measure, pacing, image-caption relationships, and calm navigation. Let content create visual variation.
- **Product applications:** prioritize task completion, predictable placement, complete states, and repeated patterns. Express the brand through type, color, tone, and selected moments rather than constant novelty.
- **Dashboards and dense tools:** raise density, strengthen grouping, align numbers, keep controls stable, and reserve color for meaning. Decorative motion competes with monitoring.
- **Commerce and premium consumer:** make product evidence, trust, tactile detail, and purchase clarity do the work. Avoid category-default luxury palettes unless the brand supports them.
- **Public-sector and regulated services:** make trust, accessibility, plain language, and error prevention the aesthetic. Restraint is a design decision, not a lack of creativity.

## Handle redesigns deliberately

Classify the change before editing:

- **Preserve and modernize:** keep recognizable identity and structure; improve typography, spacing, color calibration, responsiveness, and interaction quality.
- **Visual overhaul:** establish a new thesis while preserving content and behavior that the user did not ask to change.
- **Greenfield:** derive the system directly from the brief.

For a redesign, first audit the affected routes and surfaces, expanding the audit only where the change could disturb a shared contract:

- brand tokens and signature visual cues;
- information architecture, routes, navigation, and conversion paths;
- reusable patterns and inconsistent exceptions;
- content that earns its space versus filler;
- responsive, accessibility, performance, and state gaps;
- analytics, SEO, or form contracts that visual work could accidentally disturb.

Preserve route structure, content semantics, brand assets, tracking hooks, and legal copy unless the user explicitly includes them in scope. Modernize from lowest-risk, highest-leverage changes toward structural recomposition.

## Work within the project

- Inspect the existing frontend before proposing a visual system. Reuse its tokens, primitives, and conventions when they are coherent.
- Keep the selected framework and styling approach. Do not migrate, install a new component system, or change architecture merely to express the design.
- When a dependency or design system already exists, adapt it through the project's supported theming and composition mechanisms.
- Check the environment before using any external asset, icon family, typeface, or animation capability.
- Treat implementation choices as local consequences of the design read, not universal recommendations in this skill.

## Handle audit-only requests

When the user asks for review rather than implementation, inspect the existing source and rendered interface when available. Report prioritized findings with concrete evidence, explain the user or design-system consequence, and recommend the smallest useful correction. Do not imply that changes or rendered verification occurred.

An audit is complete when every finding is tied to an observable issue, ordered by impact, and paired with a practical next action. If rendering is unavailable, perform source-level checks and state the visual-QA limitation explicitly.

## Visual QA

For implementation tasks, inspect the rendered result, not only the source, at viewports and states proportionate to the affected surface and regression risk. Responsive, structural, or multi-surface work normally warrants a representative narrow mobile width, an intermediate tablet or small-laptop width, and a wide desktop width. A targeted change may need only the affected breakpoint(s), one nearby boundary likely to regress, and the relevant interaction or content states. Exercise states that materially change layout or behavior. If no browser or preview is available, perform the strongest static checks possible, state the missing visual-QA coverage, and do not claim rendered verification.

For implementation tasks, revise until all applicable checks for the affected surfaces and states are true:

- The result has an identifiable visual thesis grounded in the brief, or the targeted change coherently extends the existing one.
- The three dials describe what was actually built when they were used.
- Hierarchy, reading order, and primary actions are obvious at each checked viewport.
- Changed typography, palette, shape, imagery, and motion form one system with the surrounding surface.
- Repeated sections affected by the change have purposeful rhythm rather than template repetition.
- Text, controls, focus states, forms, and overlays affected by the change meet accessibility needs.
- Motion introduced or changed is motivated, performant, and reduced-motion safe.
- Where responsive behavior is in scope, mobile behavior is composed explicitly, with no clipping, accidental overflow, or fragile viewport sizing.
- Affected interactive surfaces cover relevant loading, empty, error, success, disabled, focus, and active states.
- Visible copy changed by the work is coherent, truthful, and free of fabricated specificity.
- The implementation respects the existing stack and the scope of the request.

For an implementation handoff, summarize the implemented direction, relevant viewport and state checks, changed files, and unresolved limitations. For an audit handoff, summarize prioritized findings, evidence, recommended corrections, and verification limitations. Use a bounded refinement loop: tie each subjective adjustment to a named issue, recheck the affected viewport or state, and stop when no concrete issue remains or a focused pass produces no improvement. If a branded or expressive surface still feels generic, return once to the Design Read and strengthen the most distinctive brief-supported idea. If a task-focused surface is intentionally familiar, verify that the restraint improves usability rather than reflecting an unexamined default; do not continue polishing toward subjective perfection without a concrete defect or user request.
