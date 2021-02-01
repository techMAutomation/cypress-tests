/// <reference types="Cypress" />

const registrationPage = require('../pageobjects/RegistrationPage')

describe('Registration Tests', function() {

    it.only('User Registration Test', function() {
        cy.visit('http://demo.automationtesting.in/Register.html');
        registrationPage.enter_registration_details();
        registrationPage.choose_gender_radio_button();
        registrationPage.select_hobbies_checkboxes();
        registrationPage.choose_languages_listbox();
        registrationPage.choose_skills_from_dropdown();
        registrationPage.choose_country_from_dropdown();
        registrationPage.enter_country_in_combobox();
        registrationPage.enter_dob_values();
        registrationPage.enter_password_details();
        //registrationPage.submit_registration_details();
        registrationPage.click_refresh_button();
    });

})