import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@src',
        replacement: path.resolve(__dirname, '../../packages/kaspersky-hexa-ui/src')
      },
      {
        find: '@helpers',
        replacement: path.resolve(__dirname, '../../packages/kaspersky-hexa-ui/helpers')
      },
      {
        find: '@design-system',
        replacement: path.resolve(__dirname, '../../packages/kaspersky-hexa-ui/design-system')
      }
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
        relativeUrls: true,
        javascriptEnabled: true
      }
    }
  },
  build: {
    assetsInlineLimit: 100000
  }
})
