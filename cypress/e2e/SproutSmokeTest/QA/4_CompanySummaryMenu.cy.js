///<reference types="cypress"/>

describe('SproutSmokeTest_QA',()=>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.viewport('macbook-13')
        cy.loginOnQA('mike.z@getsprout.co','Mike_1983')
      })
    it('1.4 Company summary Menu items check',()=>{   
        cy.url().should('contains','home/summary') 
        cy.contains('Permissions and roles').click()
        cy.contains('Board').click()
        cy.contains('Name').should('be.exist')
        cy.contains('Account users').click()
        cy.contains('Super admin').should('be.exist')
        cy.contains('Add user').click()
        cy.get('.ant-input').eq('0').type('TestfromMike')
        cy.get('.ant-input').eq('1').type('TestfromMike@gmail.com')
        cy.get('.ant-select-selector').click()
        cy.get('.ant-select-item-option-content').eq('2').click()
        cy.contains('Permission details:').should('be.exist')
        cy.get('.close > .anticon > svg').click()
        cy.contains('Data room').should('be.visible')
        cy.contains('Settings') .click()
        cy.contains('General settings').should('be.exist')
        cy.wait(2000)
        cy.get('.glyphicon-user').click()
        cy.contains('Log out').click() 
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})
