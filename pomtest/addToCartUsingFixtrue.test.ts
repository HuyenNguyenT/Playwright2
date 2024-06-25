import {expect, test} from "../base/pomFixture";
import * as data from "../test-data/addTocar.test-data.json"

//run test by firefox
// test.use({
//     browserName: "firefox"
// })
test.describe("Page object test demo", async() => {

    test("Register test_01", async ({page,baseURL,registerPage}) => {
        test.setTimeout(50000)
    await page.goto(`${baseURL}route=account/register`);
    await registerPage.enterFirstName(data.firstname);
    await registerPage.enterLastName(data.lastname);
    await registerPage.enterEMail(data.email)
    await registerPage.enterPhone(data.phone_number)
    await registerPage.enterPass(data.password)
    await registerPage.enterConfirmPass(data.password)
    expect(await registerPage.isSubcribeChecked()).toBeChecked()
    await registerPage.clickTermandCondition();
    registerPage.clickContinueRegisterPage()
    })
    
    test("Login test_02", async({page,baseURL,loginPage}) => {
        await page.goto(`${baseURL}route=account/login`);
        await loginPage.enterEMail(data.email);
        await loginPage.enterLoginPassword(data.password);
        await loginPage.clickLogingBtn();
        expect(await page.title()).toBe("My Account");
    })
    
    test("Add to cart test_03", async({page, baseURL,loginPage,homePage,specialPage}) => {
        await page.goto(`${baseURL}route=account/login`);
        await loginPage.login(data.email,data.password);
        await homePage.clickOnSpecialHotMenue();
        await specialPage.addFirstProductToTheCard();
       const isCartVisible =  await specialPage.isToastVisible();
       expect(isCartVisible).toBeVisible()
       
    })
})