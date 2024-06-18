import {Page} from '@playwright/test'




export default class Login{

    constructor(public page : Page){}

    async enterEMail(email : string){
        await this.page.locator("#input-email").type(email)
    }

    async enterLoginPassword(password : string){
        await this.page.locator("#input-password").type(password)
    }

    async clickLogingBtn(){
    //    await this.page.locator("//input[@value='Login']").click()
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.locator("//input[@value='Login']").click()
        ])
    
    }
}
