import { devices, PlaywrightTestConfig } from '@playwright/test';

// const capabilities = {
//   browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
//   browserVersion: "latest",
//   "LT:Options": {
//       platform: "Windows 10",
//       build: "Playwright Test from config",
//       name: "Playwright Test - 1",
//       user: 'nthuyendvl87',
//       accessKey: 'jtm8EadqDCt3CWdnkknlXTNKIZk6MOK9SbhiuXGPWKqPQ7hVOC',
//       network: true,
//       video: true,
//       console: true,
//       tunnel: false, // Add tunnel configuration if testing locally hosted webpage
//       tunnelName: "", // Optional
//       geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
//   },
// };


const config: PlaywrightTestConfig = {
    projects: [
      {
        name: "chrome:Latest:MacOS Catalina@lambdatest",
        use: {
          viewport: {width: 1920, height: 1080},
        },
      },
      {
        name:  "chrome:Latest:Windows 10@lambdatest",
        use: {
          viewport: {width: 1920, height: 1080},
        },
      },
      // {
      //   name: "chrome",
      //   use: {
      //     ...devices["Desktop Chrome"]
      //   }
      // },
      // {
      //   name: "firefox",
      //   use: {
      //     ...devices["Desktop Firefox"]
      //   }
      // }
    ],

  testMatch:["pomtest/addToCartUsingFixtrue.test.ts"],
  use: {
    // connectOptions: {
    //   wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=
    //       ${encodeURIComponent(JSON.stringify(capabilities))}`
    // },
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    headless: false,
    screenshot: 'only-on-failure',
    video: "on",
    launchOptions: {
      slowMo: 1000,
    },
  },
  retries: 0,
  reporter: [['list'],['json',{
    outputFile: 'jsonReports/jsonReport.json',
  }],['html',{
    open: 'never',
  }
  ]]
}
export default config;


