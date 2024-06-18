import {Page} from '@playwright/test'




export default class HomePage{

    constructor(public page : Page){}


    async clickOnSpecialHotMenue(){
        // await this.page.click("'Special Hot'")
        await this.page.click("(//span[contains(text(),'Special')]/../..)[2]")
    }
}