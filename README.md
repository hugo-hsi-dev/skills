# Hugo Hsi Skills

Three focused agent skills, packaged for skills.sh and as installable plugins for both Claude Code
and Codex:

| Plugin | Purpose |
| --- | --- |
| `failure-ownership` | Match defensive code to the layer that owns the failure policy. |
| `report-drift` | Verify conflicting repository claims and offer a deduplicated follow-up. |
| `frontend-design` | Establish and execute a context-aware visual direction for web frontends. |

The top-level skill directories are the canonical sources. skills.sh-ready copies live under
`skills/`, marketplace-ready copies live under `plugins/`, and both are kept in sync by
`scripts/sync_marketplace_plugins.py`.

## skills.sh

List or install the skills with the open Agent Skills CLI:

```bash
npx skills add hugo-hsi-dev/skills --list
npx skills add hugo-hsi-dev/skills@frontend-design
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

Add the same marketplace and install any plugin:

```bash
codex plugin marketplace add hugo-hsi-dev/skills
codex plugin add frontend-design@hugo-hsi-skills
```

For a local checkout, use `codex plugin marketplace add .` from the repository root.

## Development

After editing a top-level skill, refresh its packaged copy:

```bash
python3 scripts/sync_marketplace_plugins.py
```

Verify that committed plugin copies match their sources:

```bash
python3 scripts/sync_marketplace_plugins.py --check
```

Before publishing a release, bump the plugin version in both the Claude and Codex plugin manifests.
The sync check also verifies that those versions agree.
