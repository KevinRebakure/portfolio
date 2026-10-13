# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js on localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

Single-page Next.js 16 portfolio site. The entire UI lives in `app/page.tsx` — a Radix UI `Accordion` wrapping three sections: connect links, skills, and projects.

**Data layer** — all content is stored as JSON in `data/`:
- `data/projects.json` — project entries with `name`, `description`, `tech_stack[]`, `links[]`
- `data/portals.json` — social/contact links used by the Connect component

**Component structure:**
- `app/_components/` — page-level section components (Header, Connect, Skills, Projects), each imported directly into `app/page.tsx`
- `components/ui/` — shadcn/ui primitives (`accordion.tsx`, `card.tsx`) used by the section components

**Styling** — Tailwind CSS v4 with `tailwind-merge` + `clsx` via a `cn()` utility. Fonts are Geist Sans and Geist Mono loaded via `next/font/google`.

**Path alias** — `@/` maps to the project root (covers `@/components/ui/...` and `@/data/...`).

## Cloud Runs

When running in the cloud and assigned an issue, the title of the PR you create must match the issue title exactly.

## Content Updates

To add a project, edit `data/projects.json`. The count displayed in the accordion header (`Projects (N)`) is derived automatically from `array.length`.
