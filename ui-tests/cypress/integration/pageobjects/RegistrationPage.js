/// <reference types="Cypress" />

const BasePage = require('./BasePage');

class RegistrationPage extends BasePage {

    firstname = 'input[ng-model="FirstName"]';
    lastname = 'input[ng-model="LastName"]';
    address = 'textarea[ng-model="Adress"]';
    email = 'input[ng-model="EmailAdress"]';
    phone = 'input[ng-model="Phone"]';
    male_radio_button = 'input[value="Male"]';
    female_radio_button = 'input[value="Female"]';
    cricket_checkbox = '#checkbox1';
    movies_checkbox = '#checkbox2';
    languages_combobox = '#msdd';
    skills_dropdown = '#Skills';
    country_dropdown = '#countries';
    year_dropdown = '#yearbox';
    month_dropdown = 'select[ng-model="monthbox"]';
    day_dropdown = '#daybox';
    password_textfield = '#firstpassword';
    confirm_password_textfield = '#secondpassword';
    submit_button = '#submitbtn';
    refresh_button = '#Button1';

    enter_registration_details() {
        cy.get(this.firstname).should('be.visible').should('be.enabled').type('test1');
        cy.get(this.lastname).should('be.visible').should('be.enabled').type('lname');
        cy.get(this.address).should('be.visible').type('London, UK');
        cy.get(this.email).should('be.visible').type('abc@ero.eweoror');
        cy.get(this.phone).should('be.visible').type('0000000000');
    }

    choose_gender_radio_button() {
        cy.get(this.male_radio_button).should('be.visible').click().should('be.checked');
    }

    select_hobbies_checkboxes() {
        // Check multiple checkboxes at a time 
        cy.get('input[type=checkbox]').check(['Cricket', 'Movies']);
    }

    choose_languages_listbox() {
        cy.get(this.languages_combobox).click();  
        // dropdown list contains <li> tags and each tag has <a> tag 
        // Each <a> tag contains same classname class="ui-corner-all"
        cy.get('.ui-corner-all').contains('Polish').click();
        cy.get('.ui-corner-all').contains('Russian').click();
    }

    choose_skills_from_dropdown() {
        cy.get(this.skills_dropdown).select('Android', {force: true}).should('have.value', 'Android');
    }

    choose_country_from_dropdown() {
        cy.get(this.country_dropdown).select('Croatia').should('have.value', 'Croatia');
    }

    enter_country_in_combobox() {
        cy.get('[role=combobox]').click({force: true});
        cy.get('.select2-search__field').type('Ind');
        cy.get('.select2-search__field').type('{enter}');
    }

    enter_dob_values() {
        cy.get(this.year_dropdown).should('be.visible').select('1969').should('have.value', '1969');
        cy.get(this.month_dropdown).should('be.visible').select('May').should('have.value', 'May');
        cy.get(this.day_dropdown).should('be.visible').select('10').should('have.value', '10');
    }

    enter_password_details() {
        this.enterValueInTextField(this.password_textfield, 'Password1');
        this.enterValueInTextField(this.confirm_password_textfield, 'Password1');
    }

    submit_registration_details() {
        this.clickOnElement(this.submit_button);
    }

    click_refresh_button() {
        this.clickOnElement(this.refresh_button);
    }
}
module.exports = new RegistrationPage();