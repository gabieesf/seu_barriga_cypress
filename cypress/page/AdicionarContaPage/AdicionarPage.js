Cypress.Commands.add('fillInAccount', function(Account){
    cy.get('#nome')
      .type(Account)
})

Cypress.Commands.add('clickSave', function(){
    cy.get("[type='submit']")
    .click()
})