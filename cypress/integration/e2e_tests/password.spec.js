/// <reference types = "Cypress" />

describe('Password Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('Should Click on the SignIn button', () => {
        cy.get('.signin').click()
    })
    it('Should Click on forgotten Password', () => {
        cy.get('.offset3 > a').click()
    })
    it('Should fill email form', () => {
        cy.get('#user_email').type("test.email@email.com")
    })
    it('Should submit the form', () => {
        // cy.contains can be used to find elements with the test value
        cy.contains('Send Password').click()
    })
})