import {Page} from '@playwright/test';

export default class RegisterPage {

constructor(public page : Page){

}

async enterFirstName(firstname : string){
    await this.page.locator("#input-firstname").type(firstname)
}

async enterLastName(lastname : string){
    await this.page.locator("#input-lastname").type(lastname)
}

async enterEMail(email : string){
    await this.page.locator("#input-email").type(email)
}

async enterPhone(phone : string){
    await this.page.locator("#input-telephone").type(phone)
}

async enterPass(pass : string){
    await this.page.locator("#input-password").type(pass)
}

async enterConfirmPass(pass : string){
    // await this.page.locator("#input-confirm").type(pass)
    await this.page.fill('#input-confirm', pass);
}

async isSubcribeChecked(){
    return this.page.locator("#input-newsletter-no");
}

async clickTermandCondition() {
    await this.page.click("//label[@for='input-agree']");
}
// async clickContinueRegisterPage() {
//     await this.page.click("//input[@value='Continue']");
// }

  async clickContinueRegisterPage(){
    // await Promise.all([
    //     this.page.waitForNavigation(),
    //     this.page.locator("//input[@value='Continue']").click()
    // ])
        await this.page.locator("//input[@value='Continue']").click();
        // await this.page.waitForNavigation({ waitUntil: 'load' });
  }
}