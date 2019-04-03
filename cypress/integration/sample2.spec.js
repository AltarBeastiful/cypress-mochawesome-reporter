/// <reference types="Cypress" />

context('Second sample test', () => {
  
    it('A passing test', () => {
        cy.document().title().should('not.contain', 'unicorns')
    })

  })
  