import {test} from '@playwright/test';
import LoginPage  from '../pages/login_page';
import CreateAccountPage from '../pages/create_account_page';
import GenUtils from '../utils/gen_utils';


test('Verify whether user able to create new account ',async({page})=>{
    let userName = GenUtils.generateRandomString(6);
    let password = userName+'@'+GenUtils.generateRandomThreeDigitNumber();
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
