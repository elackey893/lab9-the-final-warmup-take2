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

# ADR 002: Implement JSDoc with Automated Documentation Generation

## Context
The lab requires "JSDocs with doc generation" to enhance code documentation and demonstrate professional habits. The brownfield code lacks inline docs, making it harder to understand methods/classes (e.g., TodoModel's addTodo). Adding JSDoc enables type hints and readable comments, while generation turns them into a browsable HTML site for sharing (e.g., via README link).

## Decision
Implement JSDoc comments on key exports (e.g., classes, methods with @param/@returns) across src/ files. Add jsdoc CLI as devDep, configure via jsdoc.conf.json (scanning src/, outputting to docs/jsdocs/), and expose via npm script "docs". Retain existing refactors (e.g., JSDoc already added to TodoModel constructor/methods).

Alternatives considered:
- Manual Markdown docs: Easier but less integrated (no auto-gen from code).
- TypeScript: Overkill for JS-only project (adds conversion overhead).

## Status
Accepted

## Consequences
- **Positive**: Generates shareable HTML docs (e.g., index.html with class overviews); improves IDE hints; rubric credit for "docs".
- **Negative**: Adds ~5min setup; requires comment maintenance.
- **Neutral**: No runtime impact; runs on-demand via npm run docs.

## Date
2025-11-03

# ADR 003: Retain Lit for Web Components in This Lab

## Context
The project uses Lit (^3.1.0) for reactive web components in the UI layer (e.g., TodoApp, TodoItem). As a brownfield addition, Lit provides declarative templates and auto-updates, but the app is a basic Todo/note manager with CRUD operations and localStorage persistence. Prior labs used vanilla JS/custom elements without deps. Given the lab's emphasis on simplicity, ownership, and handling "new tech thrown at you," assess if Lit aligns with experimenting in a new context without overcomplicating.

## Decision
Retain Lit for this lab: Its lightweight reactivity (~5KB) enhances the MVC pattern with minimal overhead, making it suitable for a simple Todo app. No removal or refactor needed—leverage it to practice web standards with efficiency gains over pure vanilla (e.g., auto-re-renders on prop changes). Update: No version bump; ^3.1.0 is current stable.

Alternatives considered:
- Strip to vanilla: Viable for basics but adds manual DOM boilerplate, missing the lab's "contend with dependencies" goal.
- Switch to full framework (e.g., React): Overkill—Lit is the "easier" dep as instructed.

## Status
Accepted

## Consequences
- **Positive**: Reduces code verbosity (e.g., properties for state vs. manual listeners); aligns with lab's new tech practice; easy to extend for personal touches like priorities.
- **Negative**: Introduces a dep (but tiny); slight learning curve, mitigated by lit.dev docs.
- **Neutral**: Core model/service unchanged; Vite handles bundling seamlessly. Full removal could be future ADR if scaling down.

## Date
2025-11-04