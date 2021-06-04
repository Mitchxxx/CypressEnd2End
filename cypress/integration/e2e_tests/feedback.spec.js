/// <reference types = "Cypress" />

describe('Feedback Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/feedback.html')
    })

    it('Should load feedback form', () => {
        cy.url().should('include', 'feedback.html')
        cy.get('h3').should('be.visible')
    })

    it('Should fill feedback form', () => {
        cy.get('form').should('be.visible')

        cy.get('#name').type('name')
        cy.get('#email').type('email@email.com')
        cy.get('#subject').type('Subject')
        cy.get('#comment').type('Comment')


    })

    it('Should submit feedback form', () => {
         cy.get('.btn-signin').click()
        
     })
    
    it('Should Display feedback message', () => {
         cy.get('#feedback-title').contains('Feedback')
        
    })
})