Cypress.Commands.add('clearField', function(Account){
    cy.get('#nome').clear()
})