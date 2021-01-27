/// <reference types="Cypress" />

describe('Handling Tables and Navigation', function() {

    it('Navigation Test', function() {
        cy.visit('https://demo.nopcommerce.com/');
        cy.title().should('eq', 'nopCommerce demo store'); // Home page
        
        // Link contains text
        cy.get('.ico-register').contains('Reg').click();
        cy.title().should('eq', 'nopCommerce demo store. Register'); // Reg page

        cy.go('back');  // go back
        cy.title().should('eq', 'nopCommerce demo store'); // Home page

        cy.go('forward'); // forward
        cy.title().should('eq', 'nopCommerce demo store. Register'); // Reg page

        cy.go(-1);  // go back  =  cy.go('back')
        cy.go(1);   // forward = cy.go('forward)

        cy.reload();
    });

    it('Handling Tables', function() {

        cy.visit('https://testautomationpractice.blogspot.com/');

        // check value present anywhere in the table
        cy.get('table[name=BookTable]').contains('td', 'Learn Selenium').should('be.visible');

        // Check value present in specific row & column
        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible');

        // Verify the book name 'Master In Java' whose author is Amod
        cy.get('table[name=BookTable] > tbody > tr td:nth-child(2)').each(($e, index, $lsit)) => {

            const text = $e.text()
            if (text.includes("Amod")) {
                cy.get('table[name=BookTable] > tbody > tr td:nth-child(1)').eq(index)
                                .then(function(bname) {
                                    const bookName = bname.text();
                                    expect(bookName).to.equal("Master In Java");
                                });
            }
        }
    });


})
