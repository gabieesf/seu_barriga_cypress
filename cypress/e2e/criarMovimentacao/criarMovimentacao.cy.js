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
    cy.selectRecipe()
    cy.fillInMovimentDate('24/07/2024')
    cy.fillInPaymentDate('24/07/2024')
    cy.fillInDescription('Salário')
    cy.fillInInterested('Colaborador')
    cy.fillInValue('1412')
    cy.selectAccount('Conta teste')
    cy.selectPaid()
    cy.clickSave2()
    cy.get(msgAlerta)
        .should('be.visible')
        .should('have.text', 'Movimentação adicionada com sucesso!')
})
it('Adicionar receita pendente com sucesso', function() {
    cy.selectRecipe()
    cy.fillInMovimentDate('24/07/2024')
    cy.fillInPaymentDate('24/07/2024')
    cy.fillInDescription('Salário')
    cy.fillInInterested('Colaborador')
    cy.fillInValue('1412')
    cy.selectAccount('Conta teste')
    cy.selectPending()
    cy.clickSave2()
    cy.get(msgAlerta)
        .should('be.visible')
        .should('have.text', 'Movimentação adicionada com sucesso!')
})

it('Adicionar despesa paga com sucesso', function() {
    cy.selectExpense()
    cy.fillInMovimentDate('24/07/2024')
    cy.fillInPaymentDate('24/07/2024')
    cy.fillInDescription('Salário')
    cy.fillInInterested('Colaborador')
    cy.fillInValue('1412')
    cy.selectAccount('Conta teste')
    cy.selectPaid()
    cy.clickSave2()
    cy.get(msgAlerta)
        .should('be.visible')
        .should('have.text', 'Movimentação adicionada com sucesso!')
})

it('Adicionar despesa pendente com sucesso', function() {
    cy.selectExpense()
    cy.fillInMovimentDate('24/07/2024')
    cy.fillInPaymentDate('24/07/2024')
    cy.fillInDescription('Salário')
    cy.fillInInterested('Colaborador')
    cy.fillInValue('1412')
    cy.selectAccount('Conta teste')
    cy.selectPending()
    cy.clickSave2()
    cy.get(msgAlerta)
        .should('be.visible')
        .should('have.text', 'Movimentação adicionada com sucesso!')
})

it('Adicionar data de movimentação inválida', function() {
    cy.selectRecipe()
    cy.fillInMovimentDate('40/01/2024')
    cy.fillInPaymentDate('24/07/2024')
    cy.fillInDescription('Salário')
    cy.fillInInterested('Colaborador')
    cy.fillInValue('1412')
    cy.selectAccount('Conta teste')
    cy.selectPaid()
    cy.clickSave2()
    cy.get('.alert ul li:nth-child(1)')
        .should('be.visible')
        .should('have.text', "Data da Movimentação inválida (DD/MM/YYYY)")
    cy.get('.alert ul li:nth-child(2)')
        .should('be.visible')
        .should('have.text', "Data da Movimentação deve ser menor ou igual à data atual")
})

it('Adicionar data de pagamento inválida', function() {
    cy.selectRecipe()
    cy.fillInMovimentDate('24/07/2024')
    cy.fillInPaymentDate('40/01/2024')
    cy.fillInDescription('Salário')
    cy.fillInInterested('Colaborador')
    cy.fillInValue('1412')
    cy.selectAccount('Conta teste')
    cy.selectPaid()
    cy.clickSave2()
    cy.get('.alert > ul > li')
        .should('be.visible')
        .should('have.text', "Data do pagamento inválida (DD/MM/YYYY)")
})

it('Adicionar data de movimentação inferior a de pagamento', function() {
    cy.selectRecipe()
    cy.fillInMovimentDate('23/07/2024')
    cy.fillInPaymentDate('24/07/2024')
    cy.fillInDescription('Salário')
    cy.fillInInterested('Colaborador')
    cy.fillInValue('1412')
    cy.selectAccount('Conta teste')
    cy.selectPaid()
    cy.clickSave2()
    cy.get(msgAlerta)
        .should('be.visible')
        .should('have.text', "Data de movimentação inválida")
})

it('Adicionar descrição vazia', function() {
    cy.selectExpense()
    cy.fillInMovimentDate('26/07/2024')
    cy.fillInPaymentDate('26/07/2024')
    cy.fillInInterested('Teste2')
    cy.fillInValue('987')
    cy.selectAccount('Conta teste')
    cy.selectPending()
    cy.clickSave2()
    cy.get('.alert > ul > li')
        .should('be.visible')
        .should('have.text', "Descrição é obrigatório")
})

it('Adicionar “Interested” com nome vazio', function() {
    cy.selectRecipe()
    cy.fillInMovimentDate('23/07/2024')
    cy.fillInPaymentDate('24/07/2024')
    cy.fillInDescription('Renda Extra')
    cy.fillInValue('1412')
    cy.selectAccount('Conta teste')
    cy.selectPaid()
    cy.clickSave2()
    cy.get('.alert > ul > li')
        .should('be.visible')
        .should('have.text', "Interessado é obrigatório")
})

it('Adicionar movimentação com valor negativo', function() {
    cy.selectRecipe()
    cy.fillInMovimentDate('24/07/2024')
    cy.fillInPaymentDate('24/07/2024')
    cy.fillInDescription('Salário')
    cy.fillInInterested('Colaborador')
    cy.fillInValue('-1412')
    cy.selectAccount('Conta teste')
    cy.selectPaid()
    cy.clickSave2()
    cy.get(msgAlerta)
        .should('be.visible')
        .should('have.text', "Não é possível ter um valor de movimentação negativo")
})