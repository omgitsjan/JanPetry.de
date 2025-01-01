import { promises as fs } from 'fs'
import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    '@nuxtjs/seo'
  ],

  ssr: true,

  devtools: {
    enabled: true
  },

  site: {
    url: 'https://janpetry.de',
    name: 'Jan Petry',
    description: 'Hi, I am Jan. Founder of JPProfessionals, DJ & Producer. Also full time developer based near Trier. Welcome to my Website!',
    defaultLocale: 'en'
  },

  routeRules: {
    '/': { prerender: true },
    '/api/search.json': { prerender: true },
    '/blog': { prerender: true },
    '/techstack': { prerender: true },
    '/imprint': { prerender: true },
    '/contact': { prerender: true }
  },

  compatibilityDate: '2024-07-26',

  typescript: {
    strict: false
  },

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter(c =>
        ['UButton'].includes(c.pascalName)
      )

      globals.forEach(c => (c.global = true))
    },
    async 'nitro:config'(nitroConfig) {
      const contentDir = path.resolve(__dirname, 'content/2.blog')
      const files = await fs.readdir(contentDir)
      const routes = files
        .filter(file => file.endsWith('.md'))
        .map(file => `/blog/${file.replace('.md', '')}`)

      nitroConfig.prerender.routes.push(...routes)
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  ogImage: {
    enabled: false
  }
})
