///<reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.viewport('macbook-15')
        cy.loginWithLocalstorage()
        cy.loginOnQA('mikez.test005@gmail.com','Mike_1983')
        cy.wait(10000)
      })
    it('1.13 Share Class Admin login and permissions check',()=>{   
        cy.contains('Summary').should('be.visible')  
        cy.contains('Permissions and roles').should('not.exist')
        cy.contains('Account users').should('not.exist')
        cy.contains('Cap Table').should('be.visible')
        cy.contains('Securities').should('be.visible')
        cy.contains('Data room').click()
        cy.contains('Please get in touch with the company admin to grant access.')
        cy.get('.glyphicon-user').click()
        cy.contains('Log out').click() 
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})
