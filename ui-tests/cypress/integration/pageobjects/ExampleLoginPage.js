/// <reference types="Cypress" />

class ExampleLoginPage {

    open_demo_url() {
        cy.visit('https://admin-demo.nopcommerce.com/login');
        console.log(' Url :: ' + cy.url);
        cy.url().should('include', 'admin-demo');
    }

    enter_demo_login_details(username, pwd) {
        const uname = cy.get('input[name=Email]');
        uname.should('be.visible').should('be.enabled').click();
        uname.clear();
        uname.type(username);
        cy.log('Entered username :: ' + username);

        cy.get('input[name=Password]').should('be.visible')
                                .click().clear().type(pwd);
        cy.log('Entered password :: ' + pwd);
    }

    submit_demo_login_details() {
        const button = cy.get('input[type=submit]');
        button.click();
        cy.log('Clicked on Submit button');
    }

    get_validation_msg(msg) {
        cy.get('div.message-error.validation-summary-errors').then(function(element) {
            const eleText =  element.text();
            cy.log(' Validation Message :: ' + eleText);
            cy.wrap(eleText).should('contain', msg);
        });
        // (or)
        // cy.get('div.message-error.validation-summary-errors').then($ele => {
        //     const eleText =  $ele.text();
        //     cy.log(' Message :: ' + eleText);
        //     cy.wrap(eleText).should('contain', msg);
        // });
    }

    get_validation_msg_new() {
        return cy.get('div.message-error.validation-summary-errors');
    }
}
module.exports = new ExampleLoginPage();