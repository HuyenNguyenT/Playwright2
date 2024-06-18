import {expect, test} from "@playwright/test";
import RegisterPage from "../pages/registerPage";
import LoginPage from "../pages/loginPage"
import HomePage from "../pages/homePage";
import SpecialHotPage from "../pages/specialHotPage";

const email = "testauto@test1.gmail.com";
const password = "Koushik@123";
test("Register test_01", async ({page,baseURL}) => {
    test.setTimeout(50000)
    const register = new RegisterPage(page);
await page.goto(`${baseURL}route=account/register`);
await register.enterFirstName("Koushik");
await register.enterLastName("Chatterjee");
await register.enterEMail(email)
await register.enterPhone("123456")
await register.enterPass(password)
await register.enterConfirmPass(password)
expect(await register.isSubcribeChecked()).toBeChecked()
await register.clickTermandCondition();
register.clickContinueRegisterPage()

})