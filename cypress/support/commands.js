import secret from "../fixtures/secret.json"

Cypress.Commands.add('fillInName', function(){
    cy.get('#email')
      .type(secret.username)
}) 

Cypress.Commands.add('fillInInvalidName', function(){
  cy.get('#email')
    .type("1307@email")
})

Cypress.Commands.add('fillInPassword', function(){
  cy.get('#senha')
    .type(secret.password)
}) 

Cypress.Commands.add('fillInInvalidPassword', function(){
  cy.get('#senha')
    .type("111")
}) 

Cypress.Commands.add('clickButton', function(){
  cy.get("[type='submit']")
      .click()
})

//Cypress.Commands.add('buttonForgotPassword', function(){
//  cy.get('[class="alert alert-success"]')
//      .click()
//})