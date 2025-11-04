# ADR 001: Upgrade ESLint to Version 9

## Context
The project initially used ESLint v8.57.1 (pinned via `"eslint": "^8.55.0"` in package.json). Running `npm init @eslint/config` generated a flat config file (`eslint.config.js`) compatible only with ESLint v9+, causing an export error (`ERR_PACKAGE_PATH_NOT_EXPORTED`) during `npm run lint`. This broke linting setup post-refactor. Upgrading resolves compatibility without altering core rules or workflows.

## Decision
Upgrade ESLint to v9.0.0 (latest stable as of November 03, 2025). Update package.json to `"eslint": "^9.0.0"`, install via `npm install`, and retain the generated `eslint.config.js` with a minor tweak for ES modules (`sourceType: "module"`). No other deps or scripts changed.

Alternatives considered:
- Downgrade config to v8 format: Simpler short-term but misses v9's modern flat config benefits (e.g., better ES module support for Vite/Lit).

## Status
Accepted

## Consequences
- **Positive**: Future-proofs linting; flat config is more concise and aligns with ES modules. Linting now runs cleanly on `npm run lint`.
- **Negative**: Minor version bump risk (rare breaking changes in v9); requires one-time `npm install`.
- **Neutral**: No impact on runtime, tests, or build. Coverage remains ~recommended rules (camelCase, no-unused-vars).

## Date
2025-11-03