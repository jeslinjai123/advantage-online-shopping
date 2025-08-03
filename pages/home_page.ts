import {Page,expect,Locator} from "@playwright/test";
import {HomePageLocators as PageLocators} from '../locators/home_page_locators';

export default class HomePage{
    page:Page;
    locators:PageLocators;
    private productContainer: Locator;
    constructor(page:Page){
        this.page = page;
        const screen = page.locator('body');
        this.locators = new PageLocators(screen);
        this.productContainer = page.locator('.grid-table.center div');
    }

    /**
     * to select a product
     */
    async clickOnProduct(productName:string){
        const productItem = this.productContainer.filter({ hasText: productName });
        const viewDetailsButton = productItem.getByText('View Details').first();
        await viewDetailsButton.click();
    }

    /**
     * to add product to cart
     */
    async addProductToCart(){
        await this.locators.btn_addToCart.click();
    }

    /**
     * to click on cart
     */
    async clickOnCart(){
        await this.locators.btn_cart.click();
    }

    /**
     * to click on checkout
     */
    async clickOnCheckOut(){
        await this.locators.btn_checkOut.click();
    }

    /**
     * click on next button
     */
    async clickOnNext(){
        await expect(this.locators.btn_next).toBeVisible();
        await this.locators.btn_next.click();
    }

    /**
     * to select a payment method
     */
    async selectPaymentMethod(){
        await this.locators.btn_paymentMethod.click();
    }

    /**
     * to enter payment username
     */
    async enterUserName(userName:string){
        await this.locators.txt_paymentUserName.fill(userName);
    }

    /**
     * to enter payment password
     */
    async enterPassword(password:string){
        await this.locators.txt_paymentPassword.fill(password);
    }

    /**
     * to click on pay now
     */
    async clickOnPay(){
        await expect(this.locators.btn_payNow).toBeVisible();
        await this.locators.btn_payNow.click();
    }

    /**
     * to veriy whether payment is successfull
     */
    async verifyOrderPayment(message:string){
        await expect(this.locators.txt_OrderSuccess,{message:'Order is placed successully'}).toHaveText(message);
    }

    /**
     * to enter user name in order payment
     */
    async enterUserNameInOrderPayment(userName: string){
        await this.locators.txt_userName.fill(userName);
    }

    /**
     * to enter password in order payment
     */
    async enterPasswordInOrderPayment(password:string){
        await this.locators.txt_password.fill(password);
    }

    /**
     * to click on login button
     */
    async clickOnLogin(){
        await this.locators.btn_login.click();
    }






}