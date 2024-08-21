Cypress.Commands.add('ApagarConta', function(){
    cy.get('.dropdown-toggle').click()
    cy.get('a[href^="/contas"]').click()
    cy.get('.glyphicon-remove-circle').click()
})