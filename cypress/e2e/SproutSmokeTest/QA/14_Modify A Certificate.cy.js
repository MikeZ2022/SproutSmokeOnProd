 /// <reference types="cypress"/>

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

    it('1.14 Modify a Certificate',()=>{
    cy.visit('home/securities/shares')
    cy.get('[data-row-key="4736"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.contains('Modify certificate').click()
    cy.get(':nth-child(1) > .row > .col-xs-4 > .form-control').select('Clerical error')
    cy.get('.padding2026026 > :nth-child(2) > .row > .col-xs-6 > .form-control').type('Test From Mike')
    cy.get('#modifyReason > .modal-footer > .btn').click()
    cy.get(':nth-child(2) > .table > tbody > :nth-child(4) > :nth-child(1) > .check-box > label').click()
    cy.get(':nth-child(2) > .table > tbody > :nth-child(4) > :nth-child(3) > .form-control').type('1')
    cy.get('#modifyValue > .modal-footer > .btn').click()
    cy.get('#reviewModifications > .modal-footer > .btn').click()
    cy.wait(15000)
    cy.contains('1').should('be.exist')
    cy.visit('home/captable/byshareclass')
    cy.wait(12000)
    cy.contains('Series A').click()
    cy.wait(2000)
    cy.contains('Investor A1').click()
    cy.contains('PSA-1').click()
    cy.contains('1').should('be.exist')
    cy.visit('/home/summary')
    cy.wait(10000)
    cy.contains('Securities').trigger('mouseover')
    cy.contains('Securities settings').click()
    cy.wait(1000)
    cy.contains('Securities').trigger('mouseover')
    cy.contains('Shares').click()
    cy.wait(10000)
    cy.get('[data-row-key="4736"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.contains('Modify certificate').click()
    cy.get(':nth-child(1) > .row > .col-xs-4 > .form-control').select('Clerical error')
    cy.get('.padding2026026 > :nth-child(2) > .row > .col-xs-6 > .form-control').type('Test From Mike')
    cy.get('#modifyReason > .modal-footer > .btn').click()
    cy.get(':nth-child(2) > .table > tbody > :nth-child(4) > :nth-child(1) > .check-box > label').click()
    cy.get(':nth-child(2) > .table > tbody > :nth-child(4) > :nth-child(3) > .form-control').type('123456')
    cy.get('#modifyValue > .modal-footer > .btn').click()
    cy.get('#reviewModifications > .modal-footer > .btn').click()
    cy.contains('123456').should('be.exist')
})
})