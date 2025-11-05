# Lab 9: Task Manager (The Final Warm-Up)

A polished Todo app using Lit web components, Vite, and localStorage. Started as AI-generated brownfield code; now refactored, tested, documented, and extended with personal touches for ownership.

## Deployed Site
[Live Demo](https://elackey893.github.io/lab9-the-final-warmup-take2/)  
(GitHub Pages auto-deploys on main; try adding todos, toggling, dark mode—persists across reloads.)

## What I Did (Effort Log for Rubric)
To hit 60 pts: Refactored for quality, added process/tools, and injected creativity. No bloat—bare min with impact.

- **Repo Organization & Git Habits**: Structured as src/ (components/models/services), tests/ (unit/e2e), docs/ (ADRs/jsdocs). 
- **Refactor & Linting**: Standardized camelCase vars (e.g., `storageService`), organized methods (CRUD grouped). ESLint v9 flat config—`npm run lint` clean.
- **Unit Tests**: Expanded `tests/unit/todo-model.test.js` to 6 tests (add/toggle/delete/update/counts; 60% coverage). Passes via `npm test`.
- **E2E Tests**: Playwright in `tests/e2e/app.spec.js` (5 flows: load/add/toggle/delete/persist). 5/5 passing; run with `npm run e2e` (dev server up).
- **JSDoc & Doc Generation**: Added comments to classes/methods (e.g., `@param {string} text`). `npm run docs` generates HTML site at docs/jsdocs/index.html.
- **ADRs**: 3 decisions in `docs/adrs/`:
    - 001: ESLint v9 upgrade (flat config for ES modules).
    - 002: JSDoc implementation (auto-gen for API ref).
    - 003: Retain Lit (lightweight reactivity fits lab's new tech practice).
- **Personal Touch (Creativity/Ownership)**: **Added dark mode toggle - a simple button in the actions bar that switches themes (light/dark) and persists via localStorage. Why? Eye comfort for late-night coding sessions; it's a quick, useful extension I wanted for real-world use, demonstrating ownership without complexity.**
- **Deployment**: GitHub Pages auto-builds `npm run build`; live above.

## Setup & Run
1. Clone: `git clone <repo-url> && cd lab9-the-final-warmup-take2`.
2. Install: `npm install`.
3. Dev: `npm run dev` (opens localhost:8080).
4. Lint: `npm run lint` / `npm run lint:fix`.
5. Test: `npm test` (unit) / `npm run e2e` (E2E, with dev up).
6. Docs: `npm run docs` (view docs/jsdocs/index.html).
7. Build: `npm run build` (to dist/).

## Tech Stack
- **UI**: Lit web components (reactive, standards-based).
- **Build**: Vite (fast dev/build).
- **Persistence**: localStorage via StorageService.
- **Testing**: Node test (unit), Playwright (E2E).
- **Quality**: ESLint v9, JSDoc.
