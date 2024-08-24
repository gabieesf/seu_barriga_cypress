import '../../page/LoginPage/LoginPage'
import '../../page/ResumoMensal/ResumoMensalPage'
describe('Resumo Mensal', function() {

const url='https://seubarriga.wcaquino.me/login'

beforeEach(function() {
  cy.visit(url)
  cy.fillInName('0204@gmail.com')
  cy.fillInPassword('123456')
  cy.clickButton()
  cy.get('a[href^="/extrato"]').click()
})

it('Consulta com sucesso de resumo mensal por período', function() {
  cy.selectMonth('Julho')
  cy.selectYear('2024')
  cy.clickSearch()
  cy.get('#tabelaExtrato > tbody >tr')
  .should('exist')
})

it('Consulta com sucesso de resumo mensal por período inválido', function() {
    cy.selectMonth('Dezembro')
    cy.selectYear('2024')
    cy.clickSearch()
    cy.get('#tabelaExtrato > tbody >tr')
    .should('not.exist')
  })

})