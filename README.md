# Embodied Human Intelligence

Public academic website presenting research themes, collaborators, publications, and news related to embodied cognition and human interaction with intelligent systems.

## Live website

https://embodiedhi.github.io/

## Technology

Vite, React, TypeScript, Three.js, semantic HTML, and CSS. The build is a fully static multi-page site.

## Requirements

- Node.js 22
- pnpm 11.9

## Local development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Production build and preview

```bash
pnpm build
pnpm preview
```

## Validation

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm test
```

## Deployment

The website deploys to GitHub Pages when changes reach `main`. In repository Settings → Pages, set the publishing source to **GitHub Actions**.

## Project structure

- `src/main.tsx`: static route views and shared site shell
- `src/data.ts`: editable members, research, publications, and news
- `src/scene/HeroScene.tsx`: lazy-loaded Three.js hero
- `src/styles.css`: visual and responsive system
- `public/`: identity, portraits, metadata, and other static assets
- `research/`, `team/`, `publications/`, `news/`: real static route entry points

## Updating content

Edit the structured arrays in `src/data.ts`. Add optimized images under `public/images/`. The homepage scene is original procedural geometry and requires no external model; edit `src/scene/HeroScene.tsx` to change it.

## Replacing Vineet Upadhyan’s portrait

Add the final portrait to `public/images/team/`, then update Vineet’s `image` field in `src/data.ts`. Keep the documented alt text accurate.

## Asset licensing

See `ASSET_CREDITS.md` and `ASSET_AUDIT.md`.

## Accessibility

The site includes semantic landmarks, skip navigation, keyboard-visible focus, an accessible mobile menu, diagram descriptions, reduced-motion fallbacks, and a textual equivalent beside the decorative WebGL scene.

## License

No repository license is currently declared. All rights remain with their respective owners.
