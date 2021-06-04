// <reference types = "Cypress" />
// End 2 End Find Transaction
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

    it('Should filter transactions', () => {
        cy.get('#account_activity_tab').click()
        cy.contains('Find Transactions').click()

      //  cy.get('#aa_description').type('Description')
        cy.get('#aa_description').type('Description')
        cy.get('#aa_fromAmount').type('200')
        cy.get('#aa_toAmount').type('1000')
        cy.get('.btn').click()
    })

    it('Should Display the results', () => {
        cy.get('#filtered_transactions_for_account').should('be.visible')
        cy.get('tbody > tr').its('length').should('be.gt', 0)
    })

})