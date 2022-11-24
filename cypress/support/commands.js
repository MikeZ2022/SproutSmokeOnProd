// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('forceVisit', url => {
    cy.window().then(win => {
        return win.open(url, '_self');
      });
    });
  
Cypress.Commands.add('login', (username, password) => {    
        cy.get('#menu-item-1142').click()
        cy.get('.sprout-auth-form').find('[type="text"]').type(username)
        cy.get('.sprout-auth-form').find('[type="password"]').type(password)
        cy.get('.sprout-auth-bth').click()
    });
Cypress.Commands.add('loginOnQA', (username, password) => {  
        cy.visit('https://app-qa.getsprout.co/auth/login')
        cy.get('.sprout-auth-form').find('[type="text"]').type(username)
        cy.get('.sprout-auth-form').find('[type="password"]').type(password)
        cy.get('.sprout-auth-bth').click()
    });   
Cypress.Commands.add('loginWithLocalstorage', () => { 
    var timestamp = (new Date()).valueOf();
    window.localStorage.setItem('GOOGLE_CHECK_EXPIRED', timestamp+43200000)
      }) 
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })