Cypress.Commands.add('deleteAccount', function(){
    cy.get('.dropdown-toggle').click()
    cy.get('a[href^="/contas"]').click()
    cy.get('a[href^="/removerConta"]').first().click()
})

Cypress.Commands.add('editAccount', function(){
    cy.get('.dropdown-toggle').click()
    cy.get('a[href^="/contas"]').click()
    cy.get('a[href^="/editarConta"]').first().click()
})