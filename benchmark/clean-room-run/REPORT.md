# Clean-room frontend benchmark

## Valid comparison

- **Control:** `silt-c/index.html`
- **Frontend-design:** `silt-d/index.html`
- **Shared brief:** `PROMPT.md`

An earlier candidate control was rejected because its agent queried task-list metadata after generation. It was not used in the final comparison.

## Contamination controls

1. Both agents started with `fork_turns: none`, so neither received the parent conversation.
2. The control prompt never mentioned a skill, treatment, comparison, or benchmark.
3. The control had an explicit tool allowlist: only file editing and shell checks against its own output path.
4. Its post-run audit confirmed it accessed only its output file and immediate directory. It used no skill, task, app, browser, web, connector, resource, or collaboration tool.
5. The control was completed and frozen before the final treatment agent started.
6. The treatment could read exactly one pre-existing instruction file: `frontend-design/SKILL.md`. It could not inspect the control or other generated outputs.
7. The treatment's post-run audit confirmed it accessed only that skill, its own output, and its immediate directory.
8. Neither agent browsed the web or used external research.
9. Both used the same model, reasoning settings, shared site brief, and technical constraints.
10. Neither output was manually edited after generation.

This is logical isolation backed by the agents' tool-use audit, not a separate kernel or container per agent.

## Rendering

Both outputs were rendered unchanged in the same local headless Chromium at 1440×900 and 390×844. Initial-viewport and full-page screenshots were captured. Neither page emitted browser console errors.

| Variant | Desktop page | Desktop overflow | Mobile page | Mobile overflow |
|---|---:|---:|---:|---:|
| Control | 4,213px tall | 0px | 5,222px tall | 0px |
| Frontend-design | 4,640px tall | 130px | 6,484px tall | 245px |

## Blind evaluations

Reviewers saw only Variant A and Variant B. They were not told which used the skill.

### Visual review

| Criterion | Control | Frontend-design | Winner |
|---|---:|---:|---|
| Visual hierarchy | 8.8 | 9.2 | Frontend-design |
| Distinctiveness | 8.7 | 9.5 | Frontend-design |
| Coherence | 9.1 | 9.0 | Control |
| Section rhythm | 8.8 | 9.1 | Frontend-design |
| Content and conversion clarity | 9.2 | 8.4 | Control |
| Responsive composition | 9.0 | 5.8 | Control |
| Overall visual polish | 9.0 | 8.4 | Control |

The visual reviewer preferred the control overall because the treatment's severe overflow outweighed its stronger art direction.

### Implementation review

| Criterion | Control | Frontend-design | Winner |
|---|---:|---:|---|
| Responsive robustness | 8.8 | 7.5 | Control |
| Accessibility fundamentals | 7.0 | 8.6 | Frontend-design |
| Navigation | 7.5 | 8.7 | Frontend-design |
| Interaction behavior | 7.5 | 8.2 | Frontend-design |
| Self-containment | 10.0 | 10.0 | Tie |
| Code structure | 8.0 | 9.0 | Frontend-design |
| Copy truthfulness | 6.5 | 8.5 | Frontend-design |
| Concrete bug resistance | 6.8 | 7.8 | Frontend-design |
| Overall implementation | 7.8 | 8.5 | Frontend-design |

The implementation reviewer preferred the treatment because it had stronger semantics, reduced-motion handling, navigation behavior, richer interaction, and more honest labeling of sample content.

## Result

The skill produced a visibly more art-directed result: stronger hierarchy, more memorable typography, more varied section compositions, a tighter visual thesis, and fewer generic three-card marketing rhythms. Its distinctiveness score improved from 8.7 to 9.5.

The control was already unusually polished. It was more direct, easier to scan, and much more robust responsively. The treatment's 130px desktop overflow and 245px mobile overflow are serious failures, especially because the skill explicitly calls for mobile composition and visual QA.

A simple average of the two reviewers' overall scores is effectively a tie: **8.35 control vs. 8.45 frontend-design**. The more useful conclusion is directional:

- `frontend-design` improved art direction, semantics, interaction, and copy discipline.
- It did not improve one-shot production robustness and substantially worsened responsive overflow in this run.
- The current model/runtime is capable of a strong baseline without the skill, so the skill's benefit is smaller than older or weaker-model experiences may suggest.
- The skill needs a harder rendered-QA loop, especially mechanical overflow checks, before it can reliably convert better taste into a better shipped result.

This remains a single-prompt, one-sample benchmark rather than a statistically meaningful evaluation.
