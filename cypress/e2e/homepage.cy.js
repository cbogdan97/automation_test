import { RegistrationPage } from "../support/PageObjectModels/RegistrationPage.js";
import { LoginPage } from "../support/PageObjectModels/LoginPage.js";
import { Generators } from "../support/common/Generators.js";
import { Product } from "../support/PageObjectModels/ProductPage.js";
import { StorePage } from "../support/PageObjectModels/StorePage.js";

const registrationPage = new RegistrationPage();
const loginPage = new LoginPage();
const generator = new Generators();
const product = new Product();
const store = new StorePage();

var user = generator.generateRandomText(5);
var password = generator.generatePassword(10);

describe('Registration suite', () => {
  beforeEach("Visit page",() =>{
    cy.visit(Cypress.env('baseUrl'))
  })
  it('Visit homepage', () => {
    cy.xpath('//a[@class="logo"]').should("be.visible");
  })

  it('Create account', () => {
    registrationPage.navigateToRegistration();
    registrationPage.fillRegistration(user,password);
  })

})

describe("Login tests",()=>{
  beforeEach("Visit page",() =>{
    cy.visit(Cypress.env('baseUrl'))
  })
  it('Login account and logout - valid account', () => {

    loginPage.navigateToLogin();
    loginPage.fillLogin(user,password);
    loginPage.logout();
  })

  it('Login account- invalid account', () => {

    loginPage.navigateToLogin();
    loginPage.fillLogin('testz','testz');
    cy.xpath(loginPage.invalidCredentials).should('be.visible');
  })
})



describe("Add to cart tests",()=>{
  beforeEach("Visit page",() =>{
    cy.visit(Cypress.env('baseUrl'))
  })
  it('Add one product to cart', () => {

    loginPage.navigateToLogin();
    loginPage.fillLogin(user,password);
    store.navigateToStorePage();
    store.navigateToCategory('Jackets');
    product.selectProduct('Juno','M','Purple');
    // product.selectProduct('Olivia','M','Blue');
    // product.selectProduct('Nadia','M','Yellow');
    product.verifyCart(1);
  })

  it('Add multiple products to cart', () => {

    loginPage.navigateToLogin();
    loginPage.fillLogin(user,password);
    store.navigateToStorePage();
    store.navigateToCategory('Jackets');
    product.selectProduct('Juno','M','Purple');
    product.selectProduct('Olivia','M','Blue');
    product.selectProduct('Nadia','M','Yellow');
    product.verifyCart(4);
  })
})
