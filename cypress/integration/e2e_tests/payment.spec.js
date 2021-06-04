/// <reference types = "Cypress" />
// End 2 End Paymane scenario
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

    it('Should send a new Payment (fake)', () => {

        cy.get('#pay_bills_tab').click()
        cy.contains('Pay Saved Payee').click()
        cy.get('#sp_payee').select('wellsfargo')
        cy.get('#sp_account').select('Credit Card')
        cy.get('#sp_amount').type('100')
        cy.get('#sp_date').type('2020-5-09 {enter}')
        cy.get('#sp_description').type('Just a Description')
        cy.get('.btn-primary').click()
        
    })

    it('Should show success message', () => {
        cy.get('.alert-success').should('contain', 'The payment was successfully submitted.')
    })

})
        