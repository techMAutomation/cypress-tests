/// <reference types="Cypress" />

const loginPage = require('../pageobjects/LoginPage');
const catalogMenuPage = require('../pageobjects/CatalogMenuPage');

describe('Category Tests', function() {

    it('Add new category and Delete it from the category table', async() => {
        loginPage.open_browser();
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
        catalogMenuPage.select_checkbox_from_category_table();
        catalogMenuPage.click_on_menu('delete');
        catalogMenuPage.verify_alert_window_and_click_confirm();
        catalogMenuPage.verify_category_name_not_found_msg_in_table().then(table_msg => {
            cy.log(" Category name not found msg :: " + table_msg.text());
            expect(table_msg.text()).contain("No data available in table");
        });
        loginPage.click_logout_link();
    });
})
