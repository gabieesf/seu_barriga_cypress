Cypress.Commands.add('selectRecipe', function(){
    cy.get('#tipo').select('Receita');
})

Cypress.Commands.add('selectExpense', function(){
    cy.get('#tipo').select('Despesa');
})

Cypress.Commands.add('fillInMovimentDate', function(data){
    cy.get('#data_transacao')
      .type(data)
})

Cypress.Commands.add('fillInPaymentDate', function(data){
    cy.get('#data_pagamento')
      .type(data)
})

Cypress.Commands.add('fillInDescription', function(text){
    cy.get('#descricao')
      .type(text)
})

Cypress.Commands.add('fillInInterested', function(text){
  cy.get('#interessado')
    .type(text)
})


Cypress.Commands.add('fillInValue', function(valor){
    cy.get('#valor')
      .type(valor)
})

Cypress.Commands.add('selectAccount', function(Account) {
  cy.get('.form-control option').each(($el) => {  
      if ($el.text().trim() === Account) {  
          cy.wrap($el).click({ force: true });
      }
  });
});

Cypress.Commands.add('selectPaid', function(){
    cy.get('#status_pago')
      .click()
})

Cypress.Commands.add('selectPending', function(){
    cy.get('#status_pendente')
      .click()
})

Cypress.Commands.add('clickSave2', function(){
  cy.get("[type='submit']")
  .click()
})