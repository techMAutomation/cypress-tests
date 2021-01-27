/// <reference types="Cypress" />

describe('Fixture test', function() {

    before(function() {
        cy.fixture('example').then(function(data) {
            this.data = data;
        });
    })

    it('Test', function() {
        cy.visit('https://admin-demo.nopcommerce.com/login');
        cy.get('input[name=Email]').clear().type(this.data.email);
        cy.get('#Email').should('have.value', this.data.email);

        cy.get('input[name=Password]').type(this.data.password);
        cy.get('input[type=submit]').click({timeout: 1000});
    });

    // For Loop for accessing ProductName array from feature file ...
    // https://www.toolsqa.com/cypress/page-object-pattern-in-cypress/
    this.data.productName.forEach(function(element) {
        cy.selectProduct(element[0], element[1], element[2]);
    });

})