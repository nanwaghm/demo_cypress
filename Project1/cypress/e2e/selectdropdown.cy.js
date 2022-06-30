 ///<reference types="cypress"/>
describe('My Demo Suite', function(){

    it('Dropdown Practice', function(){

        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#Skills').select('Android').should('have.value','Android')

        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Bulgarian').click()
       cy.get('.ui-corner-all').contains('Dutch').click()

        cy.get('.select2-selection--single').click({force: true})
        cy.get('.select2-search__field').type('india')
        cy.get('.select2-results__option--highlighted').click()
        

    })

    

})