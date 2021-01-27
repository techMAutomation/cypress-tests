/// <reference types="Cypress" />

const lp = require('../pageobjects/LoginPage');
//import LoginPage from '../pageobjects/LoginPage';

describe('Login Tests', function() {

    it ('Login Test', function() {

        // const lp = new LoginPage()
    
        lp.openBrowser();
        lp.enterUsername('admin@yourstore.com');
        lp.enterPassword('admin');
        lp.clickSubmit();
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
    });
})