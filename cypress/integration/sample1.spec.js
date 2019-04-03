/// <reference types="Cypress" />

context('Sample test', () => {
    const addContext = require('mochawesome/addContext');


Cypress.on('test:after:run', (test, runnable) => {
    if(test.state == 'failed') {

        addContext({ test }, `./screenshots/${runnable.parent.title} -- ${test.title} (failed).png`)
    }
});
  
    it('Passed', () => {
        cy.document().title().should('not.contain', 'unicorns')
    })
  
    it('Failing', () => {
        cy.document().title().should('contain', 'unicorns')
    })

  })
  