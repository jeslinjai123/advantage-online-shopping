import {Locator} from '@playwright/test';

export class LoginPageLocators {
    btn_login: Locator;
    txt_userName: Locator;
    txt_password: Locator;
    btn_signIn : Locator;
    btn_createNewAccount: Locator;
    txt_loginUser: Locator;
    btn_account : Locator;
    btn_signOut: Locator;
    lbl_requireUserName: Locator;
    lbl_requirePassword: Locator;
    lbl_invalidData: Locator;
    chkbox_remMe: Locator;

    constructor(screen: Locator){
        this.btn_login = screen.locator("#menuUser");
        this.txt_userName = screen.locator("input[name='username']");
        this.txt_password = screen.locator("input[name='password']");
        this.btn_signIn = screen.locator("#sign_in_btn");
        this.btn_createNewAccount = screen.getByRole('link',{name: 'CREATE NEW ACCOUNT'});
        this.txt_loginUser = screen.locator("#menuUserLink span");
        this.btn_account = screen.locator('#menuUserLink');
        this.btn_signOut = screen.getByRole('link',{name:'Sign out'});
        this.lbl_requireUserName = screen.locator("label[class='invalid']").nth(0);
        this.lbl_requirePassword = screen.locator("label[class='invalid']").nth(1);
        this.lbl_invalidData = screen.locator('#signInResultMessage');
        this.chkbox_remMe = screen.locator("input[name='remember_me']");
    }
    
}