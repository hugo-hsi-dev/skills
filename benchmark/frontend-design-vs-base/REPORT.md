# Frontend Design vs. Base Codex

## Method

- One shared brief: [PROMPT.md](PROMPT.md).
- Two independent agents used the same model and reasoning settings.
- The baseline agent received only the brief.
- The treatment agent received the same brief plus the `frontend-design` skill.
- Each agent wrote one self-contained HTML file and could not inspect the other output.
- Neither output was manually edited after generation.
- Both were rendered in the same local headless Chromium at 1440×900 and 390×844.
- Initial-viewport and full-page screenshots were captured after load.

This is a rough, single-prompt benchmark, not a statistically meaningful evaluation.

## Result

The skill-guided version wins narrowly on art direction, distinctiveness, visual hierarchy, and interaction richness. The baseline wins on conversion clarity, compactness, responsive robustness, mobile navigation, and implementation simplicity.

| Criterion | Result |
|---|---|
| Visual hierarchy | Skill-guided |
| Brand distinctiveness | Skill-guided |
| Visual-system coherence | Tie, slight skill-guided edge |
| Section rhythm | Baseline |
| Product and conversion clarity | Baseline |
| Responsive robustness | Baseline |
| Interaction richness | Skill-guided |
| Mobile navigation | Baseline |
| Maintainability | Baseline |
| Browser console errors | Tie: none |

## Render measurements

| Variant | Desktop page height | Mobile page height | Mobile horizontal overflow |
|---|---:|---:|---:|
| Baseline | 2,935px | 3,937px | 0px |
| Skill-guided | 4,835px | 5,969px | 9px |

The skill-guided page is about 65% longer on desktop and 52% longer on mobile.

## What changed visibly

### Skill-guided strengths

- A more ownable instrument-panel identity using dark green, cream, and signal orange.
- Stronger opening hierarchy and a more distinctive inline-SVG product illustration.
- More varied section compositions instead of repeating one layout family.
- A working exposure-mode demonstration with state feedback.
- A consistent diagram and annotation language across the page.

### Baseline strengths

- A tighter page with clearer pacing and less mobile scrolling.
- Stronger purchase information, including a visible price and quantified specifications.
- Clearer functional steps and more direct conversion copy.
- A usable mobile menu and a genuinely actionable preorder link.
- No horizontal overflow at the target mobile width.

### Skill-guided weaknesses exposed by the benchmark

- The page is substantially longer than its stated medium-density design dial suggests.
- Fine-print annotations become too small on mobile.
- The desktop navigation disappears on mobile without a replacement.
- One decorative grid extends 9px beyond the 390px viewport.
- The preorder interaction gives local confirmation but has no real destination.
- Some specifications are qualitative where the baseline provides more useful concrete values.

## Takeaway

On this prompt, `frontend-design` successfully pushed the agent toward a more memorable, art-directed result. It did not reliably protect conversion detail, page economy, or mobile implementation quality. The clearest skill improvements would be stronger checks for mobile navigation parity, zero horizontal overflow, dial-to-page-length consistency, readable annotation sizes, and preserving concrete purchase information.
