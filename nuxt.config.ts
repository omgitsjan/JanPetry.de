import { promises as fs } from 'fs'
import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/seo',
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@vueuse/nuxt'
  ],

  ssr: true,

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://janpetry.de',
    name: 'Jan Petry',
    description:
      'Hi, I am Jan. Founder of JPProfessionals, DJ & Producer. Also full time developer based near Trier. Welcome to my Website!',
    defaultLocale: 'en'
  },

  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    },
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    preset: 'static',
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  typescript: {
    strict: false
  },

  hooks: {
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
