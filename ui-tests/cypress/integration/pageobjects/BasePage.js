/// <reference types="Cypress"/>

export default class BasePage {

    enterValueInTextField(locator, text) {
        console.log(" locator :: " + locator);
        const element = cy.get(locator).clear();
        element.type(text);
        return this;
    }

    clickOnElement(locator) {
        cy.get(locator).click({timeout: 5000});
    }
}