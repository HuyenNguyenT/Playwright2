import { test, expect } from '@playwright/test';


test("Interaction with input", async ({ page }) => {  
  await page.goto('https://www.lambdatest.com/selenium-playground/simple-form-demo');
  const messageInput = await page.locator("input#user-message")
  await messageInput.scrollIntoViewIfNeeded();
  console.log(await messageInput.getAttribute("placeholder"))
  expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message")
  console.log("Before enter the data: " + await messageInput.inputValue())
  await messageInput.type("Hello World")
  console.log("After enter the data: " + await messageInput.inputValue())

})

test("Sum", async ({ page }) => {  
  await page.goto('https://www.lambdatest.com/selenium-playground/simple-form-demo');
  const sum1iput = await page.locator("input#sum1")
  const sum2iput = await page.locator("input#sum2")
  const getValueBtn = page.locator("//button[text() = 'Get Sum']")
    let num1 = 123
    let num2 = 1234
    // await sum1iput.scrollIntoViewIfNeeded();
  await sum1iput.fill(num1.toString())
  await sum2iput.fill(num2.toString())
  await getValueBtn.click()
  const result = page.locator("p#addmessage")
  console.log(await result.textContent())
  let expectedResult = num1 + num2
  expect(result).toHaveText("" + expectedResult)

})

test("Interaction with checkbox", async ({ page }) => {
await page.goto('https://www.lambdatest.com/selenium-playground/checkbox-demo');
const singleCheckbox = await page.locator("input#isAgeSelected")
expect(singleCheckbox).not.toBeChecked()
await singleCheckbox.check()
expect(singleCheckbox).toBeChecked();

})