// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from 'url';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    '@p': fileURLToPath(new URL('./pages', import.meta.url)),
  },
})
