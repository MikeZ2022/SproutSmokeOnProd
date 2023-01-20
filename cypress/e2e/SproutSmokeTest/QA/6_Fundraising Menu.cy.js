
///<reference types="cypress"/>

describe('SproutSmokeTest_QA',()=>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.viewport('macbook-15')
        cy.loginWithLocalstorage()
        cy.loginOnQA('mike.z@getsprout.co','Mike_1983')
        cy.wait(10000)
      })

      it('1.6 Fundraising Menu items check',()=>{
        cy.get(':nth-child(6) > .ant-menu-submenu-title').trigger('mouseover')
        cy.contains('Financing history').click()
        cy.contains('Funding rounds').should('be.exist')
        cy.contains('Round').should('be.exist')
        cy.contains('Cash raised').eq('0').click()
        cy.contains('Security').should('be.exist')
        cy.contains('Scenario modeling').should('be.exist')
        cy.contains('Wire instructions').should('be.exist')
        cy.wait(2000)
        cy.get('.sprout-header-task-wrap > .sprout-header-avatar').click()
        cy.contains('Log out').click() 
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})