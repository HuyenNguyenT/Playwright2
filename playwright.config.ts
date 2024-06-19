import type { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  testMatch:["pomtest/addToCartUsingFixtrue.test.ts"],
  use: {
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


