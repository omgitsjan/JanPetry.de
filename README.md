# janpetry.de

Personal portfolio website of Jan Petry - Web Developer & Founder, built with [Nuxt 4](https://nuxt.com) and [Nuxt UI](https://ui.nuxt.com).

[![Nuxt UI](https://img.shields.io/badge/Made%20with-Nuxt%20UI-00DC82?logo=nuxt&labelColor=020420)](https://ui.nuxt.com)
[![Nuxt](https://img.shields.io/badge/Nuxt-4.2.0-00DC82?logo=nuxt)](https://nuxt.com)

## About

This is my personal portfolio website showcasing my work as a web developer, founder of JPProfessionals, and Business Development Manager. The site features:

- **Content-driven architecture** using Nuxt Content with YAML and Markdown
- **Modern UI** built with Nuxt UI and Tailwind CSS
- **Blog section** with tech insights and project updates
- **Responsive design** with dark mode support
- **SEO optimized** with OG image generation

## Tech Stack

- **Framework**: Nuxt 4 with TypeScript and Vue 3
- **UI**: Nuxt UI (alpha) with Tailwind CSS
- **Content**: Nuxt Content with YAML/Markdown
- **Animation**: motion-v
- **Icons**: Iconify (Lucide & Simple Icons)
- **Package Manager**: pnpm

## Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm 10+

### Installation

```bash
pnpm install
```

### Development

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

### Production

Build the application for production:

```bash
pnpm build
```

Generate static site:

```bash
pnpm generate
```

Preview production build locally:

```bash
pnpm preview
```

## Code Quality

Run ESLint:

```bash
pnpm lint
```

Fix ESLint issues automatically:

```bash
pnpm lint:fix
```

Type check:

```bash
pnpm typecheck
```

## Project Structure

```
├── app/
│   ├── components/      # Vue components
│   ├── pages/           # Page routes
│   ├── layouts/         # Layout components
│   └── utils/           # Utility functions
├── content/             # Content files (YAML/Markdown)
│   ├── blog/            # Blog posts
│   ├── index.yml        # Homepage content
│   └── about.yml        # About page content
└── public/              # Static assets
```

## Deployment

This site can be deployed to any static hosting service that supports Nuxt:

- **Vercel**: Auto-deploy from GitHub
- **Netlify**: Connect repository for automatic deployments
- **Cloudflare Pages**: Git integration available
- **Any static host**: After running `pnpm generate`

See [Nuxt deployment docs](https://nuxt.com/docs/getting-started/deployment) for more information.

## License

Private project - All rights reserved.

---

Built with ❤️ by Jan Petry