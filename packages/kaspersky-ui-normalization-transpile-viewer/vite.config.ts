import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@normalization/form-dsl': path.resolve(
        __dirname,
        '../../shared/normalization-form-dsl/form-dsl.ts'
      ),
      sucrase: path.resolve(__dirname, 'node_modules/sucrase'),
    },
  },
  optimizeDeps: {
    include: ['sucrase'],
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
        relativeUrls: true,
        javascriptEnabled: true,
      },
    },
  },
})
