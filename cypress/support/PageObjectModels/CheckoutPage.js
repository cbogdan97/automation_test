import {Common} from "../common/CommonFunctions.js";

const common = new Common();

export class Checkout {
    constructor() {
        this.cart = "//a[@class='action showcart']";
        this.checkoutButton = "//button[text()='Proceed to Checkout']";
        this.username= "(//input[@name='username'])[2]";
        this.firstname= "//input[@name='firstname']";
        this.lastname = "//input[@name='lastname']";
        this.company = "//input[@name='company']";
        this.street = "//input[@name='street[0]']";
        this.city = "//input[@name='city']";
        this.region = "//select[@name='region_id']";
        this.postcode = "//input[@name='postcode']";
        this.telephone = "//input[@name='telephone']";
        this.shipping = '//*[@id="checkout-shipping-method-load"]/table/tbody/tr[1]/td[1]/input';
        this.nextButton = "//span[text()='Next']";
        this.placeOrder = "//button[@title='Place Order']";
    }

    navigateToCart(){
        common.clickButton(this.cart);
        common.clickButton(this.checkoutButton);
    }

    fillCheckoutForm(user,number){
        cy.wait(3000);
        //common.fillForm(this.username,user+'@email.com');
        common.fillForm(this.firstname,user);
        common.fillForm(this.lastname,user);
        common.fillForm(this.company,user);
        common.fillForm(this.street,user);
        common.fillForm(this.city,user);
        cy.xpath(this.region).select("Oregon");
        common.fillForm(this.postcode,number);
        common.fillForm(this.telephone,number);
        common.clickButtonForce(this.shipping);
        common.clickButton(this.nextButton);
        common.clickButton(this.placeOrder);
        cy.xpath("//span[text()='Thank you for your purchase!']").should('be.visible');
    }


}