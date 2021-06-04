/// <reference types = "Cypress" />

describe('Navbar Test', () => {
    before(function (){
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should display online banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    })

    it('Should display feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('h3').should('be.visible')
        
    })

    it('Should display homepage Content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        
    })
})