
before(function(){
    cy.log('-------fixtures------')
    cy.fixture('example').then(function(data){
        this.data=data
    })

    cy.fixture('login').then(function(data1){
        this.data1=data1
    })
})


it('fixturesPractice', function(fixtures){

    cy.visit('https://demo.guru99.com/test/newtours/')
    cy.get('input[name="userName"]').type(this.data1.name)
    cy.get('input[name="password"]').type(this.data1.password)
    cy.get('div > input').click()
    cy.get('h3').contains('Login Successfully')
    expect('h3').to.exist


})