import { test, expect } from '@playwright/test';


// test('dropdown test', async ({ page }) => {
//     await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
//     const dropdown = await page.selectOption("#select-demo", {
//         // label: 'Monday',
//         // value: 'Tuesday',
//         index: 4,
//     });
//     await page.waitForTimeout(3000);
//     await page.selectOption("#multi-select", [{
//                 label: 'Texas',
//             },
//             {
//                 index: 2
//             },
//             {
//                 value: 'Washington'
//             }
//             ]);  
//             await page.waitForTimeout(3000);
//     });


test('Bootstrap dropdown', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
    await selectCountry("India");
    await selectCountry("Netherlands");
    await selectCountry("United States of America");
    
    async function selectCountry(contryName) {
        await page.click('#country+span');
        await page.locator('ul#select2-country-results')
            .locator('li', {
                hasText: contryName
            }).click();
    }
});