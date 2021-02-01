/// <reference types="Cypress" />

var BasePage = require('../pageobjects/BasePage');

const category_name = `Name${Math.floor(Math.random() * 99)}`;
const category_id = 'Computers';

class CatalogMenuPage extends BasePage {

    categories_submenu = 'a[href="/Admin/Category/List"]';
    
    category_add_new_button = 'a[href="/Admin/Category/Create"]';
    category_delete_button = '#delete-selected';
    category_name_textfield = '#Name';
    category_dropdown = '#ParentCategoryId';
    category_displayorder_textfield = '#DisplayOrder';
    category_save_button = 'button[name="save"]';
    category_success_msg = 'div.alert.alert-success.alert-dismissable';

    category_search_textfield = '#SearchCategoryName';
    category_search_button = '#search-categories';
    category_table_1row_checkbox = '#categories-grid > tbody > tr > td:nth-child(1)';
    category_table_1row_name = '#categories-grid > tbody > tr > td:nth-child(2)';

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
                    cy.log(' - No name matched - ');
                    break;      
        }
    }

    enter_category_details() {
        this.enterValueInTextField(this.category_name_textfield, category_name);
        cy.get(this.category_dropdown).should('be.visible').select(category_id);
        
        // Entering displayorder value is not working
        //this.enterValueInTextField(this.category_displayorder_textfield, '5');
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

    verify_category_name_into_table() {
        cy.get(this.category_table_1row_name, { timeout: 2000 }).then(eleText => {
            const text = eleText.text();
            cy.log(" Category name from table :: " + text);
            //cy.wrap(eleText).should('contain', 'category_id + ' >> ' + category_name');
            expect(text).contain(category_id + ' >> ' + category_name);
        });
    }

    select_categoryname_checkbox_from_table() {
        cy.get(this.category_table_1row_checkbox).should('be.visible').then(ele => {
            ele.check();
        });
    }
}
module.exports = new CatalogMenuPage();