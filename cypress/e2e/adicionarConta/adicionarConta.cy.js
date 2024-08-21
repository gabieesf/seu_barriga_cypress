import '../../page/AdicionarConta/AdicionarPage'
import '../../page/LoginPage/LoginPage'
import '../../page/ListarPage/ListarPage'
import { faker } from '@faker-js/faker';

const url='https://seubarriga.wcaquino.me/login'
const msgAlerta='.alert'
const randomName = faker.name.lastName();

beforeEach(function() {
  cy.visit(url)
  cy.fillInName('2008@teste.com')
  cy.fillInPassword('123')
  cy.clickButton()
  cy.get('.dropdown-toggle').click()
  cy.get('a[href^="/addConta"]').click()
  const testTitlesToRunBeforeEach = [
    'Adicionar conta com nome muito extenso'
  ];

  if (testTitlesToRunBeforeEach.includes(this.currentTest.title)) {
    cy.ApagarConta();
    cy.get('.dropdown-toggle').click()
    cy.get('a[href^="/addConta"]').click()
  }
})

afterEach(function() {
  const testTitlesToRunAfterEach = [
    'Adicionar conta com nome já existente',
  ];

  if (testTitlesToRunAfterEach.includes(this.currentTest.title)) {
    cy.ApagarConta();
  }
})

it('Adicionar conta com sucesso', function() {
  cy.fillInAccount(randomName)
  cy.clickSave()
  cy.get(msgAlerta)
    .should('be.visible')
    .should('have.text', 'Conta adicionada com sucesso!')
})

it('Adicionar conta com nome em branco', function() {
  cy.clickSave()
  cy.get(msgAlerta)
    .should('be.visible')
    .should('have.text', 'Informe o nome da conta')
})

it('Adicionar conta com nome já existente', function() {
  cy.fillInAccount(randomName)
  cy.clickSave()
  cy.get(msgAlerta)
    .should('be.visible')
    .should('have.text', 'Já existe uma conta com esse nome!')
})

it('Adicionar conta com nome contendo apenas o caractere espaço', function() {
  cy.fillInAccount(' ')
  cy.clickSave()
  cy.get(msgAlerta)
    .should('be.visible')
    .should('have.text', 'Informe o nome da conta')    
})

it('Adicionar conta com nome muito extenso', function() {
  cy.fillInAccount('A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6A7B8C9D0E1F2G3H4I5J6K7L8M9N0O1P2Q3R4S5T6U7V8W9X0Y1Z2A3B4C5D6E7F8G9H0I1J2K3L4M5N6O7P8Q9R0S1T2U3V4W5X6Y7Z8A9B0C1D2E3F4G5H6I7J8K9L0M1N2O3P4Q5R6S7T8U9V0W1X2Y3Z4A5B6C7D8E9F0G1H2I3J4K5L6M7N8O9P0Q1R2S3T4U5V6W7X8Y9Z0A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6A7B8C9D0E1F2G3H4I5J6K7L8M9N0O1P2Q3R4S5T6U7V8W9X0Y1Z2A3B4C5D6E7F8G9H0I1J2K3L4M5N6O7P8Q9R0S1T2U3V4W5X6Y7Z8A9B0C1D2E3F4G5H6I7J8K9L0M1N2O3P4Q5R6S7T8U9V0W1X2Y3Z4')
  cy.clickSave()
  cy.get(msgAlerta)
    .should('be.visible')
    .should('have.text', 'Nome muito extenso')
})

