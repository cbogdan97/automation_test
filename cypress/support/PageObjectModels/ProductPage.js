
import {Common} from "../common/CommonFunctions.js";
const common = new Common();

let loadingIcon = "//span[@class='counter qty _block-content-loading']";
let counterNumber = "//span[@class='counter-number']";

export class Product {
    selectProduct(name,size,color){
        var submitButton = `//li[.//a[contains(text(),'${name}')]]//div[@class='product details product-item-details']//span[text()='Add to Cart']`;
        var selectSize = `//div[@class='product details product-item-details' and .//a[contains(string(),'${name}')]]//div[@aria-label='${size}']`;
        var selectColor = `//div[@class='product details product-item-details' and .//a[contains(string(),'${name}')]]//div[@aria-label='${color}']`

        common.clickButton(selectSize);
        common.clickButton(selectColor);
        cy.wait(1500);
        common.clickButtonForce(submitButton);
    }

    verifyCart(count){
        cy.xpath(loadingIcon).should('not.exist');
        cy.xpath(counterNumber).invoke('text').then(number=>{
            expect(parseInt(number)).to.equal(count);
        })
    }
}