///<reference types="cypress"/>
describe('My Demo Suite1', function(){

    it('LocatorsPractice', function(){
    
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store')
        cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch')
        cy.get('#small-search-box-form > .button-1').click()
        cy.get('.product-box-add-to-cart-button').click()
        cy.get('#product_enteredQuantity_4').clear()
        cy.get('#product_enteredQuantity_4').type('3')
        cy.get('#add-to-cart-button-4').click()
        cy.get('.cart-label').click()
       // cy.get('a.product-name').contains('Apple MacBook Pro 13-inch')
        cy.get('.product-unit-price').contains('$1,800.00')
        cy.wait(2000)
        cy.get('.qty-input').should('eq',3)
    
        
        })

    })