import '../../page/LoginPage/LoginPage'
describe('Home', function() {
const url='https://seubarriga.wcaquino.me/login'

beforeEach(function() {
    cy.visit(url)
    cy.fillInName('0204@gmail.com')
    cy.fillInPassword('123456')
    cy.clickButton()
})

it('Visualizar o balancete das contas com sucesso', function() {
    cy.get('tr:nth-child(1) td:nth-child(1)')
      .should('exist')
    cy.get('tr:nth-child(1) td:nth-child(2)')
      .should('exist')
    cy.get('footer')
      .find('a[href^="/reset"]')
      .should('not.exist');        
})
})