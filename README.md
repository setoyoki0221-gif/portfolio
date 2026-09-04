# Portfolio

A single-page developer portfolio: React 19 + Vite 8 + Tailwind CSS 4, with
Framer Motion for scroll reveals and Lenis for momentum scrolling.

Sections: Home, About, Skills, Experience, Education, Projects, Contact.

## Getting started

```bash
npm install
```

```bash
npm run dev
```

Then open http://127.0.0.1:5173.

```bash
npm run build
```

Output lands in `dist/`. Preview the built site with `npm run preview`.

## Editing the content

**All copy lives in [`src/data/content.js`](src/data/content.js).** Name, role,
bio, skills, jobs, education, projects and contact links are exported from that
one file - you should not need to touch a component to change what the site
says.

The hero code card renders `heroSnippet` from the same file, syntax-highlighted
at runtime, so edit it as ordinary JavaScript text.

## Before you deploy

These are placeholders that need real values:

| What | Where |
| --- | --- |
| Name, bio, stats, all section copy | `src/data/content.js` |
| Contact links (currently `yourhandle`) | `src/data/content.js` → `contact` |
| Project links (currently `example.com`) | `src/data/content.js` → `projects` |
| Page title, description, domain | `index.html` |
| `og.png` for social cards (1200×630) | add to `public/` |
| Portrait | add `public/avatar.jpg` (square, 400px+) |
| Project screenshots | add to `public/projects/` |
| Resume | add to `public/`, set `profile.resumeUrl` |

Missing images degrade gracefully - portraits fall back to initials and project
cards to a generated gradient tile - so the layout never breaks while you gather
assets.

## Adding a skill icon

Icons come from `react-icons/si`, imported by name in
[`src/components/ui/icons.js`](src/components/ui/icons.js) so the bundler drops
the ~3,400 unused ones. To add a skill:

1. Add the import and the map entry in `icons.js`.
2. Reference it by name in `content.js`.

Verify the export exists first - Simple Icons renames and removes brands between
releases:

```bash
grep "export declare const SiYourbrand:" node_modules/react-icons/si/index.d.ts
```

If a brand has no icon (Adobe, AWS and LinkedIn were all removed over trademark
policy), set `icon: null` and `SkillIcon` renders a lettered badge instead.

## Deploying

Vercel auto-detects Vite. Push the repo and import it, or:

```bash
npx vercel --prod
```

Any static host works - build and serve `dist/`.

## Notes on the implementation

- **Icons are bundled, not hotlinked.** A CDN reference pinned to `@latest`
  breaks silently when the icon set renames a slug; these are locked by
  `package.json`.
- **`min-w-0` on the hero grid columns.** Grid items default to
  `min-width: auto`, so the code block's longest line would otherwise push the
  column past the viewport on mobile.
- **Reduced motion is honoured.** Framer Motion ignores the OS setting unless you
  opt in, so `App.jsx` wraps everything in `<MotionConfig reducedMotion="user">`.
  Lenis and the starfield check the media query directly.
- **The starfield pauses when the tab is hidden**, and images below the fold are
  lazy-loaded with fixed dimensions to avoid layout shift.
- **One `<h1>`**, sections below it use `<h2>`, cards `<h3>`.
"# portfolio" 
