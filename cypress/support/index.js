// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

const addContext = require('mochawesome/addContext');

Cypress.on('test:after:run', (test, runnable) => {
    if(test.state == 'failed') {
        addContext({ test }, `../cypress/screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`)
    }

    // FIXME: Add the video to the 'it' context instead of the whole describe
    addContext({ test },  `../cypress/videos/${Cypress.spec.name}.mp4`);
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
