import { defineConfig, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      // Use Iconify collections locally when installed
      collections: {
        // These are loaded automatically from @iconify-json/* packages when present
      }
    })
  ]
})
