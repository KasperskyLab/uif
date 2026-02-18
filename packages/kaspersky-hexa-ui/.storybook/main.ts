import { StorybookConfig } from '@storybook/react-webpack5'

import { createRequire } from 'node:module'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const require = createRequire(import.meta.url)

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const config: StorybookConfig = {
  stories: [
    '../docs/**/*.@(mdx|stories.@(ts|tsx))',
    '../docs/*.@(mdx|stories.@(ts|tsx))',
    '../src/**/*.@(mdx|stories.@(ts|tsx))',
    '../Changelog.mdx'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-webpack5-compiler-babel'
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
  framework: '@storybook/react-webpack5',
  webpackFinal: async (config) => {
    if (!config.resolve || !config.module || !config.module.rules) {
      return config
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      '@src': path.resolve(__dirname, '../src/'),
      '@design-system': path.resolve(__dirname, '../design-system/'),
      '@helpers': path.resolve(__dirname, '../helpers/'),
      '@sb': path.resolve(__dirname, '../.storybook/')
    }
    config.module.rules.push({
      test: /\.less$/,
      include: [
        path.resolve(__dirname, '..'),
        path.resolve(__dirname, '..', 'node_modules', 'antd')
      ],
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            modules: {
              mode: 'global',
              localIdentName: '[name]_[local]_[hash:base64:8]'
            },
            sourceMap: true
          }
        },
        {
          loader: require.resolve('less-loader'),
          options: {
            lessOptions: {
              paths: [path.resolve(__dirname, '..')],
              javascriptEnabled: true
            }
          }
        }
      ]
    }, {
      test: /\.(scss)$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              namedExport: false,
              auto: true,
              exportLocalsConvention: 'as-is',
              localIdentName: '[local]_[hash:base64:8]'
            }
          }
        },
        'sass-loader'
      ]
    })

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions
      })
    ]

    return config
  }
}

export default config
