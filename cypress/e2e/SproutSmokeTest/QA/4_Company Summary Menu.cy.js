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
    it('1.4 Company summary Menu items check',()=>{   
        cy.url().should('contains','home/summary') 
        cy.visit('home/permissions')
        cy.get('.bannere > .ant-btn').click()
        cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').type('MikeTest')
        cy.get(':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').type('mike.z+12345@getsprout.co')
        cy.get('.btn-wrap > .ant-btn').click()
        cy.contains('Permissions is required')
        cy.visit('home/permissions/board')
        cy.get('.bannere > .ant-btn').click()
        cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
          .wait(1000)
          .type('MikeTes{enter}')
        cy.get('.ant-picker-input > input').click()
        cy.wait(1000)
        cy.contains('Today').click()
        cy.get('.btn-wrap > .ant-btn').click()
        cy.visit('home/permissions/roles')
        cy.contains('Stakeholder relations')
        cy.visit('home/permissions/signatories')
        cy.contains('Certificate (2nd)')
        cy.wait(2000)
        cy.visit('home/setting')
        cy.contains('Stakeholder access control')
        cy.visit('home/setting/profile')
        cy.contains('Company address')
        cy.get('.glyphicon-user').click()
        cy.contains('Log out').click() 
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})
