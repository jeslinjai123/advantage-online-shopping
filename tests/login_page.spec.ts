import {test} from '@playwright/test';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import LoginPage  from '../pages/login_page';
import {LoginPageModel} from '../config/data_config/models/login_page_model';

// Load YAML data
const fileContents = fs.readFileSync('config/data_config/data/login_page_data.yml', 'utf8');
const loginPageData: LoginPageModel = yaml.load(fileContents) as LoginPageModel;

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

test('Veriy whether user able to login with valid credentials and log out',async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.openPage();
    await loginPage.goTologinPage();
    await loginPage.enterUserName(loginPageData.userName);
    await loginPage.enterPassword(loginPageData.password);
    await loginPage.clickOnSignIn();
    await loginPage.verifySignIn(loginPageData.userName);
    await loginPage.clickOnAccount();
    await loginPage.clickOnSignOut();
})

test("Veriy error handling for invalid login attempts",async({page})=>{
    let userName = generateRandomString(6);
    let password = userName+'@'+generateRandomThreeDigitNumber();
    const loginPage = new LoginPage(page);
    await loginPage.openPage();
    await loginPage.goTologinPage();
    await loginPage.clickOnUserName();
    await loginPage.clickOnPassword();
    await loginPage.verifyRequireUsername(loginPageData.errorMsg[0]);
    await loginPage.clickOnCheckBox();
    await loginPage.verifyRequirePassword(loginPageData.errorMsg[1])
    await loginPage.verifySignInDisable(); 
    await loginPage.enterUserName(userName);
    await loginPage.enterPassword(password);
    await loginPage.clickOnSignIn();
    await loginPage.verifyInvalidCredentials(loginPageData.errorMsg[2]);
})