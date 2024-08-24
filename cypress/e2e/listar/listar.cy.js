import '../../page/LoginPage/LoginPage'
import '../../page/ListarPage/ListarPage'
import '../../page/AdicionarContaPage/AdicionarPage.js'
import { faker } from '@faker-js/faker'
describe('Listar', function() {

const url='https://seubarriga.wcaquino.me/login'
const msgAlerta='.alert'
const randomName = faker.name.lastName()

beforeEach(function() {
  cy.visit(url)
  cy.fillInName('2308@teste.com')
  cy.fillInPassword('123')
  cy.clickButton()
  cy.get('.dropdown-toggle').click()
  cy.get('a[href^="/contas"]').click()

  const testTitlesToRunBeforeEach = [
    'Remover contas sem movimentação ativa'
  ]    
  if (testTitlesToRunBeforeEach.includes(this.currentTest.title)) {
    cy.deleteAccount();
  }
})


it('Listar contas adicionadas com sucesso', function() {
  cy.get('#tabelaContas')
    .should('exist')
  cy.get('a[href^="/editarConta"]')
    .should('exist')
  cy.get('a[href^="/removerConta"]')
    .should('exist')
})

it('Remover contas com movimentações ativas', function() {
    cy.deleteAccount()
    cy.get(msgAlerta)
      .should('be.visible')
      .should('have.text', 'Conta em uso na movimentações')
})

it('Remover contas sem movimentação ativa', function() {
    cy.get('.dropdown-toggle').click()
    cy.get('a[href^="/addConta"]').click()
    cy.fillInAccount(randomName)
    cy.clickSave()
    cy.get('.dropdown-toggle').click()
    cy.get('a[href^="/contas"]').click()
    cy.deleteAccount()
    cy.get(msgAlerta)
      .should('be.visible')
      .should('have.text', 'Conta removida com sucesso!')
})
})