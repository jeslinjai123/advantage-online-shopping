import {Page,expect} from '@playwright/test';
import {CreateAccountLocator as PageLocators} from '../locators/create_account_locators'
export default class CreateAccountPage{
    page:Page;
    locator:PageLocators;
    constructor(page:Page){
        this.page = page;
        const screen = page.locator('body');
        this.locator = new PageLocators(screen);
    }

    async enterUserName(userName:string){
        await this.locator.txt_userName.fill(userName);
    }

    async enterEmail(email:string){
        await this.locator.txt_email.fill(email);
    }

    async enterPassword(password:string){
        await this.locator.txt_password.fill(password);
    }

    async enterConfirmPassword(confirmPassword:string){
        await this.locator.txt_confirmPassword.fill(confirmPassword);
    }

    async enterFirstName(firstName:string){
        await this.locator.txt_firstName.fill(firstName);
    }

    async enterLastName(lastName:string){
        await this.locator.txt_lastName.fill(lastName);
    }

    async enterPhoneNumber(phoneNumber:string){
        await this.locator.txt_phoneNumber.fill(phoneNumber);
    }

    async enterCountry(option:string){
        await this.locator.drp_country.selectOption(option);
    }

    async enterCity(city:string){
        await this.locator.txt_city.fill(city);
    }

    async enterAddress(address:string){
        await this.locator.txt_address.fill(address);
    }

    async enterState(state:string){
        await this.locator.txt_state.fill(state);
    }

    async enterPostalCode(postalCode:string){
        await this.locator.txt_postalCode.fill(postalCode);
    }

    async enterMandatoryDetails(userName:string,email:string,password:string,confirmPassword:string){
        await this.enterUserName(userName);
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.enterConfirmPassword(confirmPassword);
    }

    async clickOnTermsAndConditions(){
        await this.locator.chkBoxConditions.click();
    }

    async clickOnRegister(){
        await this.locator.btn_register.click();
    }

    async verifyLogin(userName:string){
        await expect(this.locator.txt_loginUser,{message: 'User successully logined after creating new account'}).toHaveText(userName);
    }
}