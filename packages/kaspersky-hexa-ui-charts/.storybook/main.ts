import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react-vite',
  viteFinal: async (config) => {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...config.resolve.alias,
      assert: false
    }
    config.css = config.css || {}
    config.css.preprocessorOptions = {
      ...config.css.preprocessorOptions,
      scss: {}
    }
    return config
  }
}

export default config
