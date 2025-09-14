# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 4 portfolio website built with Nuxt UI, using TypeScript and Vue 3. The site is content-driven using Nuxt Content with structured YAML files and Markdown blog posts. It uses pnpm as the package manager.

## Common Development Commands

### Development
- `pnpm dev` - Start development server on http://localhost:3000
- `pnpm build` - Build application for production
- `pnpm generate` - Generate static site
- `pnpm preview` - Preview production build locally

### Code Quality
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm typecheck` - Run TypeScript type checking

### Setup
- `pnpm install` - Install dependencies

## Architecture Overview

### Content Management
The site uses Nuxt Content with a structured content schema defined in `content.config.ts`. Content is organized as:
- **Homepage data**: `content/index.yml` - Hero, about, experience, testimonials, FAQ
- **Blog posts**: `content/blog/*.md` - Markdown files with frontmatter
- **About page**: `content/about.yml` - About page content and images

### Component Structure
- **Landing components**: `app/components/landing/` - Hero, About, Blog, FAQ, Testimonials, WorkExperience
- **Global components**: `app/components/` - AppHeader, AppFooter, ColorModeButton, PolaroidItem
- **Pages**: `app/pages/` - Vue pages that consume content collections

### Configuration
- **App config**: `app/app.config.ts` - Global app settings, colors, footer links, profile info
- **Nuxt config**: `nuxt.config.ts` - Nuxt modules, ESLint config, Nitro prerendering
- **Content config**: `content.config.ts` - Zod schemas for content validation

### Key Technologies
- **Framework**: Nuxt 4 with auto-imports and file-based routing
- **UI**: Nuxt UI (alpha) with Tailwind CSS
- **Content**: Nuxt Content with YAML/Markdown
- **Validation**: Zod schemas for content structure
- **Animation**: motion-v for animations
- **Images**: Nuxt Image with optimization
- **Icons**: Iconify with Lucide and Simple Icons

### ESLint Configuration
Uses Nuxt ESLint with stylistic rules configured for comma-dangle: 'never' and braceStyle: '1tbs'. TypeScript explicit any is disabled.