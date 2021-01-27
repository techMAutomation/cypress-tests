/// <reference types="Cypress" />

describe('My First Test', function() 
{
    it('Verify Page title', function() {
        cy.visit('https://demo.nopcommerce.com/');
        cy.url().should('include', 'demo');
        cy.title().should('eq', 'nopCommerce demo store');

        // search for the product
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch");
        // Click on search button
        cy.get("[type='submit']").click();
        cy.log('Clicked on search button');

       // <input type="button" value="Add to cart" class="button-2 product-box-add-to-cart-button" onclick="return Aj,!1"/>
       cy.get(".product-box-add-to-cart-button[value='Add to cart']").click();
       // Change quantity
       cy.wait(5000);
       cy.get("#product_enteredQuantity_4").clear().type("2");
       cy.get("#add-to-cart-button-4").click();

       cy.wait(5000); // 5s
       cy.get("#topcartlink > a > span.cart-label").click();
       cy.wait(5000);

       // <span class="product-unit-price">$1,800.00</span>
       cy.get(".product-unit-price").contains('$1,800.00');
    });
})