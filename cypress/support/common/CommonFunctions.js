export class Common {
    clickButton(button, timeout = 10000) { 
      cy.xpath(button, { timeout }).should('be.visible').click();
    }
  

    clickButtonForce(button) { 
      cy.xpath(button).click({force:true});
    }

    fillForm(path, text, timeout = 10000) { 
      cy.xpath(path, { timeout }).type(text);
    }
  }
  