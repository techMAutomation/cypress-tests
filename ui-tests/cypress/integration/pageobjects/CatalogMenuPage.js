/// <reference types="Cypress" />

var BasePage = require('../pageobjects/BasePage');

const category_name = `Name${Math.floor(Math.random() * 99)}`;
const category_id = 'Computers';

class CatalogMenuPage extends BasePage {

    categories_submenu = 'a[href="/Admin/Category/List"]';
    
    category_add_new_button = 'a[href="/Admin/Category/Create"]';
    category_delete_button = '#delete-selected';
    category_name_textfield = '#Name';
    category_description_iframe = '#Description_ifr';
    category_dropdown = '#ParentCategoryId';
    category_displayorder_textfield = '#DisplayOrder';
    category_save_button = 'button[name="save"]';
    category_success_msg = 'div.alert.alert-success.alert-dismissable';

    category_search_textfield = '#SearchCategoryName';
    category_search_button = '#search-categories';
    category_table_1row_checkbox = 'input[type="checkbox"]';
    category_table_1row_name = '#categories-grid > tbody > tr > td:nth-child(2)';
    category_table_empty_msg = 'td.dataTables_empty';

    alert_window = '#delete-selected-action-confirmation-title';
    alert_window_yes_button = '#delete-selected-action-confirmation-submit-button';

    click_on_menu(name) {
        switch(name)  {
            case 'catalog': cy.get('span').contains('Catalog').click();
                            break;
            case 'categories': this.clickOnElement(this.categories_submenu);
                            break;
            case 'add new': this.clickOnElement(this.category_add_new_button);
                            break;
            case 'save': this.clickOnElement(this.category_save_button);
                            break;                       
            case 'delete': this.clickOnElement(this.category_delete_button);
                            break;
            default:
                    cy.log(' - No menu name matched - ');
                    break;      
        }
    }

    enter_category_details() {
        this.enterValueInTextField(this.category_name_textfield, category_name);
        
        // Handling IFrame - not working
        // const iframe = cy.get(this.category_description_iframe)
        //                  .should('be.visible')
        //                  .then(cy.wrap);
        // iframe.clear().type('testing'); 

        cy.get(this.category_dropdown).should('be.visible').select(category_id);
       // this.enterValueInTextField(this.category_displayorder_textfield, '5');
       // cy.get('input[name=DisplayOrder]').type('5');
    }

    submit_category_details() {
        this.click_on_menu('save');
    }

    verify_category_created_success_msg() {
        return cy.get(this.category_success_msg);
    }

    search_category_name() {
        this.enterValueInTextField(this.category_search_textfield, category_name);
        this.clickOnElement(this.category_search_button);
    }

    verify_category_name_not_found_msg_in_table() {
        this.search_category_name();
        return cy.get(this.category_table_empty_msg, {timeout: 500});
    }

    verify_category_name_into_table() {
        cy.get(this.category_table_1row_name, {timeout: 2000}).then(eleText => {
            const text = eleText.text();
            cy.log(" Category name from table :: " + text);
            expect(text).contain(category_id + ' >> ' + category_name);
        });
    }

    select_checkbox_from_category_table() {
        cy.contains('td', category_name, {timeout: 2000}).siblings().eq(0).children().eq(0).click(); 
    }

    verify_alert_window_and_click_confirm() {

        // When alert window opens clicks on it
        this.clickOnElement(this.alert_window);
        // Captures message from alert window
        // cy.on('window:alert', (str) => {
        //     cy.log(" alert window text :: " + str.text());
        //     expect(str).to.equal('Are you sure?');
        // });
        // cy.on('window:confirm', (str) => {
        //     expect(str).to.equal('Yes');
        // });
        this.clickOnElement(this.alert_window_yes_button);
    }
}
module.exports = new CatalogMenuPage();