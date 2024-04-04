describe('Register', function() {
  beforeEach(function() {
      cy.visit('https://seubarriga.wcaquino.me/cadastro')
  })

    it('Register sucess', function() {
      cy.fillInNewName()
      cy.fillInNewEmail()
      cy.fillInPassword()
      cy.clickInRegister()

      cy.get('body > div.alert.alert-success')
        .should('be.visible')
        .should('have.text', 'Usuário inserido com sucesso')
    })

    it('Registration of an already registered user', function() {
          cy.fillInNewName()
          cy.fillInNewEmail()
          cy.fillInPassword()
          cy.clickInRegister()

          cy.get('body > div.alert.alert-danger')
            .should('be.visible')
            .should('have.text', 'Endereço de email já utilizado')
    })

    it('Registration with blank name', function() {
              cy.fillInNewEmail()
              cy.fillInPassword()
              cy.clickInRegister()

              cy.get('body > div.alert.alert-danger')
                .should('be.visible')
                .should('have.text', 'Nome é um campo obrigatório')
        })

   it('Registration with blank password', function() {
              cy.fillInNewName()
              cy.fillInNewEmail()
              cy.clickInRegister()

              cy.get('body > div.alert.alert-danger')
                .should('be.visible')
                .should('have.text', 'Senha é um campo obrigatório')
        })

   it('Registration with blank email', function() {
              cy.fillInNewName()
              cy.fillInPassword()
              cy.clickInRegister()

              cy.get('body > div.alert.alert-danger')
                .should('be.visible')
                .should('have.text', 'Email é um campo obrigatório')
        })

})