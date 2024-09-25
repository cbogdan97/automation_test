import {Common} from "../common/CommonFunctions.js";

const common = new Common();

export class LoginPage {
    constructor() {
        this.signinButton1 = "(//a[contains(string(),'Sign In')])[1]";
        this.signinButton2 = "(//span[contains(string(),'Sign In')])[1]";
        this.emailField = "//input[@id='email']";
        this.passwordField = "//input[@id='pass']";
        this.logoutButton1 = "(//button[@class='action switch'])[1]";
        this.logoutButton2 = "(//a[contains(string(),'Sign Out')])[1]";
        this.invalidCredentials = "(//div[contains(string(),'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')])[2]"
    }

    navigateToLogin() {
        common.clickButton(this.signinButton1);
        cy.xpath('//span[contains(string(),"Customer Login")]').should("be.visible");
    }

    fillLogin(user,password){
        common.fillForm(this.emailField,user+'@email.com');
        common.fillForm(this.passwordField,password);
        common.clickButton(this.signinButton2);
    }

    logout(){
        cy.xpath("(//span[contains(string(),'Welcome,')])[1]").should('be.visible')
        common.clickButton(this.logoutButton1);
        cy.wait(2)
        common.clickButton(this.logoutButton2);
        cy.xpath("//span[contains(string(),'You are signed out')]").should('be.visible');
    }





}