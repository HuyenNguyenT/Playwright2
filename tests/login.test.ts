import { chromium, expect, test } from "@playwright/test";
import { url } from "inspector";

// LambdaTest capabilities
const capabilities = {
     browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
     browserVersion: "latest",
     "LT:Options": {
         platform: "Windows 10",
         build: "Playwright Test Build",
         name: "Playwright Test",
         user: 'nthuyendvl87',
         accessKey: 'jtm8EadqDCt3CWdnkknlXTNKIZk6MOK9SbhiuXGPWKqPQ7hVOC',
         network: true,
         video: true,
         console: true,
         tunnel: false, // Add tunnel configuration if testing locally hosted webpage
         tunnelName: "", // Optional
         geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
     },
 };

test("Login test demo", async() => {
     const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=
          ${encodeURIComponent(JSON.stringify(capabilities))}`);
// const browser = await chromium.launch({
//      headless: false });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://ecommerce-playground.lambdatest.io/");
await page.hover("//a[@data-toggle='dropdown']//span[contains(.,' My account')]")
// await page.click('text=Login')
await page.click("'Login'")
await page.fill("//input[@name='email']", "koushik350@gmail.com")
await page.fill("//input[@name='password']", "Pass123$")
await page.click("//input[@value='Login']")
await page.close()
await context.close()
await browser.close()
// await page.waitForTimeout(3000)
// const newContext = await browser.newContext()
// const newPage = await newContext.newPage();
// await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
// await newPage.waitForTimeout(3000)
// expect(await page.url()).toBe("https://ecommerce-playground.lambdatest.io/index.php?route=account/account")

})