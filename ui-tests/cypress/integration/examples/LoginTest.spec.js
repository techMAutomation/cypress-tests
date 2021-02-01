/// <reference types="Cypress" />

const loginPage = require('../pageobjects/LoginPage');
const catalogMenuPage = require('../pageobjects/CatalogMenuPage');

describe('Login Tests', function() {

    before(function() {
        cy.fixture('loginFixture.json').as('loginJson');
        loginPage.open_browser();
    });

    it('Invalid Login Tests', function() {
        const loginJsonFile = this.loginJson;
        cy.get(loginJsonFile.loginData).each(function(loginDataObject) {
            cy.log(' email :: ' + loginDataObject.email);
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

    it.only('Add new category and verify new category has been created successfully', async() => {
        loginPage.login_to_application();
        catalogMenuPage.click_on_menu('catalog');
        catalogMenuPage.click_on_menu('categories');
        catalogMenuPage.click_on_menu('add new');
        catalogMenuPage.enter_category_details();
        catalogMenuPage.submit_category_details();
        catalogMenuPage.verify_category_created_success_msg().then(element => {
            cy.log(" Category success msg :: " + element.text());
            expect(element.text()).contain("The new category has been added successfully.");
        });
        catalogMenuPage.search_category_name();
        catalogMenuPage.verify_category_name_into_table();
        // catalogMenuPage.select_categoryname_checkbox_from_table();
        // catalogMenuPage.click_on_menu('delete');
        loginPage.click_logout_link();
    });
})