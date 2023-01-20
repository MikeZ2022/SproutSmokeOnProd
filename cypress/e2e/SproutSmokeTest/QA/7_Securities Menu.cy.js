
    /// <reference types="cypress"/>

      describe('SproutSmokeTest_QA',()=>{
        beforeEach(() => {
            // Cypress starts out with a blank slate for each test
            // so we must tell it to visit our website with the `cy.visit()` command.
            // Since we want to visit the same URL at the start of all our tests,
            // we include it in our beforeEach function so that it runs before each test
            cy.viewport('macbook-16')
            cy.loginWithLocalstorage()
            cy.loginOnQA('mike.z@getsprout.co','Mike_1983')
            cy.wait(10000)
          })
    
        it('1.7 Securities Menu items check',()=>{
        cy.contains('Securities').trigger('mouseover')
        cy.contains('Securities settings').click()
       
        cy.contains('Securities').trigger('mouseover')
        cy.contains('Share option awards').click()
        cy.contains('Manage equity plans').should('be.exist')
        cy.contains('Securities').trigger('mouseover')
        cy.contains('Warrants').click()
        cy.contains('Manage warrant blocks').should('be.exist')
        cy.contains('Securities').trigger('mouseover')
        cy.contains('Convertibles').click()
        cy.contains('Manage convertible terms').should('be.exist')
        cy.contains('Securities').trigger('mouseover')
        cy.contains('Shares').click()
        cy.contains('Manage share classes').should('be.exist')
        cy.contains('Manage vesting').should('be.exist')
        cy.contains('Draft shares').should('be.exist')
})
})