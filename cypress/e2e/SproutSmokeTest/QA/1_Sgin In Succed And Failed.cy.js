
///<reference types="cypress"/>

describe('SproutSmokeTest_QA',()=>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.viewport('macbook-13')
        cy.loginWithLocalstorage()
        cy.visit('https://app-qa.getsprout.co/auth/login')
      
      })
    
    it('1.1 User Sgin in faled with wrong password then succced with correct one',()=>{
        cy.url().should('contains','login')
        cy.contains('Forgot password?')
        cy.get('.sprout-auth-form').find('[type="text"]').type('mike.z@getsprout.co')
        cy.get('.sprout-auth-form').find('[type="password"]').type('Mike')
        cy.get('.sprout-auth-bth').click()
        cy.on('window:alert',(text)=>{
          expect(text).to.contains('Email or password is error!')
        })
        cy.wait(2000)
        cy.get('.sprout-auth-form').find('[type="password"]').clear()
        cy.get('.sprout-auth-form').find('[type="password"]').type('Mike_1983')
        cy.get('.sprout-auth-bth').click()
        cy.wait(10000)
        cy.url().should('contains','home/summary')
        cy.get('.sprout-header-task-wrap > .sprout-header-avatar').click()
        cy.contains('Log out').click()
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})