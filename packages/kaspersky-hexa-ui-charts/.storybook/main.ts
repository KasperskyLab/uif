/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
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
    const path = (await import('path')).default
    const { fileURLToPath } = await import('node:url')
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...config.resolve.alias,
      assert: path.resolve(__dirname, 'assert-stub.js')
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
