import { PlaywrightTestConfig, devices } from '@playwright/test'

import path from 'path'

//use process.env.port byd efault and fallback to port 3000

const PORT = process.env.PORT || 3000

//set webserver .url and use .baseURL with the location of the webserver resppecting the  correct set port

const BASE_URL = `http://localhost:${PORT}`

const config: PlaywrightTestConfig = {
  // Each test is given n seconds.
  timeout: 30 * 1000,
  testDir: path.join(__dirname, 'src', 'e2e'),
  //if a test failks, retry it additional n times
  retries: process.env.CI ? 2 : 0, //set to 2 when running on CI

  //artifacts folder where screenshots , videos and traces are stored.
  outputDir: './src/test-results',

  //Run local dev server before running tests
  webServer: {
    command: 'npm run dev',
    url: BASE_URL,
    //wait for 120 seconds before considering the webserver is up and running
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  use: {
    //run tests in headless mode
    headless: true,
    //run tests in chromium browser
    browserName: 'chromium',
    //run tests in mobile view
    //run tests in mobile view
    //device: devices['iPhone 11 Pro'],

    // Collect trace when retrying the failed test
    trace: 'on-first-retry', // record traces on first retry of each test
  },
  projects: [
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'Mobile Chrome',
      use: {
        browserName: 'chromium',

        ...devices['iPhone 11 Pro'],
      },
    },
  ],
}

export default config
