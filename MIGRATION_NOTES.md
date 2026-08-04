# Migration notes

## Decision

The vinext starter was replaced with standard Vite + React because version `0.0.50` produced a Cloudflare Worker/server bundle and did not provide the reliable route-by-route static export required for GitHub Pages. The presentation layer and five existing URLs were preserved.

## Removed features

Removed OpenAI Sites configuration, Cloudflare Worker wiring, D1/Drizzle examples, workspace authentication helpers, server-render tests, server dependencies, and database scripts. Searches confirmed these features were not used by public-site behavior.

## Build and routing

`npm run build` now writes `dist/`. Vite’s multi-page input generates `/`, `/research/`, `/team/`, `/publications/`, `/news/`, and `/404.html` without runtime rewrites. Production base is `/` for the organization Pages domain.

## Compatibility

Content, portraits, editorial palette, and route names remain. `next/image` and `next/link` were replaced with ordinary static-compatible HTML and React components.
