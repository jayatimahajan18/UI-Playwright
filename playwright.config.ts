import { defineConfig, devices } from '@playwright/test';

const isHeaded = process.env.HEADED === 'false';
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  timeout: 360 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
    ['./reporters/json-reporter.ts'],
  ],
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'https://demowebshop.tricentis.com/cart',
    headless: isHeaded ? false : true,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    /* Capture screenshot on failure */
    screenshot: 'only-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});
