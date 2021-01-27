/// <reference types="Cypress" />

class LoginPage {

    // Trying this instead:
    // function name(params) {
        
    // }
    // You shouldn't use the FUNCTION keyword in a Typescript class definition.

    openBrowser() {
        cy.visit('https://admin-demo.nopcommerce.com/login');
    }

    enterUsername(value) {
        const username = cy.get('input[name=Email]');
        username.clear();
        username.type(value);
        return this
    }

    enterPassword(value) {
        cy.get('input[name=Password]').clear().type(value);
    }

    clickSubmit() {
        const button = cy.get('input[type=submit]');
        button.click();
    }

 }
// export default LoginPage;
module.exports = new LoginPage();