import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/visual',

  timeout: 30_000,

  fullyParallel: true,

  retries: 1,

  workers:  2,

  use: {
    baseURL: 'http://127.0.0.1:6006',

    browserName: 'chromium',

    viewport: {
      width: 1280,
      height: 720,
    },

    deviceScaleFactor: 1,

    colorScheme: 'light',

    locale: 'en-US',

    timezoneId: 'UTC',

    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },

  expect: {
    toHaveScreenshot: {
      threshold: 0.2,
      maxDiffPixelRatio: 0.001,
    },
  },

  webServer: {
    command: 'npx http-server storybook-static -p 6006 -a 127.0.0.1 --silent',
    url: 'http://127.0.0.1:6006',
    reuseExistingServer: false,
    timeout: 60_000,
  },

  reporter: [
    ['list'],
    ['html', { 
      outputFolder: 'playwright-report', 
      open: 'never', 
    }],
  ],
});