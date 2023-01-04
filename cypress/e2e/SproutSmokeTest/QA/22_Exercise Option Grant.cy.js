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

    it('1.22 Exercise a option grant',()=>{
    cy.contains('Securities').click()
    cy.contains('Share option awards').click()
    cy.get('[data-row-key="4896"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(3) > a').click()
    cy.get('#exercise_step1 > .modal-body > .body-one > .form-horizontal > :nth-child(1) > .col-xs-5 > .ant-picker').click()
    cy.wait(1000)
    cy.contains('Today').click() 
    cy.get('#exercise_step1 > .modal-body > .body-one > .form-horizontal > :nth-child(2) > .col-xs-5 > .form-control').type('1')
    cy.get('#exercise_select').selectFile('cypress/fixtures/TestFromMike.txt')
    cy.wait(2000)
    cy.get('#exercise_step1 > .modal-footer > .btn').click()
    cy.get('.body-one > .table > tbody > :nth-child(13) > :nth-child(1)')
      .wait(1000)
      .trigger('mousedown,bottom')
    cy.get('#exercise_step2 > .modal-footer > .btn').click()
    cy.contains('Partially exercised').should('be.exist')
    cy.reload()
    cy.wait(10000)
    cy.get('.sprout-task-tip-btns > .ant-btn').click()
    cy.get('.sprout-header-task').click()
    cy.contains('Sign certificate').click()
    cy.get('.ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
    cy.get('.task-sign-btns > .ant-btn').click()
    cy.get('.signature-btn-wrap > .ant-btn').click()
    cy.wait(2200)
    cy.visit('/home/summary')
    cy.wait(10000)
    cy.get('.glyphicon-user').click()
    cy.contains('Log out').click() 
    cy.clearCookies()
    cy.getCookies().should('be.empty')
})
})