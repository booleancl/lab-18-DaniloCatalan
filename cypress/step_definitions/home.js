import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:8080'
Given('the user in the homepage', () => {
  cy.visit(url)
})
When('press "comentar" button without fill the required fields',() => {
  cy.get('form button[type="submit"]').click()
})
Then('the required fields show "Este campo es obligatorio"',() => {
  cy.get('[data-cy="email"] .pristine-error')
    .should('include.text', 'Este campo es requerido')
  cy.get('form .form-group:nth-child(2) .pristine-error')
    .should('include.text', 'Este campo es requerido')
})