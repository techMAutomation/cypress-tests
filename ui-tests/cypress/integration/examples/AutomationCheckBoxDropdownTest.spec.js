/// <reference types="Cypress" />

describe('Checkbox & Dropdown Tests', function() {

    it('Checkbox test', function() {
        cy.visit('http://demo.automationtesting.in/Register.html');

        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket');
        cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies');

        cy.get('#checkbox1').uncheck().should('not.be.checked');
        cy.get('#checkbox2').uncheck().should('not.be.checked');

        // Check multiple checkboxes at a time 
        cy.get('input[type=checkbox]').check(['Cricket', 'Movies']);
    });

    it('Dropdown Test', function() {

        // select id='skills' - verify android value is there in that dropdown
        cy.get('#skills').select('Android').should('have.value', 'Android');
    });

    it ('Dropdown test', function() {

        cy.get('#msdd').click();  // Dropdown Element
        // dropdown list contains <li> tags and each tag has <a> tag 
        // Each <a> tag contains same classname class="ui-corner-all"
        cy.get('.ui-corner-all').contains('English').click();
        cy.get('ui-corner-all').contains('Japanese').click(); 
    });

    it('Combo box', function() {

        // click in Combobox then enter a value 'IND', then that value shows below
        // then click enter to select that value
        cy.get('[role=combobox]').click({force: true}); // force -> forceful click on this element - if the previous dropdwn is opened incase
        cy.get('.select2-search__field').type('Ind');
        cy.get('.select2-search__field').type('{enter}');
    });

    it('Alerts ', function() {

        cy.visit('https://mail.rediff.com/cgi-bin/login.cgi');
        cy.get('input[type=submit]').should(be.visible).click() // Clicks on Go buttoon on the page so that alert window will go away
        
        // Captures message from alert window
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please enter a valid user name');
        });

        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('#HTML9 > div.widget-content > button').click();
        cy.on('window:confirm',(str) => {
            expect(str).to.equal('Press a button!');
        });
    });
})