# Seto Yoki — Portfolio

Production-oriented portfolio built for a full-stack development assessment.

## Stack

- Next.js App Router + Server Components
- TypeScript strict mode
- shadcn/ui primitives
- Tailwind CSS
- next-themes
- Docker standalone build
- GitHub Actions CI/CD

## Run locally

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Docker

```bash
docker compose up --build
```

## Personalization

Replace the placeholder social links/email in `src/components/sections/contact.tsx` and update the project data in `src/data/projects.ts`.
