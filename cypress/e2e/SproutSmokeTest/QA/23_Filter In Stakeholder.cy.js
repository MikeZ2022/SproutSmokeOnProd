// <reference types="cypress"/>

describe('SproutSmokeTest',()=>{
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

    it('1.23 Filter function in Stakeholders',()=>{
    cy.contains('Stakeholders').trigger('mouseover')
    cy.contains('All stakeholders').click()
    cy.get('.ant-badge > .ant-btn').click()
    cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
      .click()
      .wait(1000)
      .type('anna{enter}')
    cy.get('.is-dirty > .ant-form-item-label > label').click()
    cy.get(':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
      .click()
      .wait(1000)
      .type('CSA{enter}')
    cy.get(':nth-child(2) > .ant-form-item-label > label').click()
    cy.get(':nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input')
       .click()
       .wait(1000)
       .type('0{enter}')
    cy.get(':nth-child(4) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
      .click()
      .wait(1000)
      .type('None{enter}')
    cy.get(':nth-child(4) > .ant-form-item-label > label').click()
    cy.get('.ant-space > :nth-child(2) > .ant-btn').click()
    cy.contains('mike.test007').should('not.exist')
    cy.contains('Anna Sun').should('exist')
    cy.contains('4').should('be.exist')
    cy.get('.ant-badge > .ant-btn').click()
    cy.get(':nth-child(5) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
        .click()
        .wait(1000)
        .type('No{enter}')
    cy.get(':nth-child(5) > .ant-form-item-label > label').click()
    cy.get('.ant-checkbox-group > :nth-child(7) > :nth-child(2)')
      .click()
    cy.get('.ant-space > :nth-child(2) > .ant-btn').click()
    cy.contains('6').should('exist')
    cy.contains('No Data').should('exist')
})
})