// type definitions for cypress object "cy"
/// <reference types="Cypress" />

const exampleLoginPage = require('../pageobjects/ExampleLoginPage');

describe('Login Tests', function() {

    beforeEach(function() {
        cy.fixture('example').then(function(data) {
            this.data = data;
        });
        exampleLoginPage.open_demo_url();
    })

    it.only('Login failed test', function() {

        // daazLoginPage.open_daaz_url();
        exampleLoginPage.enter_demo_login_details(this.data.email, "pass");
        exampleLoginPage.submit_login_details();
        exampleLoginPage.get_validation_msg('Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect');
        
        exampleLoginPage.get_validation_msg_new().then(function(element) {
            expect(element.text().includes('Login was unsuccessful. Please correct the errors and try again.')).to.be.true;
        });
    });

    it('Login Passed Test', function() {
        exampleLoginPage.enter_demo_login_details('admin@yourstore.com', 'admin');
        exampleLoginPage.submit_demo_login_details();
        cy.get('a[href="/logout"]').click();
    });

})