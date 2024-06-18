import  {test, expect} from '@playwright/test';
import moment from 'moment';




// test('calendar test', async ({page}) => {
// page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
// let date = "1994-05-26"

// await page.fill("id=birthday", date);
// await page.waitForTimeout(3000);
// });

test('calendar demo using moment', async({page}) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
    test.setTimeout(60000);
    await selectDate(12,"December 2024");
    await page.reload()
    await selectDate(5,"September 2024");
    await page.waitForTimeout(3000)

async function selectDate(date:number,monthYear:string){
    await page.click("//input[@placeholder='Start date']");
    const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
    const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
    const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");
    // const dateToSelect = "March 2025";
    const thisMonth = moment(monthYear, "MMMM YYYY").isBefore();
    console.log("This month? " + thisMonth);
    while (await mmYY.textContent() != monthYear) {
        if (thisMonth) {
            await prev.click();
        } else {    
            await next.click();
        }
    }
    await page.click(`//td[@class='day'][text()='${date}']`);
}
})