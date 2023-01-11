

///<reference types="cypress"/>

describe('SproutSmokeTest_QA',()=>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.viewport('macbook-13')
        cy.loginWithLocalstorage()
        cy.loginOnQA('mike.z@getsprout.co','Mike_1983')
        cy.wait(10000)
      })
    
      it('1.5 Cap Table Menu items Check',()=>{
        cy.contains('Cap table').trigger('mouseover')
        cy.contains('By share class').click()
        cy.contains('View cap table as of').should('be.exist')
        cy.get('.ant-collapse-header').eq('0').click()
        cy.get('.ant-collapse-item').eq('0').click()
        cy.get('.sprout-menu-logo-wrap').eq('0').click()
        cy.get('.table-total-td-first').should('be.exist')
        cy.get('.ant-menu-submenu-selected > .ant-menu-submenu-title').trigger('mouseover')
        cy.contains('By stakeholder').click()
        cy.get('.stake-holder-content-first').should('be.exist')
        cy.get('.ant-menu-submenu-selected > .ant-menu-submenu-title').trigger('mouseover')
        cy.contains('By voting power').click()
        cy.contains('Rounds').should('be.exist')
        cy.get('.ant-menu-submenu-selected > .ant-menu-submenu-title').trigger('mouseover')
        cy.contains('Rights and preferences').click()
        cy.contains('Share class details').should('be.exist')
        cy.wait(2000)
        cy.get('.glyphicon-user').click()
        cy.contains('Log out').click() 
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})



