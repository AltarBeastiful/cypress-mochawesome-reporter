/// <reference types="Cypress" />

context('Sample test', () => {

    it('Passed', () => {
        cy.document().title().should('not.contain', 'unicorns')
    })

    it('Failing', () => {
        cy.document().title().should('contain', 'unicorns')
    })

  })
