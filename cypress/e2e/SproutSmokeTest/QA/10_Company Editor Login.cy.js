///<reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.viewport('macbook-15')
        cy.loginWithLocalstorage()
        cy.loginOnQA('mikez.test002@gmail.com','Mike_1983')
        cy.wait(10000)
      })
    it('1.10 Company Editor login and permissions check',()=>{   
        cy.contains('Summary').should('be.visible')  
        cy.contains('Permissions and roles').should('be.visible')
        cy.contains('Settings').should('be.visible')
        cy.contains('Data room').click()
        cy.wait(5000)
        cy.contains('Access logs').click()
        cy.get('.anticon-close').click()
        cy.contains('New folder').click()
        cy.get('.form-control').type('Cypress')
        cy.get('.dataroom-btnReset')
          .click()
        cy.contains('Cypress').eq('0').click()
        cy.contains('No Data').should('be.visible')
        cy.contains('Data Room').click()
        cy.get('.ant-input')
          .click()
          .wait(1000)
          .type('Cypress')
        cy.contains('Delete').click()
        cy.contains('Yes').click()
        cy.contains('Cypress').should('not.exist')
        cy.contains('New folder').should('be.visible')
        cy.contains('Access logs').should('be.visible')
        cy.wait(2000)
        cy.contains('Documents').should('be.visible')
        cy.get('.glyphicon-user').click()
        cy.contains('Log out').click() 
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})
