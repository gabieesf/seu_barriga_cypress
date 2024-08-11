import faker from 'faker';

const valueRandom = faker.name.findName()
const emailRandom = faker.internet.email()


Cypress.Commands.add('fillInName', function(){
    cy.get('#email')
      .type("02@gmail.com")
})

Cypress.Commands.add('fillInInvalidName', function(){
  cy.get('#email')
    .type("1307@email")
})

Cypress.Commands.add('fillInPassword', function(){
  cy.get('#senha')
    .type(Cypress.env('pwd'))
}) 

Cypress.Commands.add('fillInInvalidPassword', function(){
  cy.get('#senha')
    .type("111")
}) 

Cypress.Commands.add('clickButton', function(){
  cy.get("[type='submit']")
      .click()
})

Cypress.Commands.add('fillInNewName', function(){
  cy.get("#nome")
      .type(valueRandom.toString())
})

Cypress.Commands.add('fillInNewEmail', function(){
  cy.get("#email")
      .type(emailRandom.toString())
})

Cypress.Commands.add('fillInPassword', function(){
  cy.get('#senha')
    .type(Cypress.env('pwd'))
})

Cypress.Commands.add('clickInRegister', function(){
  cy.get("body > div.jumbotron.col-lg-4 > form > input")
      .click()
})








