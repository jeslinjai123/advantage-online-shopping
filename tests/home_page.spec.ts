import {test} from '@playwright/test';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import LoginPage  from '../pages/login_page';
import HomePage from '../pages/home_page';
import {HomePageModel} from '../config/data_config/models/home_page_model';

// Load YAML data
const fileContents = fs.readFileSync('config/data_config/data/home_page_data.yml', 'utf8');
const homePageData: HomePageModel = yaml.load(fileContents) as HomePageModel;

test('Verify whether user able to add a product to cart and checkout successfully ',async({page})=>{
    let loginPage = new LoginPage(page);
    let homePage = new HomePage(page);
    await loginPage.openPage();
    await loginPage.goTologinPage();
    await loginPage.enterUserName(homePageData.userName);
    await loginPage.enterPassword(homePageData.password);
    await loginPage.clickOnSignIn();
    await homePage.clickOnProduct();
    await homePage.addProductToCart();
    await homePage.clickOnCart();
    await homePage.clickOnCheckOut();
    await homePage.clickOnNext();
    await homePage.selectPaymentMethod();
    await homePage.enterUserName(homePageData.userName);
    await homePage.enterPassword(homePageData.password);
    await homePage.clickOnPay();
    await homePage.verifyOrderPayment(homePageData.orderPaymentMessage);
    await loginPage.clickOnAccount();
    await loginPage.clickOnSignOut();
});

test('Verify whether user able to add a product to cart and checkout successfully when user doesnot logged in',async({page})=>{
    let loginPage = new LoginPage(page);
    let homePage = new HomePage(page);
    await loginPage.openPage();
    await homePage.clickOnProduct();
    await homePage.addProductToCart();
    await homePage.clickOnCart(); 
    await homePage.clickOnCheckOut();
    await homePage.enterUserNameInOrderPayment(homePageData.userName);
    await homePage.enterPasswordInOrderPayment(homePageData.password);
    await homePage.clickOnLogin();
    await homePage.clickOnNext();
    await homePage.enterUserName(homePageData.userName);
    await homePage.enterPassword(homePageData.password);
    await homePage.clickOnPay();
    await homePage.verifyOrderPayment(homePageData.orderPaymentMessage);
    await loginPage.clickOnAccount();
    await loginPage.clickOnSignOut();
})