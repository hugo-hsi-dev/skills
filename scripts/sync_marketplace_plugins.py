#!/usr/bin/env python3
"""Synchronize canonical skills into skills.sh and marketplace packages."""

from __future__ import annotations

import argparse
import json
import shutil
from pathlib import Path


REPOSITORY_ROOT = Path(__file__).resolve().parent.parent
SKILL_NAMES = ("failure-ownership", "report-drift", "frontend-design")


def files_under(root: Path) -> dict[Path, bytes]:
    return {
        path.relative_to(root): path.read_bytes()
        for path in sorted(root.rglob("*"))
        if path.is_file()
    }


def source_and_targets(skill_name: str) -> tuple[Path, tuple[Path, ...]]:
    source = REPOSITORY_ROOT / skill_name
    targets = (
        REPOSITORY_ROOT / "skills" / skill_name,
        REPOSITORY_ROOT / "plugins" / skill_name / "skills" / skill_name,
    )
    return source, targets


def check() -> int:
    mismatches: list[str] = []
    skills_sh_manifest = json.loads((REPOSITORY_ROOT / "skills.sh.json").read_text())
    grouped_skills = [
        skill_name
        for grouping in skills_sh_manifest.get("groupings", [])
        for skill_name in grouping.get("skills", [])
    ]
    if len(grouped_skills) != len(set(grouped_skills)):
        mismatches.append("skills.sh.json: a skill appears in more than one grouping")
    if set(grouped_skills) != set(SKILL_NAMES):
        mismatches.append("skills.sh.json: groupings do not match the canonical skill set")

    claude_marketplace = json.loads(
        (REPOSITORY_ROOT / ".claude-plugin" / "marketplace.json").read_text()
    )
    claude_entry_names = {entry["name"] for entry in claude_marketplace.get("plugins", [])}

    for skill_name in SKILL_NAMES:
        source, targets = source_and_targets(skill_name)
        for target in targets:
            package = target.relative_to(REPOSITORY_ROOT).parts[0]
            if not target.is_dir():
                mismatches.append(f"{skill_name}: {package} copy is missing")
                continue
            if files_under(source) != files_under(target):
                mismatches.append(f"{skill_name}: {package} copy differs from canonical source")

        plugin_root = REPOSITORY_ROOT / "plugins" / skill_name
        claude_manifest = json.loads(
            (plugin_root / ".claude-plugin" / "plugin.json").read_text()
        )
        codex_manifest = json.loads(
            (plugin_root / ".codex-plugin" / "plugin.json").read_text()
        )
        if skill_name not in claude_entry_names:
            mismatches.append(f"{skill_name}: missing from Claude marketplace")
        versions = {
            claude_manifest.get("version"),
            codex_manifest.get("version"),
        }
        if len(versions) != 1 or None in versions:
            mismatches.append(
                f"{skill_name}: Claude and Codex plugin versions differ"
            )

    if mismatches:
        print("Distribution sync check failed:")
        for mismatch in mismatches:
            print(f"- {mismatch}")
        return 1

    print("skills.sh and marketplace copies match canonical skills.")
    return 0


def synchronize() -> None:
    for skill_name in SKILL_NAMES:
        source, targets = source_and_targets(skill_name)
        for target in targets:
            if target.exists():
                shutil.rmtree(target)
            shutil.copytree(source, target)
        print(f"Synchronized {skill_name} for skills.sh and marketplaces")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--check",
        action="store_true",
        help="Fail when a packaged skill differs from its canonical source.",
    )
    args = parser.parse_args()

    if args.check:
        return check()
    synchronize()
    return check()


if __name__ == "__main__":
    raise SystemExit(main())
