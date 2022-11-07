
    /// <reference types="cypress"/>

     describe('SproutSmokeTest_QA',()=>{
       beforeEach(() => {
           // Cypress starts out with a blank slate for each test
           // so we must tell it to visit our website with the `cy.visit()` command.
           // Since we want to visit the same URL at the start of all our tests,
           // we include it in our beforeEach function so that it runs before each test
           cy.viewport('macbook-15')
           cy.loginOnQA('mike.z@getsprout.co','Mike_1983')
           cy.wait(10000)
         })
   
       it('1.8 Stakeholders Menu items check',()=>{
       cy.contains('Stakeholders').click()
       cy.contains('Stakeholder').should('be.visible')
       cy.contains('All stakeholders').click()
       cy.wait(2000)
       cy.contains('Transactions').click()
       cy.contains('Security').should('be.exist')
       cy.contains('Stakeholder access').click()
       cy.contains('Rounds').should('be.exist')
       cy.wait(2000)
       cy.contains('Board').click()
       cy.contains('Documents').should('be.exist')
       cy.contains('Meetings').should('be.exist')
       cy.contains('Consents').should('be.exist')
       cy.contains('Notifications').should('be.exist')
       cy.get('.glyphicon-user').click()
       cy.contains('Log out').click() 
       cy.clearCookies()
       cy.getCookies().should('be.empty')
})
})