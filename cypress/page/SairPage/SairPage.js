Cypress.Commands.add('selectLogout', function(mes){
   cy.get('a[href^="/logout"]').click()
})