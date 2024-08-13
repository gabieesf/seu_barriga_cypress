Cypress.Commands.add('selectReceita', function(){
    cy.get('#tipo').select('Receita');
})

Cypress.Commands.add('selectDespesa', function(){
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

Cypress.Commands.add('fillInInteressado', function(text){
  cy.get('#interessado')
    .type(text)
})


Cypress.Commands.add('fillInValue', function(valor){
    cy.get('#valor')
      .type(valor)
})

Cypress.Commands.add('selectConta', function(Account) {
  cy.get('.form-control option').each(($el) => {  
      if ($el.text().trim() === Account) {  
          cy.wrap($el).click({ force: true });
      }
  });
});

Cypress.Commands.add('selectPago', function(){
    cy.get('#status_pago')
      .click()
})

Cypress.Commands.add('selectPendente', function(){
    cy.get('#status_pendente')
      .click()
})

Cypress.Commands.add('clickSave2', function(){
  cy.get("[type='submit']")
  .click()
})