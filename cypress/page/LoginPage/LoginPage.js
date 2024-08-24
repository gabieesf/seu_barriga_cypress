Cypress.Commands.add('fillInName', function(name){
  cy.get('#email')
    .type(name)
})

Cypress.Commands.add('fillInPassword', function(password){
  cy.get('#senha')
    .type(password)
}) 

Cypress.Commands.add('clickButton', function(){
  cy.get("[type='submit']")
      .click()
})