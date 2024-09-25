
import { Common } from "../common/CommonFunctions.js";
const common = new Common();

export class Product {
    constructor() {
        this.loadingIcon = "//span[@class='counter qty _block-content-loading']";
        this.counterNumber = "//span[@class='counter-number']";
    }
    selectProduct(name, size, color) {
        var submitButton = `//li[.//a[contains(text(),'${name}')]]//div[@class='product details product-item-details']//span[text()='Add to Cart']`;
        var selectSize = `//div[@class='product details product-item-details' and .//a[contains(string(),'${name}')]]//div[@aria-label='${size}']`;
        var selectColor = `//div[@class='product details product-item-details' and .//a[contains(string(),'${name}')]]//div[@aria-label='${color}']`

        common.clickButton(selectSize);
        common.clickButton(selectColor);
        cy.wait(1500);
        common.clickButtonForce(submitButton);
    }

    verifyCart(count) {
        cy.wait(2500);
        cy.xpath(this.loadingIcon).should('not.exist');
        cy.xpath(this.counterNumber).invoke('text').then(number => {
            expect(parseInt(number)).to.equal(count);
        })
    }


}