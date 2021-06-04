/// <reference types="Cypress" />

describe('Searchbox Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('Should type into Search box and submit with pressing enter', () => {
        cy.get('#searchTerm').type('Some Text {enter}')
    })

    it('Should show search results page', () => {
        cy.get('h2').contains('Search Results:')
    })
})