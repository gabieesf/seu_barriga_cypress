import '../../page/Movimentacao/MovimentacaoPage'
import '../../page/LoginPage/LoginPage'

const url='https://seubarriga.wcaquino.me/login'
const msgAlerta='.alert'

beforeEach(function() {
    cy.visit(url)
    cy.fillInName('0204@gmail.com')
    cy.fillInPassword('123456')
    cy.clickButton()
    cy.get('a[href^="/movimentacao"]').click()
})

it('Adicionar receita paga com sucesso', function() {
    cy.selectReceita()
    cy.fillInMovimentDate('24/07/2024')
    cy.fillInPaymentDate('24/07/2024')
    cy.fillInDescription('Salário')
    cy.fillInInteressado('Colaborador')
    cy.fillInValue('1412')
    cy.selectConta('Conta teste')
    cy.selectPago()
    cy.clickSave2()
    cy.get(msgAlerta)
        .should('be.visible')
        .should('have.text', 'Movimentação adicionada com sucesso!')
})

it('Adicionar receita pendente com sucesso', function() {
    cy.selectReceita()
    cy.fillInMovimentDate('24/07/2024')
    cy.fillInPaymentDate('24/07/2024')
    cy.fillInDescription('Salário')
    cy.fillInInteressado('Colaborador')
    cy.fillInValue('1412')
    cy.selectConta('Conta teste')
    cy.selectPendente()
    cy.clickSave2()
    cy.get(msgAlerta)
        .should('be.visible')
        .should('have.text', 'Movimentação adicionada com sucesso!')
})

it('Adicionar despesa paga com sucesso', function() {
    cy.selectDespesa()
    cy.fillInMovimentDate('24/07/2024')
    cy.fillInPaymentDate('24/07/2024')
    cy.fillInDescription('Salário')
    cy.fillInInteressado('Colaborador')
    cy.fillInValue('1412')
    cy.selectConta('Conta teste')
    cy.selectPago()
    cy.clickSave2()
    cy.get(msgAlerta)
        .should('be.visible')
        .should('have.text', 'Movimentação adicionada com sucesso!')
})

it('Adicionar despesa pendente com sucesso', function() {
    cy.selectDespesa()
    cy.fillInMovimentDate('24/07/2024')
    cy.fillInPaymentDate('24/07/2024')
    cy.fillInDescription('Salário')
    cy.fillInInteressado('Colaborador')
    cy.fillInValue('1412')
    cy.selectConta('Conta teste')
    cy.selectPendente()
    cy.clickSave2()
    cy.get(msgAlerta)
        .should('be.visible')
        .should('have.text', 'Movimentação adicionada com sucesso!')
})

it('Adicionar data de movimentação inválida', function() {
    cy.selectReceita()
    cy.fillInMovimentDate('40/01/2024')
    cy.fillInPaymentDate('24/07/2024')
    cy.fillInDescription('Salário')
    cy.fillInInteressado('Colaborador')
    cy.fillInValue('1412')
    cy.selectConta('Conta teste')
    cy.selectPago()
    cy.clickSave2()
    cy.get(msgAlerta)
        .should('be.visible')
        .should('have.text', 'Data da Movimentação inválida (DD/MM/YYYY)” e “Data da Movimentação deve ser menor ou igual à data atual')
})