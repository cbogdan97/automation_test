import { RegistrationPage } from "../support/PageObjectModels/RegistrationPage.js";
import { LoginPage } from "../support/PageObjectModels/LoginPage.js";
import { Generators } from "../support/common/Generators.js";

const registrationPage = new RegistrationPage();
const loginPage = new LoginPage()
const generator = new Generators()

var user = generator.generateRandomText(5);
var password = generator.generatePassword(10);

describe('Homepage suite', () => {
  it('Visit homepage', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.xpath('//a[@class="logo"]').should("be.visible");
  })

  it('Create account', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    registrationPage.navigateToRegistration();
    registrationPage.fillRegistration(user,password);
  })

  it('Login account and logout', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    loginPage.navigateToLogin();
    loginPage.fillLogin(user,password);
    loginPage.logout();
  })

})
