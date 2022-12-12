// <reference types="cypress"/>

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

    it('1.16 Terminate a stakeholder',()=>{
    cy.contains('Securities').click()
    cy.contains('Share Option Awards').click()
    cy.get('[data-row-key="4733"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get(':nth-child(9) > a').click()
    cy.get(':nth-child(1) > div.col-xs-4 > .ant-picker > .ant-picker-input > input').click()
    cy.wait(2000)
    cy.contains('Today').click()
    cy.get('#termination_type_01 > .form-control').select('With cause')
    cy.get('#new_relationship_01 > .form-control').select('Investor')
    cy.get('#terminationDetails > .nav > .modal-footer > .btn').click()
    cy.get('#notifications > .nav > .modal-footer > .btn').click()
    cy.get('#confirm_checkbox > .send-div').click()
    cy.get('.ter-reviewContent > :nth-child(2) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-tbody > .ant-table-row > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox').click()
    cy.get('.ant-table-cell-fix-right > .ant-picker').click()
    cy.wait(1000)
    cy.contains('No expiration date').click()
    cy.get('.nav > .preStock-footer > .btn').click()
    cy.get('#review > .preStock-footer > .btn').click()
    cy.wait(10000)
    cy.contains('Exercisable').should('be.exist')
    cy.get('[data-row-key="4733"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.contains('Reverse termination').click()
    cy.get('.ant-modal-body > .modal-content > .modal-footer > :nth-child(2)').click()
    cy.visit('/home/summary')
    cy.wait(12000)
    cy.get('.glyphicon-user').click()
    cy.contains('Log out').click() 
    cy.clearCookies()
    cy.getCookies().should('be.empty')
})
})