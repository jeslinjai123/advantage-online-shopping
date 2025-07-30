import { Locator } from "@playwright/test";
export class CreateAccountLocator{
    txt_userName: Locator;
    txt_email: Locator;
    txt_password: Locator;
    txt_confirmPassword: Locator;
    txt_firstName : Locator;
    txt_lastName: Locator;
    txt_phoneNumber: Locator;
    drp_country: Locator;
    txt_city: Locator;
    txt_address: Locator;
    txt_state: Locator;
    txt_postalCode: Locator;
    btn_register: Locator;
    chkBoxConditions: Locator;
    txt_loginUser:Locator;

    constructor(screen:Locator){
        this.txt_userName = screen.locator("//input[@name='usernameRegisterPage']");
        this.txt_email = screen.locator("//input[@name='emailRegisterPage']");
        this.txt_password = screen.locator("//input[@name='passwordRegisterPage']");
        this.txt_confirmPassword = screen.locator("//input[@name='confirm_passwordRegisterPage']");
        this.txt_firstName = screen.locator("//input[@name='first_nameRegisterPage']");
        this.txt_lastName = screen.locator("//input[@name='last_nameRegisterPage']");
        this.txt_phoneNumber = screen.locator("//input[@name='phone_numberRegisterPage']");
        this.drp_country = screen.locator("//select[@name='countryListboxRegisterPage']");
        this.txt_city = screen.locator("//input[@name='cityRegisterPage']");
        this.txt_address = screen.locator("//input[@name='addressRegisterPage']");
        this.txt_state = screen.locator("//input[@name='state_/_province_/_regionRegisterPage']");
        this.txt_postalCode = screen.locator("//input[@name='postal_codeRegisterPage']");
        this.btn_register = screen.locator("#register_btn");
        this.chkBoxConditions = screen.locator("//input[@name='i_agree']");
        this.txt_loginUser = screen.locator("//span[@class='hi-user containMiniTitle ng-binding']");

    }

}