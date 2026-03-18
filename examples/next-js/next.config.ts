import type { NextConfig } from 'next'

const config: NextConfig = {
  transpilePackages: ['@kaspersky/hexa-ui', '@kaspersky/hexa-ui-charts', '@kaspersky/hexa-ui-icons', '@kaspersky/hexa-ui-core'],
  compiler: {
    styledComponents: true
  },
  turbopack: {
    root: process.cwd()
  }
}

export default config
