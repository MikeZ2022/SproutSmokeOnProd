///<reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.viewport('macbook-15')
        cy.loginOnQA('mikez.test003@gmail.com','Mike_1983')
      })
    it('1.11 Company Viewer login and permissions check',()=>{     
        cy.contains('Summary').should('be.visible')  
        cy.contains('Permissions and roles').should('not.exist')
        cy.contains('Account users').should('not.exist')
        cy.contains('Cap Table').should('be.visible')  
        cy.contains('Fundraising').should('be.visible')  
        cy.contains('Securities').should('be.visible')  
        cy.wait(2000)
        cy.contains('Data room').click()
        cy.wait(5000)
        cy.contains('Share Class Documents').should('be.exist')
        cy.contains('Bylaws').should('be.visible')
        cy.contains('Board').should('be.visible').click()
        cy.get('.data-room-bread-crumb-operation')
          .eq('0')
          .trigger('mouseover')
        cy.wait(2000)
        cy.contains('Open').should('be.visible')
        cy.get('.glyphicon-user').click()
        cy.contains('Log out').click() 
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})
