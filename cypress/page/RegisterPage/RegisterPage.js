Cypress.Commands.add('fillInNewName', function(name){
  cy.get("#nome")
      .type(name)
})

Cypress.Commands.add('fillInNewEmail', function(email){
  cy.get("#email")
      .type(email)
})

Cypress.Commands.add('fillInPassword', function(password){
  cy.get('#senha')
    .type(password)
})

Cypress.Commands.add('clickInRegister', function(){
  cy.get("body > div.jumbotron.col-lg-4 > form > input")
      .click()
})