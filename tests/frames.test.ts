import { test, expect } from "@playwright/test";



test("interact with Frames", async ({ page }) => {
await page.goto('https://letcode.in/frame');

const allframe = page.frames()
console.log('No.frame: ' + allframe.length)

const frame = page.frameLocator("#firstFr")
await frame.locator("//input[@name='fname']").fill('koushik')   
await frame.locator("//input[@name='lname']").fill('chatterjee')

const innerFrame = frame.frameLocator("//iframe[@src='innerFrame']")

await innerFrame.locator("//input[@name='email']").fill("koushik@gmail.com")


// const firstFrame = page.frame("firstFr")


// if(firstFrame !== null  ){
//     await firstFrame.fill("","")
// }
// await firstFrame?.fill("//input[@name='fname']", 'koushik')

// await firstFrame?.fill("//input[@name='lname']", 'chatterjee')
// await page.waitForTimeout(3000)
// expect(await firstFrame?.locator("p.title.has-text-info").textContent()
// ).toContain('You have entered')
})