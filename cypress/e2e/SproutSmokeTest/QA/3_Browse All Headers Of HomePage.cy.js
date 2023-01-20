
///<reference types="cypress"/>

describe('SproutSmokeTest_QA',()=>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.viewport('macbook-13')
        cy.loginWithLocalstorage()
        cy.visit('https://qa.getsprout.co/')
      })
    
    it('1.3 User open all header items on Homepage',()=>{
        cy.get('#menu-item-105').trigger('mouseover')
        cy.contains('Features').should('be.visible')
        cy.wait(2000)
        cy.contains('Pricing').should('be.visible')
        cy.get('#menu-item-115').trigger('mouseover')
        cy.wait(2000)
        cy.get('#menu-item-442').trigger('mouseover')
        cy.contains('Insights').should('be.visible')
        cy.contains('FAQ').should('be.visible')
        cy.wait(2000)
        cy.get('#menu-item-442').trigger('mousemove')
        cy.get('.is-style-hollow').contains('Learn more').click({force: true})
        cy.contains('A Trusted Stakeholder Management Solution for Shares, ESOP and Everything in Between.').should('exist')
        cy.url().should('contains','features')
      })
})
