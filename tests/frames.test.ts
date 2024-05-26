import { test, expect } from "@playwright/test";



test("interact with Frames", async ({ page }) => {
await page.goto('https://letcode.in/frame');

const allframe = page.frames()
console.log('No.frame: ' + allframe.length)


})