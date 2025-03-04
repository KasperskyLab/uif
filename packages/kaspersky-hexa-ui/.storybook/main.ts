const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
import { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
  stories: [
    '../docs/**/*.@(mdx|stories.@(ts|tsx))',
    '../docs/*.@(mdx|stories.@(ts|tsx))',
    '../src/**/*.@(mdx|stories.@(ts|tsx))'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@mihkeleidast/storybook-addon-source',
    '@storybook/addon-links',
    'storybook-dark-mode',
    '@storybook/addon-webpack5-compiler-babel'
  ],
  refs: {
    icons: {
      title: 'Icons',
      url: 'https://kasperskylab.github.io/uif/icons/',
    },
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
      '@icons': path.resolve(__dirname, '../icons/'),
      '@helpers': path.resolve(__dirname, '../helpers/'),
      '@style': path.resolve(__dirname, '../style/'),
      '@sb': path.resolve(__dirname, '../.storybook/'),
    };
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

module.exports = config
