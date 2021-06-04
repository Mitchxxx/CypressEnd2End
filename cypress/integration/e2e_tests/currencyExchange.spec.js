/// <reference types = "Cypress" />
// End 2 End Currency Exchange
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

    it('Should fill the Conversion form', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Purchase Foreign Currency').click()
        cy.get('h2').should('be.visible').and('contain', 'Purchase foreign currency cash')

        cy.get('#pc_currency').select('GBP')
        cy.get('#pc_amount').type('1000')
        cy.get('#pc_inDollars_true').click()
        cy.get('#pc_calculate_costs').click()
    })

    it('Should get the Exchanged Amount', () => {
        cy.get('#pc_conversion_amount').should('contain', '590.25 pound (GBP) = 1000.00 U.S. dollar (USD)')
    })

})