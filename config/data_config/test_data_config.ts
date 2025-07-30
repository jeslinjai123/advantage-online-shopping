import { LoginPageModel } from "./models/login_page_model";
import { CreateAccountModel } from "./models/create_account_model";

export interface TestDataConfiguration {
    login: LoginPageModel;
    createaccount: CreateAccountModel;
}