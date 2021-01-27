/// <reference types="Cypress" />

describe('My Tour Test', function() 
{
    it('Verify Username', function() {
        cy.visit('http://newtours.demoaut.com/');
        cy.url().should('include', 'newtours');

        cy.get('input[name=username]').should('be.visible').should('be.enabled').type('mercury');
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type('mercury');
        cy.get('input[name=login]').should('be.visible').click();

        cy.title().should('eq', 'Find a Flight: Mercury Tours:');

        // Radio buttons
        cy.get('input[value=roundtrip]').should('be.visible').should('be.checked');
        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click();
        
        cy.get('[name=findFlights').should('be.visible').click();
        cy.title().should('eq','Select a Flight: Mercury Tours');
    });
})
