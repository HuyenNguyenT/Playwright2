import {Page, expect, test} from '@playwright/test';

// test('single windows test', async ({page}) => {
//   await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');
//   console.log(page.url());
//  const [newWindow] =  await Promise.all([
//     page.waitForEvent('popup'),
//     page.click("'Follow On Twitter'")
//   ])
//   console.log(newWindow.url());
// });



test('multiple windows test', async ({page}) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');
    console.log(page.url());
   const [multiplePage] =  await Promise.all([
      page.waitForEvent('popup'),
      page.click("#followboth")
    ])
    await multiplePage.waitForLoadState()
    const pages = multiplePage.context().pages()

    console.log('No of tab: ' + pages.length);
    pages.forEach(tab  => {
        console.log('Page URL: ' + tab.url());
    })

    let facebookPage: Page | null = null; 
    for(let index = 0; index < pages.length; index++) {
        const url = pages[index].url();
        if(url == "https://web.facebook.com/lambdatest/?_rdc=1&_rdr") {
            facebookPage = pages[index]; 
        }
    }
    if (facebookPage) { 
        const text = await facebookPage.textContent("//h1")
        console.log(text);
    }
    
  });