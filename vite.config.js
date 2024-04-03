// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/asmr-landing-pages/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        appy: resolve(__dirname, 'appy/index.html')
      }
    }
  }
})
