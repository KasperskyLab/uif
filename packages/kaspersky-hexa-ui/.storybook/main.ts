import type { StorybookConfig } from '@storybook/react-vite'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import path from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config: StorybookConfig = {
  stories: [
    '../docs/**/*.@(mdx|stories.@(ts|tsx))',
    '../docs/*.@(mdx|stories.@(ts|tsx))',
    '../src/**/*.@(mdx|stories.@(ts|tsx))',
    '../Changelog.mdx'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links'
  ],
  refs: {
    icons: {
      title: 'Icons',
      url: 'https://kasperskylab.github.io/uif/icons/'
    },
    charts: {
      title: 'Charts',
      url: 'https://kasperskylab.github.io/uif/charts/'
    }
  },
  managerHead: () => `
    <style>
      .css-1wmxdc3, .css-1nwijr1 {
        margin-right: 0 !important;
      }
      .css-1rb1jn6 {
        max-width: 100% !important;
      }
    </style>
  `,
  framework: '@storybook/react-vite',
  viteFinal: async (config) => {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...config.resolve.alias,
      '@src': path.resolve(__dirname, '../src/'),
      '@design-system': path.resolve(__dirname, '../design-system/'),
      '@helpers': path.resolve(__dirname, '../helpers/'),
      '@sb': path.resolve(__dirname, '../.storybook/')
    }
    config.css = config.css || {}
    config.css.preprocessorOptions = {
      ...config.css.preprocessorOptions,
      less: {
        javascriptEnabled: true,
        paths: [path.resolve(__dirname, '..')]
      },
      scss: {}
    }
    return config
  }
}

export default config
