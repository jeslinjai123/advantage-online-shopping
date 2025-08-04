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

    /**
     * to enter user name
     * @param userName t
     */
    async enterUserName(userName:string){
        await this.locator.txt_userName.fill(userName);
    }

    /**
     * to enter email
     * @param email
     */
    async enterEmail(email:string){
        await this.locator.txt_email.fill(email);
    }

    /**
     * to enter password
     * @param password 
     */
    async enterPassword(password:string){
        await this.locator.txt_password.fill(password);
    }

    /**
     * to enter the password again for confirmation
     * @param confirmPassword 
     */
    async enterConfirmPassword(confirmPassword:string){
        await this.locator.txt_confirmPassword.fill(confirmPassword);
    }

    /**
     * to enter first name
     * @param firstName 
     */
    async enterFirstName(firstName:string){
        await this.locator.txt_firstName.fill(firstName);
    }

    /**
     * to enter last name
     * @param lastName 
     */
    async enterLastName(lastName:string){
        await this.locator.txt_lastName.fill(lastName);
    }

    /**
     * to enter phone number
     * @param phoneNumber 
     */
    async enterPhoneNumber(phoneNumber:string){
        await this.locator.txt_phoneNumber.fill(phoneNumber);
    }

    /**
     * to enter country
     * @param option 
     */
    async enterCountry(option:string){
        await this.locator.drp_country.selectOption(option);
    }

    /**
     * to enter city
     * @param city 
     */
    async enterCity(city:string){
        await this.locator.txt_city.fill(city);
    }

    /**
     * to enter address
     * @param address 
     */
    async enterAddress(address:string){
        await this.locator.txt_address.fill(address);
    }

    /**
     * to enter state
     * @param state 
     */
    async enterState(state:string){
        await this.locator.txt_state.fill(state);
    }

    /**
     * to enter postal code
     * @param postalCode 
     */
    async enterPostalCode(postalCode:string){
        await this.locator.txt_postalCode.fill(postalCode);
    }

    /**
     * to enter mandatory details
     * @param userName 
     * @param email 
     * @param password 
     * @param confirmPassword 
     */
    async enterMandatoryDetails(userName:string,email:string,password:string,confirmPassword:string){
        await this.enterUserName(userName);
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.enterConfirmPassword(confirmPassword);
    }

    /**
     * to click on terms and conditions
     */
    async clickOnTermsAndConditions(){
        await this.locator.chkBoxConditions.click();
    }

    /**
     * to click on register button
     */
    async clickOnRegister(){
        await this.locator.btn_register.click();
    }

    /**
     * to verify whether login is success or not
     * @param userName 
     */
    async verifyLogin(userName:string){
        await expect(this.locator.txt_loginUser,{message: 'User successully logined after creating new account'}).toHaveText(userName);
    }
}