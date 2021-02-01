/// <reference types="Cypress"/>

var BasePage = require('../pageobjects/BasePage');

class LoginPage extends BasePage {

    username_textfield = 'input[name=Email]';
    password_textfield = 'input[name=Password]';
    login_submit_button = 'input[type=submit]';
    email_validation_msg = '#Email-error';
    login_validation_msg = 'div.message-error.validation-summary-errors';
    logout_link = 'a[href="/logout"]';

    open_browser() {
        cy.visit('https://admin-demo.nopcommerce.com/login');
    }

    enter_login_details(uname, password) {
        this.enterValueInTextField(this.username_textfield, uname);
        this.enterValueInTextField(this.password_textfield, password);
    }

    click_login_submit_button() {
        this.clickOnElement(this.login_submit_button);
    }

    login_to_application() {
        this.enter_login_details('admin@yourstore.com','admin')
        this.click_login_submit_button();
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration');
    }

    verify_email_validation_msg() {
        return cy.get(this.email_validation_msg);
    }

    verify_login_validation_msg() {
        return cy.get(this.login_validation_msg);
    }

    click_logout_link() {
        cy.get(this.logout_link).contains('Logout').click();
    }
 }
module.exports = new LoginPage();