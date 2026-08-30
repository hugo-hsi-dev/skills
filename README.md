# Hugo Hsi Skills

Three focused agent skills for skills.sh, Claude Code, and Codex:

| Skill | Purpose |
| --- | --- |
| `failure-ownership` | Match defensive code to the layer that owns the failure policy. |
| `report-drift` | Verify conflicting repository claims and offer a deduplicated follow-up. |
| `frontend-design` | Establish and execute a context-aware visual direction for web frontends. |

Each skill lives once, under `skills/`. That directory is the canonical source used by every
supported installer.

## skills.sh

List or install the skills with the open Agent Skills CLI:

```bash
npx skills add hugo-hsi-dev/skills --list
npx skills add hugo-hsi-dev/skills --skill frontend-design
```

Replace `frontend-design` with `failure-ownership` or `report-drift` as needed. For a local checkout,
use `npx skills add . --list` from the repository root.

## Claude Code

Add the marketplace from GitHub, then install any plugin:

```text
/plugin marketplace add hugo-hsi-dev/skills
/plugin install frontend-design@hugo-hsi-skills
```

Replace `frontend-design` with `failure-ownership` or `report-drift` as needed. For a local checkout,
use `/plugin marketplace add .` from the repository root.

## Codex

Add the same marketplace and install the bundled plugin:

```bash
codex plugin marketplace add hugo-hsi-dev/skills
codex plugin add hugo-hsi-skills@hugo-hsi-skills
```

For a local checkout, use `codex plugin marketplace add .` from the repository root.

## Development

Edit skills directly under `skills/`. There are no generated copies to refresh. To check what
skills.sh discovers from a local checkout, run:

```bash
npx skills add . --list
```

Version Codex plugin releases in `.codex-plugin/plugin.json`. The top-level version in
`.claude-plugin/marketplace.json` versions the Claude marketplace independently.
