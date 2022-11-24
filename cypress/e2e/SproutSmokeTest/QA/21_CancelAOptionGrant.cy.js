// <reference types="cypress"/>

describe('SproutSmokeTest_QA',()=>{
  beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.viewport('macbook-16')
      cy.loginWithLocalstorage()
      cy.loginOnQA('mike.z@getsprout.co','Mike_1983')
      cy.wait(10000)
    })

    it('1.21 Cancel a Option Grant',()=>{
    cy.contains('Securities').click()
    cy.contains('Share Option Awards').click()
    cy.get('[data-row-key="4732"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(5) > a').click()
    cy.get('#first_name > .ant-picker > .ant-picker-input').click()
    cy.wait(1000)
    cy.contains('Today').click()
    cy.get('#cancel_step1 > .modal-body > .body-one > .form-horizontal > :nth-child(2) > div.col-xs-5 > .form-control').select('Clerical error')
    cy.get('#cancel_step1 > .modal-body > .body-one > .form-horizontal > :nth-child(3) > div.col-xs-5').type('1')
    cy.get(':nth-child(4) > .row > .col-xs-6 > .form-control').type('Test From Mike')
    cy.get('#cancel_step1 > .modal-footer > .btn').click()
    cy.wait(2000)
    cy.get('#cancel_step2 > .modal-footer > .btn').click()
    cy.contains('Canceled').should('be.exist')
    cy.get('[data-row-key="4732"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.contains('Reverse cancellation').click()
    cy.wait(1000)
    cy.visit('/home/summary')
    cy.wait(10000)
    cy.get('.glyphicon-user').click()
    cy.contains('Log out').click() 
    cy.clearCookies()
    cy.getCookies().should('be.empty')
})
})