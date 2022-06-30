///<reference types="cypress"/>
describe('My Demo Suite', function(){

    before(function(){
        cy.log('-------this is set up-------')
    })

    

    after(function(){
        cy.log('-------this is teardown------')
    })

    beforeEach(function(){
        cy.log('-------this is before each test------')
    })

    afterEach(function(){
        cy.log('-------this is after each test------')
    })

    it('RadiobtnPractice', function(){

        cy.visit('https://demo.guru99.com/test/newtours/reservation.php')
        cy.get('input[value="roundtrip"]').should('be.visible').should('be.checked')
        cy.get('input[value="oneway"]').should('be.visible').should('not.be.checked').click()


    })

    it('CheckboxPractice', function(){

        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').uncheck().should('not.be.checked').and('have.value','Movies')
        cy.get('#checkbox3').uncheck().should('not.be.checked').and('have.value','Hockey')

        cy.get('input[type=checkbox]').check(['Cricket','Hockey'])

    })



})