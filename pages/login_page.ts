import {Page,expect} from "@playwright/test";
import {LoginPageLocators as PageLocators} from '../locators/login_page_locators';

export default class LoginPage {
    page: Page;
    locators: PageLocators;

    constructor(page:Page){
        this.page = page;
        const screen = page.locator('body');
        this.locators = new PageLocators(screen);
    }

    /**
     * opening the page
     */
    async openPage(){
        try {
            await this.page.goto("https://www.advantageonlineshopping.com/#/", { waitUntil: 'domcontentloaded' });
        } catch (error) {
            console.warn('Navigation failed, retrying...');
            await this.page.goto("https://www.advantageonlineshopping.com/#/", { waitUntil: 'domcontentloaded' });
        }
    }

    /**
     * go to login page
     */
    async goTologinPage(){
        await this.locators.btn_login.click();
    }

    /**
     * to enter userName
     */
    async enterUserName(userName:string){
        await this.locators.txt_userName.fill(userName);
    }

    /**
     * to enter password
     */
    async enterPassword(password:string){
        await this.locators.txt_password.fill(password);
    }

    /**
     * clicking on create new account
     */
    async clickOnCreateAccount(){
        await this.locators.btn_createNewAccount.click();
    }

    /**
     * clicking on sign in button
     */
    async clickOnSignIn(){
        await expect(this.locators.btn_signIn).toBeEnabled(); // wait until enabled
        await this.locators.btn_signIn.click();
    }

    /**
     * to verify whether user is signed in
     */
    async verifySignIn(userName: string){
        expect(this.locators.txt_loginUser,{message:'User able to signed in successully with valid credentials'}).toHaveText(userName);

    }

    /**
     * click on account button
     */
    async clickOnAccount(){
        await this.locators.btn_account.click();
    }

    /**
     * click on sign out
     */
    async clickOnSignOut(){
        await this.locators.btn_signOut.click();
    }

    /**
     * to ensure username is a mandatory field
     */
    async verifyRequireUsername(errorMsg: string){
        await this.locators.lbl_requireUserName.waitFor({ state: 'visible', timeout: 5000 });
        expect(this.locators.lbl_requireUserName,{message:'Verifying Username field is mandatory'}).toHaveText(errorMsg);
    }

    /**
     * to ensure password is a mandatory field
     */
    async verifyRequirePassword(errorMsg:string){
        await this.locators.lbl_requirePassword.waitFor({ state: 'visible', timeout: 5000 });
        expect(this.locators.lbl_requirePassword,{message:'Verifying password is mandatory'}).toHaveText(errorMsg);
    }

    /**
     * verify sign in button is disabled
     */
    async verifySignInDisable(){
        expect(this.locators.btn_signIn,{message:'Verifying sign in button is disabled'}).toBeDisabled();
    }

    /**
     * Verifying error handling for invalid credentials
     */
    // async verifyInvalidCredentials(errorMsg:string){
    //     await this.locators.lbl_invalidData.waitFor({ state: 'visible', timeout: 5000 });
    //     expect(this.locators.lbl_invalidData,{message:'Verifying error is disabled for invalid credentials'}).toHaveText(errorMsg);
    // }

    async verifyInvalidCredentials(errorMsg: string) {
    await expect.poll(
        async () => await this.locators.lbl_invalidData.filter({ hasText: errorMsg }).textContent(),
        { timeout: 3000 }
    ).toContain(errorMsg);
}

    /**
     * click on username field
     */
    async clickOnUserName(){
        await this.locators.txt_userName.click();
    }

    /**
     * click on password field
     */
    async clickOnPassword(){
        await this.locators.txt_password.click();
    }

    /**
     * to click on checkbox remember me
     */
    async clickOnCheckBox(){
        await this.locators.chkbox_remMe.click();
    }


}