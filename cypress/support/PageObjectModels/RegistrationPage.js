

import {Common} from "../common/CommonFunctions.js";
import {Generators} from "../common/Generators.js";

const common = new Common();
const generator = new Generators();



export class RegistrationPage {
    constructor() {
        this.createAccountButton1 = "(//a[contains(string(),'Create an Account')])[1]";
        this.createAccountButton2 = "(//span[contains(string(),'Create an Account')])[1]"
        this.firstnameField = "//input[@id='firstname']";
        this.lastnameField = "//input[@id='lastname']";
        this.emailField = "//input[@id='email_address']";
        this.passwordField = "//input[@id='password']";
        this.passwordConfirmationField = "//input[@id='password-confirmation']";

    }

    navigateToRegistration() {
        common.clickButton(this.createAccountButton1);
        cy.xpath('//span[contains(string(),"Create New Customer Account")]').should("be.visible");
    }

    fillRegistration(user,password){
        common.fillForm(this.firstnameField,user);
        common.fillForm(this.lastnameField,user);
        common.fillForm(this.emailField,user+'@email.com');
        common.fillForm(this.passwordField,password);
        common.fillForm(this.passwordConfirmationField,password);
        common.clickButton(this.createAccountButton2);
    }




}