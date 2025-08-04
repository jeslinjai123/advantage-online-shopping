import { LoginPageModel } from "./models/login_page_model";
import { HomePageModel } from "./models/home_page_model";

export interface TestDataConfiguration {
    login: LoginPageModel;
    homePage: HomePageModel;
}