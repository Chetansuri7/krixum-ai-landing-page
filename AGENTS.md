# Agent Guidelines for This Repo

This repository uses Codex CLI for iterative development. To keep iteration fast and focused, follow these policies when working here.

## Testing & Builds

- Do not run `npm run build` (or other full builds) after every small change during active iteration.
- Only run builds when the user explicitly asks to validate, or before a handoff/release.
- Prefer targeted checks (reading files, quick type sanity via edits) over full compile cycles while iterating.

## UI Components

- Move deprecated or experimental sections to `app/components/legacy/` instead of deleting.
- Keep imports consistent; remove references from routes or nav when moving components to legacy.

## Change Scope

- Make minimal, surgical changes aligned to the request.
- Avoid broad refactors unless requested.

## Notes

- If you need a build to verify a complex change, ask first.
- Network access is restricted; avoid commands that require it unless approved.

