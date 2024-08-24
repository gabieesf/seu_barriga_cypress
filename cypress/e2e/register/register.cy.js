import faker from 'faker'
import '../../page/RegisterPage/RegisterPage'
describe('Cadastro', function() {  
  const emailRandom = faker.internet.email()

  beforeEach(function() {
    cy.visit('https://seubarriga.wcaquino.me/cadastro')
  })

  it('Cadastro com sucesso', function() {
    cy.fillInNewName('User')
    cy.fillInNewEmail(emailRandom)
    cy.fillInPassword('123456')
    cy.clickInRegister()

    cy.get('body > div.alert.alert-success')
      .should('be.visible')
      .should('have.text', 'Usuário inserido com sucesso')
  })

  it('Cadastro com usuário já cadastrado', function() {
    cy.fillInNewName('User')
    cy.fillInNewEmail('0204@gmail.com')
    cy.fillInPassword('123456')
    cy.clickInRegister()

    cy.get('body > div.alert.alert-danger')
      .should('be.visible')
      .should('have.text', 'Endereço de email já utilizado')
  })

  it('Cadastrar conta com campo nome vazio', function() {
    cy.fillInNewEmail(emailRandom)
    cy.fillInPassword('123456')
    cy.clickInRegister()

    cy.get('body > div.alert.alert-danger')
      .should('be.visible')
      .should('have.text', 'Nome é um campo obrigatório')
  })

  it('Cadastrar conta com campo e-mail vazio', function() {
    cy.fillInNewName('User')
    cy.fillInPassword('123456')
    cy.clickInRegister()

    cy.get('body > div.alert.alert-danger')
    .should('be.visible')
    .should('have.text', 'Email é um campo obrigatório')
  })
    
  it('Cadastrar conta com campo senha vazio', function() {
    cy.fillInNewName('User')
    cy.fillInNewEmail(emailRandom)
    cy.clickInRegister()
    
    cy.get('body > div.alert.alert-danger')
      .should('be.visible')
      .should('have.text', 'Senha é um campo obrigatório')
    })

})