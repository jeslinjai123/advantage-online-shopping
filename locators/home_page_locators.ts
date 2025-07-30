import { Locator } from "@playwright/test";
export class HomePageLocators{
    lbl_product: Locator;
    btn_addToCart: Locator;
    btn_cart: Locator;
    btn_checkOut: Locator;
    btn_next: Locator;
    btn_paymentMethod: Locator;
    txt_paymentUserName: Locator;
    txt_paymentPassword: Locator;
    btn_payNow: Locator;
    txt_OrderSuccess :Locator;
    txt_userName: Locator;
    txt_password: Locator;
    btn_login: Locator;

    constructor(screen:Locator){
        this.lbl_product = screen.locator('#details_16');
        this.btn_addToCart = screen.getByRole('button',{name:'ADD TO CART'});
        this.btn_cart = screen.locator('#shoppingCartLink');
        this.btn_checkOut = screen.locator('#checkOutButton');
        this.btn_next = screen.locator('#next_btn').first();
        this.btn_paymentMethod = screen.locator("input[name='safepay']");
        this.txt_paymentUserName = screen.locator("input[name='safepay_username']");
        this.txt_paymentPassword = screen.locator("input[name='safepay_password']");
        this.btn_payNow = screen.locator('#pay_now_btn_SAFEPAY');
        this.txt_OrderSuccess = screen.locator("//span[@class='roboto-regular ng-scope']");
        this.txt_userName = screen.locator("input[name='usernameInOrderPayment']");
        this.txt_password = screen.locator("input[name='passwordInOrderPayment']");
        this.btn_login = screen.locator("#login_btn");
    }
}