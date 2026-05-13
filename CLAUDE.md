# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js on localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

Single-page Next.js 16 portfolio site. The entire UI lives in `app/page.tsx` — a Radix UI `Accordion` wrapping five sections: connect links, currently learning, skills, projects, and certificates.

**Data layer** — all content is stored as JSON in `data/`:
- `data/projects.json` — project entries with `name`, `description`, `tech_stack[]`, `links[]`
- `data/certificates.json` — certificate entries with `name`, `description`, `institution_name`, `certificate_link`, `tags[]`
- `data/portals.json` — social/contact links used by the Connect component

**Component structure:**
- `app/_components/` — page-level section components (Header, Connect, Skills, Projects, Certificates), each imported directly into `app/page.tsx`
- `components/ui/` — shadcn/ui primitives (`accordion.tsx`, `card.tsx`) used by the section components

**Styling** — Tailwind CSS v4 with `tailwind-merge` + `clsx` via a `cn()` utility. Fonts are Geist Sans and Geist Mono loaded via `next/font/google`.

**Path alias** — `@/` maps to the project root (covers `@/components/ui/...` and `@/data/...`).

## Content Updates

To add a project or certificate, edit the relevant JSON file in `data/`. The count displayed in accordion headers (`Projects (N)`, `Certificates (N)`) is derived automatically from `array.length`.
