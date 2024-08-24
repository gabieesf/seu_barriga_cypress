import '../../page/LoginPage/LoginPage'
import '../../page/SairPage/SairPage'

describe('Sair', function() {

const url='https://seubarriga.wcaquino.me/login'

beforeEach(function() {
  cy.visit(url)
  cy.fillInName('0204@gmail.com')
  cy.fillInPassword('123456')
  cy.clickButton()
})

it('Logout com sucesso', function() {
  cy.selectLogout()
  cy.get('a[href^="/login"]')
    .should('exist')
})

})