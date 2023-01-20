///<reference types="cypress"/>

describe('SproutSmokeTest_QA',()=>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.viewport('macbook-15')
        cy.loginWithLocalstorage()
        cy.loginOnQA('mikez.test001@gmail.com','Mike_1983')
        cy.wait(10000)
      })
    it('1.9 Data Room user login and permissions check',()=>{   
        cy.url().should('contain','home/datarooms')
        cy.contains('Data Room').should('be.visible')
        cy.contains('Please get in touch with the company admin to grant access.')
        cy.wait(5000)
        cy.contains('Summary').should('not.exist')  
        cy.contains('Permissions and roles').should('not.exist')
        cy.contains('Account users').should('not.exist')
      })
})
