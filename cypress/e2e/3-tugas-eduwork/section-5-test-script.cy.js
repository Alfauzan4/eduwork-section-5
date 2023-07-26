/// <reference types="cypress" />

describe('My First Test', () => {
    it('Visits the Kitchen Sink',() => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '.io')

        // get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
        .type('alfauzan@gmail.com')
        .should('have.value', 'alfauzan@gmail.com')
    })
}) 
