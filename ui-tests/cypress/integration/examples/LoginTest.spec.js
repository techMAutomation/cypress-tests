/// <reference types="Cypress" />

const loginPage = require('../pageobjects/LoginPage');

describe('Login Tests', function() {

    before(function() {
        cy.fixture('loginFixture.json').as('loginJson');
        loginPage.open_browser();
    });

    it('Invalid Login Tests', function() {
        const loginJsonFile = this.loginJson;
        cy.get(loginJsonFile.loginData).each(function(loginDataObject) {
            cy.log(' Email :: ' + loginDataObject.email + ' , Password :: ' + loginDataObject.password);
            loginPage.enter_login_details(loginDataObject.email, loginDataObject.password);
            loginPage.click_login_submit_button();

            if (loginDataObject.email != ' ' && loginDataObject.password === ' ') {
                loginPage.verify_email_validation_msg().then(element => {
                    cy.log(" Email validation :: " + element.text());
                    expect(element.text()).contain("Wrong email");
                });
            } else if (loginDataObject.email === ' ' && loginDataObject.password != ' ') {
                loginPage.verify_email_validation_msg().then(element => {
                    cy.log(" Email validation :: " + element.text());
                    expect(element.text()).contain("Please enter your email");
                });
            } else {
                loginPage.verify_login_validation_msg().then(element => {
                    cy.log(" Login validation :: " + element.text());
                    expect(element.text()).contain("Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect");
                });
            }
        });
    });

    it('Login/Logout Test', async() => {
        loginPage.login_to_application();
        loginPage.click_logout_link();
        expect(cy.get(loginPage.username_textfield).should('be.visible'));
    });
})