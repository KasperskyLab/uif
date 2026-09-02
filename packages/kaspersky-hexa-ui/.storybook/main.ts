import type { StorybookConfig } from '@storybook/react-vite'

import fs from 'node:fs'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import path from 'path'

const CHANGELOG_VIRTUAL_ID = 'virtual:hexa-ui-changelog'
const CHANGELOG_RESOLVED_ID = `\0${CHANGELOG_VIRTUAL_ID}`

const __dirname = dirname(fileURLToPath(import.meta.url))

const config: StorybookConfig = {
  stories: [
    '../docs/**/*.@(mdx|stories*.@(ts|tsx))',
    '../docs/*.@(mdx|stories*.@(ts|tsx))',
    {
      directory: '../src',
      files: '**/*.@(mdx|stories*.@(ts|tsx))'
    },
    '../ChangelogSearch.mdx'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links'
  ],
  core: {
    disableTelemetry: true
  },
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
    config.plugins.push(
      {
        name: 'hexa-raw-md',
        enforce: 'pre',
        transform (code, id) {
          if (id.split('?')[0].endsWith('.md')) {
            return { code: `export default ${JSON.stringify(code)}`, map: null }
          }
        }
      },
      {
        // Storybook MDX pipeline owns `*.mdx`; serve Changelog.json via a virtual module.
        name: 'hexa-changelog-source',
        resolveId (id) {
          if (id === CHANGELOG_VIRTUAL_ID) {
            return CHANGELOG_RESOLVED_ID
          }
        },
        load (id) {
          if (id === CHANGELOG_RESOLVED_ID) {
            const changelogPath = path.resolve(__dirname, '../Changelog.json')
            this.addWatchFile(changelogPath)
            try {
              const content = fs.readFileSync(changelogPath, 'utf8')
              const parsed = JSON.parse(content)
              const entries = Array.isArray(parsed) ? parsed : []
              return `export default ${JSON.stringify(entries)}`
            } catch {
              return 'export default []'
            }
          }
        }
      }
    )

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
