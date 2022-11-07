 /// <reference types="cypress"/>

 describe('SproutSmokeTest_QA',()=>{
  beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.viewport('macbook-15')
      cy.loginOnQA('mike.z@getsprout.co','Mike_1983')
      cy.wait(10000)
    })

  it('1.18 Repurchase Shares',()=>{
  cy.contains('Securities').click()
  cy.contains('Shares').click()
  cy.get('[data-row-key="4740"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
  cy.get('.ant-dropdown-menu > :nth-child(3) > a').click()
  cy.get('#repurchase_reason > .form-control').select('Buyback')
  cy.get('#repurchase_repurchase_date > .ant-picker > .ant-picker-input > input').click()
  cy.wait(1100)
  cy.contains('Today').click()
  cy.wait(1000)
  cy.get('#repurchase_quantity > .form-control').type('1')
  cy.get('#repurchase_transaction_value').type('1')
  cy.get('#repurchase-select').selectFile('cypress/fixtures/TestFromMike.txt')
  cy.get('.body-one > .form-horizontal > :nth-child(5) > :nth-child(2) > .checkbox > .send-div').click()
  cy.get('#repurchase-step1 > .modal-footer > .btn').click()
  cy.get('#repurchase-step2 > .modal-footer > .btn').click()
  cy.contains('Repurchased').should('be.exist')
  cy.get('[data-row-key="4740"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox').click()
  cy.contains('Actions').click()
  cy.get('.ant-dropdown-menu > :nth-child(2) > a').click()
  cy.wait(2000)
  cy.get('#first_name > .ant-picker > .ant-picker-input').click()
  cy.wait(2000)
  cy.contains('Today').click()
  cy.get('#cancel_step1 > .modal-body > .body-one > .form-horizontal > :nth-child(2) > div.col-xs-5 > .form-control').select('Buyback')
  cy.get('#cancel_step1 > .modal-footer > .btn').click()
  cy.get('#cancel_step2 > .modal-footer > .btn').click()
  cy.visit('/home/summary')
  cy.contains('Securities').click()
  cy.contains('Shares').click()
  cy.wait(10000)
  cy.get('[data-row-key="4740"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
  cy.get('.ant-dropdown-menu > :nth-child(3) > a').click()
  cy.visit('/home/summary')
  cy.wait(10000)
  cy.get('.glyphicon-user').click()
  cy.contains('Log out').click() 
  cy.clearCookies()
  cy.getCookies().should('be.empty')
})
})