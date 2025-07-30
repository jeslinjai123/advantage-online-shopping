import {test} from '@playwright/test';
import LoginPage  from '../pages/login_page';
import CreateAccountPage from '../pages/create_account_page';

function generateRandomString(length = 6): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

function generateRandomThreeDigitNumber(): number {
    return Math.floor(100 + Math.random() * 900);
}


test('Verify whether user able to create new account ',async({page})=>{
    let userName = generateRandomString(6);
    let password = userName+'@'+generateRandomThreeDigitNumber();
    const loginPage = new LoginPage(page);
    const createAccountPage = new CreateAccountPage(page);
    await loginPage.openPage();
    await loginPage.goTologinPage();
    await loginPage.clickOnCreateAccount();
    await createAccountPage.enterUserName(userName);
    await createAccountPage.enterEmail(userName+'@gmail.com');
    await createAccountPage.enterPassword(password);
    await createAccountPage.enterConfirmPassword(password);
    await createAccountPage.clickOnTermsAndConditions();
    await createAccountPage.clickOnRegister();
    await createAccountPage.verifyLogin(userName);
})
