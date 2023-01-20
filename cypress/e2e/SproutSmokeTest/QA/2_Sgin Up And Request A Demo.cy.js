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
    
    it('1.2 Try to Sign Up and request a demo',()=>{
        cy.contains('Sign up').click()
        cy.url().should('contains','auth/signup')
        cy.get('#user_name').type('TestFromMike')
        cy.get('#email').type('TestFromMike')
        cy.get('#password').type('mike1983')
        cy.get('#confirmPassword').type('Mike1983')
        cy.contains('Email is invalid').should('be.exist')
        cy.contains('The two passwords that you entered do not match').should('be.exist')
        cy.get(':nth-child(5) > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input-suffix > .anticon > svg').click()
        cy.get('#title').type('Mike_test') 
        cy.get('#company_name').type('TestCompany')
        cy.get('#company_size').type('TestFromMike')
        cy.get('#comment')
          .type('TestFromMike')
        cy.get('.ant-form-item-control-input-content > .ant-btn').click()
        cy.go('back')
        cy.contains('Request a Demo')
          .click()
        cy.url().should('contains','requestdemo')
        cy.get('#name')
          .type('TestFromMike')
        cy.get('#email').type('TestFromMike')
        cy.get('#title').type('Mike_1983')
        
        cy.get('#company').type('TestCompany')
        cy.get('#share').type('TestFromMike')
        cy.get('#answer').type('TestFromMike')
        cy.contains('This field must be number')
          .should('be.exist')
        cy.get('#request_demo').click()
        cy.contains('Success!')
          .should('be.exist') 
      })
})
