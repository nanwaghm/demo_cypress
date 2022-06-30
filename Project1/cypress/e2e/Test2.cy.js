///<reference types="cypress"/>
describe('My Demo Suite', function(){

it('Googlt launch positive', function(){

    cy.visit('https://www.google.com')
    cy.title().should('eq','Google')
    //cy.get('.gLFyf').type('Automation')
    //cy.get('.QCzoEc > svg')

    
    })

    it('Googlt launch negative', function(){

        cy.visit('https://www.google.com')
        cy.title().should('eq','Gohhogle')
        //cy.get('.gLFyf').type('Automation')
        //cy.get('.QCzoEc > svg')
    
        
        })

})