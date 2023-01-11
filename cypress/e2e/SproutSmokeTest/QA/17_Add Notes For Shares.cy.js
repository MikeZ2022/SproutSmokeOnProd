 /// <reference types="cypress"/>

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

  it('1.17 Add Notes for Shares',()=>{
  cy.contains('Securities').trigger('mouseover')
  cy.contains('Securities settings').click()
  cy.wait(1000)
  cy.contains('Securities').trigger('mouseover')
  cy.contains('Shares').click()
  cy.get('[data-row-key="4736"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
  cy.get('.ant-dropdown-menu > :nth-child(8) > a').click()
  cy.get('.tab-content > .modal-content > .modal-body > .form-control')
    .clear()
    .wait(2000)
    .type('TestFromMike')
    .wait(2000)
  cy.contains('Save admin notes').click()
  cy.wait(1100)
  cy.visit('/home/captable/byshareclass')
  cy.wait(10000)
  cy.contains('Series A').click()
  cy.contains('Investor A1').click()
  cy.contains('PSA-1').click()
  cy.wait(1000)
  cy.get('.certificate-side-bar-menu > :nth-child(8)').click()
  cy.contains('TestFromMike').should('be.exist')
  cy.visit('/home/summary')
  cy.wait(10000)
  cy.get('.glyphicon-user').click()
  cy.contains('Log out').click() 
  cy.clearCookies()
  cy.getCookies().should('be.empty')
})
})