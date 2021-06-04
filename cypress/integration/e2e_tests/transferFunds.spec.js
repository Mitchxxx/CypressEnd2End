/// <reference types = "Cypress" />
// Make an End 2 End Bank Tranfer
describe('New Payee Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd
            //   Use the Login Command added to Cypress command.js
            cy.login(username, password)

        })
    })

    it('Should fill Transfer form', () => {
        cy.contains('Transfer Funds').click()
        cy.get('#tf_fromAccountId').select('2')
        cy.get('#tf_toAccountId').select('4')
        cy.get('#tf_amount').type('1000')
        cy.get('#tf_description').type('Just a Description')
        cy.get('.btn-primary').click()
        
    })

    it('Should verify the Correct Data', () => {

        cy.get('h2').should('be.visible').and('contain', 'Transfer Money & Make Payments - Verify')

        cy.get('#tf_fromAccountId').should('have.value', 'Checking')
        cy.get('#tf_toAccountId').should('have.value', 'Loan')
        cy.get('#tf_amount').should('have.value', '1000')
        
    })

})