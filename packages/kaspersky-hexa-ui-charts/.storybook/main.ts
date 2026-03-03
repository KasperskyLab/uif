const _ = require('lodash');
const path = require('path');
const webpack = require('webpack');
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  webpackFinal: async (config) => {
    _.set(config, 'resolve.fallback.assert', false);
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules.filter((rule) => !(rule.test && rule.test.test('.svg'))),
          {
            test: /\.(less)$/i,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'less-loader',
                options: {
                  javascriptEnabled: true,
                },
              },
            ],
          },
          {
            test: /\.(woff|eot|woff2|ttf)$/,
            use: 'file-loader',
          },
          {
            test: /\.(scss)$/i,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    auto: true,
                    localIdentName: '[local]_[hash:base64:5]',
                  },
                },
              },
              'sass-loader',
            ],
          },
          {
            test: /\.svg$/,
            use: {
              loader: '@svgr/webpack',
              options: {
                svgo: false,
              },
            },
          },
        ],
      }
    }
  }
}
export default config