# Repo Audit — kupuri-soltar

**Date:** 2026-06-09
**Auditor:** Builder agent (claude-sonnet-4-6)

## Status at Audit Time

The repository contained only a single `README.md` with the project name.
No framework, no dependencies, no routes, no assets.

## Framework Decision

**Selected:** Next.js 14 (App Router) + TypeScript + Tailwind CSS

**Reason:** App Router supports dynamic route segments natively (`/steps/[step]/intro`),
which maps directly to the 12-route user journey defined in the build prompt.

## Folder Structure Created

```
/
├── docs/                        brand kernel, image manifest, journey docs
├── public/images/soltar/        app images (placeholders pending real assets)
├── src/
│   ├── app/                     Next.js App Router routes
│   │   ├── layout.tsx           root layout
│   │   ├── page.tsx             /  (landing)
│   │   ├── welcome/page.tsx     /welcome
│   │   ├── journey/page.tsx     /journey
│   │   ├── steps/[step]/
│   │   │   ├── intro/page.tsx
│   │   │   ├── action/page.tsx
│   │   │   ├── reflection/page.tsx
│   │   │   └── complete/page.tsx
│   │   ├── bitacora/page.tsx    /bitacora
│   │   ├── cartas/page.tsx      /cartas
│   │   ├── progress/page.tsx    /progress
│   │   ├── settings/page.tsx    /settings
│   │   └── closing/page.tsx     /closing
│   ├── components/              shared UI components
│   └── content/soltar/          data model (steps, essays, letters, i18n)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Image Status

All 12 app images are pending — source files not yet in repository.
Placeholders documented in `docs/IMAGE_MANIFEST.md` and `docs/CANONICAL_ASSET_LOG.md`.

## Brand System

`docs/BRAND_KERNEL.estilo-soltar.yml` — installed.

## Free-First

No auth gates, no payment walls, no forced signups anywhere in the app.

## Remaining Gaps

- Real image assets need to be added to `public/images/soltar/`
- Social images (Instagram / TikTok) are optional and not yet created
- Optional encrypted sync not yet built
