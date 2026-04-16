/// <reference types="vitest" />
import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  server: { port: 5173, strictPort: true },
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom', '@kaspersky/hexa-ui'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@viewer': path.resolve(
        __dirname,
        '../kaspersky-ui-normalization-transpile-viewer/src'
      ),
      '@normalization/form-dsl': path.resolve(
        __dirname,
        '../../shared/normalization-form-dsl/form-dsl.ts'
      ),
      '@normalization/load-form-dsl-runtime': path.resolve(
        __dirname,
        '../../shared/normalization-form-dsl/load-form-dsl-runtime.ts'
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
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    include: [
      'src/**/*.{test,spec}.{ts,tsx}',
      '../../shared/normalization-form-dsl/**/*.{test,spec}.ts',
    ],
  },
})
