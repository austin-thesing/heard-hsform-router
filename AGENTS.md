# Agent Guidelines - Heard Local Scheduler

## Build & Development Commands
- **Build**: `bun run build` (minifies JS/CSS to dist/)
- **Watch**: `bun run watch` (rebuild on file changes)
- **Install deps**: `bun install`
- **Format**: `bunx prettier --write .` (Prettier configured: single quotes, 2 spaces, trailing commas)
- **Test**: No test suite configured yet; use `bun test` when tests are added

## Code Style & Conventions
- **Language**: Vanilla JavaScript (ES6+), no TypeScript
- **Format**: Prettier rules apply (.prettierrc): single quotes, semicolons, 2-space indent, 80 char lines, LF line endings
- **Functions**: Use descriptive names (e.g., `getStoredFormData`, `injectScheduler`)
- **Constants**: UPPER_SNAKE_CASE for configs (e.g., `SCHEDULER_CONFIG`, `DEBUG`)
- **Error handling**: Wrap storage/DOM operations in try-catch blocks
- **Logging**: Use unified conditional `log()` function with DEBUG flag (consistent across all scripts)
- **IIFE pattern**: Wrap scripts in `(function() { "use strict"; ... })()` for isolation
- **Data submission**: Use `fetch` with `keepalive` for reliable data sends (e.g., partial fill capture on `beforeunload`)

## Key Patterns
- **Partial fill detection**: Email inputs are monitored and submitted to HubSpot if the user navigates away before form completion
- **Multistep fallback**: DOM observation for "Thank You" messages when standard form submission callbacks fail
- **Multi-source data retrieval**: Form data is pulled from sessionStorage, localStorage, and cookies for redundancy
- **Analytics events**: Conversion events fire to Reddit, Meta, GA, PostHog, and Amplitude from the scheduler injection script

## Cursor Rules
Follow .cursor/rules/ guidelines:
- PLAN→CODE→TESTS→NOTES workflow, validate inputs, handle errors gracefully
- Small composable functions, focused diffs, keep docs current
- Use ast-grep for code searches when available