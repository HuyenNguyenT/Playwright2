import  {test, expect} from '@playwright/test';


// test('calendar test', async ({page}) => {
// page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
// let date = "1994-05-26"

// await page.fill("id=birthday", date);
// await page.waitForTimeout(3000);
// });

test('calendar demo using moment', async ({page}) => {
    page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
    let date = "1994-05-26"
    
    await page.fill("id=birthday", date);
    await page.waitForTimeout(3000);
    });