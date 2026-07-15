import type { StorybookConfig } from '@storybook/react-vite'

import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import path from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config: StorybookConfig = {
  stories: [
    '../docs/**/*.@(mdx|stories*.@(ts|tsx))',
    '../docs/*.@(mdx|stories*.@(ts|tsx))',
    {
      directory: '../src',
      files: '**/*.@(mdx|stories*.@(ts|tsx))'
    },
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
      /* Last path segment "stories" is typed as component; hide the built-in component icon. */
      .sidebar-item[data-nodetype="component"][data-item-id$="-stories"]:not([data-item-id*="-stories-"]) svg[type="component"] {
        display: none;
      }
    </style>
  `,
  framework: '@storybook/react-vite',
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      skipChildrenPropWithoutDoc: false
    }
  },
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

    config.plugins = config.plugins || []
    config.plugins.push({
      name: 'hexa-raw-md',
      enforce: 'pre',
      transform (code, id) {
        if (id.split('?')[0].endsWith('.md')) {
          return { code: `export default ${JSON.stringify(code)}`, map: null }
        }
      }
    })

    config.optimizeDeps = {
      ...(config.optimizeDeps || {}),
      include: [
        ...(Array.isArray(config.optimizeDeps?.include) ? config.optimizeDeps.include : []),
        'react-live',
        'prism-react-renderer'
      ]
    }
    return config
  }
}

export default config
