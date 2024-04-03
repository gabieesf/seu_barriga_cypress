describe('Login', function() {
  beforeEach(function() {
      cy.visit('https://seubarriga.wcaquino.me/login')
  })

  it('Login sucess', function() {
    cy.fillInName()
    cy.fillInPassword()
    cy.clickButton()

    cy.get('body > div.alert.alert-success')
      .should('be.visible')
      .should('have.text', 'Bem vindo, Ana!')
  })

  it('Login with invalid username', function() {
    cy.fillInInvalidName()
    cy.fillInPassword()
    cy.clickButton()
    cy.get('body > div.alert.alert-danger')
      .should('be.visible')
      .should('have.text', 'Problemas com o login do usuário')
  })

  it('Login with invalid password', function() {
    cy.fillInName()
    cy.fillInInvalidPassword()
    cy.clickButton()
    cy.get('body > div.alert.alert-danger')
            .should('be.visible')
            .should('have.text', 'Problemas com o login do usuário')
  })

  it('Login with blanck username and password', function() {
    cy.clickButton()
    cy.get('body > div:nth-child(2)')
      .should('be.visible')
      .should('have.text', 'Email é um campo obrigatório')
    cy.get('body > div:nth-child(3)')
          .should('be.visible')
          .should('have.text', 'Senha é um campo obrigatório')
  })

})