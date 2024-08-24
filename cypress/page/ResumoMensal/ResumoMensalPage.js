Cypress.Commands.add('selectMonth', function(mes){
    cy.get('#mes').select(mes)
})

Cypress.Commands.add('selectYear', function(ano){
    cy.get('#ano').select(ano)
})

Cypress.Commands.add('clickSearch', function(ano){
    cy.get('input[type="submit"]').click()
})