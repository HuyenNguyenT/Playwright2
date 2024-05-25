import { expect, test } from "@playwright/test";



test("Alert", async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

    page.on("dialog", async (alert) => {
        const text = await alert.message()
        console.log(text)
        await alert.accept();
    })
    await page.locator("button:has-text('Click Me')").nth(0).click()
})

test("Alert with ok or cancel", async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

    page.on("dialog", async (alert) => {
        const text = await alert.message()
        console.log(text)
        await alert.dismiss();
    })
    await page.locator("button:has-text('Click Me')").nth(1).click()
    expect(await page.locator("id=confirm-demo")).toContainText("Cancel!")
})

test("Alert with promp box", async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

    page.on("dialog", async (alert) => {
        const text = await alert.message()
        console.log(text)
        await alert.accept("koushik");
    })
    await page.locator("button:has-text('Click Me')").nth(2).click()
    expect(await page.locator("id=prompt-demo")).toContainText("'koushik'")
})

test("Model alert", async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo');
    await page.click("//button[@data-target='#myModal']")
    await page.click("//div[@id='myModal']//button[text()='Save Changes']")

})