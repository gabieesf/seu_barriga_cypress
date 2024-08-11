import '../../page/LoginPage/LoginPage'
describe('Login', function() {
  const url='https://seubarriga.wcaquino.me/login'

  beforeEach(function() {
      cy.visit(url)
  })

  it('Login com sucesso', function() {
    cy.fillInName('0204@gmail.com')
    cy.fillInPassword('123456')
    cy.clickButton()

    cy.get('body > div.alert.alert-success')
      .should('be.visible')
      .should('have.text', 'Bem vindo, Ana!')
  })

  it('Login com email invalido', function() {
    cy.fillInName('6060@teste')
    cy.fillInPassword('123456')
    cy.clickButton()
    cy.get('body > div.alert.alert-danger')
      .should('be.visible')
      .should('have.text', 'Problemas com o login do usuário')
  })

  it('Login senha inválida', function() {
    cy.fillInName('0204@gmail.com')
    cy.fillInPassword('12345')
    cy.clickButton()
    cy.get('body > div.alert.alert-danger')
            .should('be.visible')
            .should('have.text', 'Problemas com o login do usuário')
  })

  it('Login com os campos vazios', function() {
    cy.clickButton()
    cy.get('body > div:nth-child(2)')
      .should('be.visible')
      .should('have.text', 'Email é um campo obrigatório')
    cy.get('body > div:nth-child(3)')
          .should('be.visible')
          .should('have.text', 'Senha é um campo obrigatório')
  })

  it('Login com o campo senha vazio', function() {
    cy.fillInName('0204@gmail.com')
    cy.clickButton()
    cy.get('body > div.alert.alert-danger')
          .should('be.visible')
          .should('have.text', 'Senha é um campo obrigatório')
  })

  it('Login com o campo email vazio', function() {
    cy.fillInPassword('123456')
    cy.clickButton()
    cy.get('body > div.alert.alert-danger')
      .should('be.visible')
      .should('have.text', 'Email é um campo obrigatório')
  })

})