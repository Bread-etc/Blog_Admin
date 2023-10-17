import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import autoprefix from 'autoprefixer'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [tailwindcss,autoprefix]
    }
  },
  resolve: {
    alias: {
      '@fonts': path.resolve(__dirname, 'src/assets/fonts')
    },
  },
  server: {
    port: 5050
  }
})
