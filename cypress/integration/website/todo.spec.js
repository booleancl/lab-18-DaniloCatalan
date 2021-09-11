/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    //cy.visit('https://example.cypress.io/todo')
    cy.visit('http://localhost:8080')
  })

  it('should show right title', () => {
    cy.get('.hero-section h1').should('include.text', 'Programadores más influyentes de la historia')
  })

  it('should show error messages in each field required', ()=> {
    cy.get('form button[type="submit"]').click()
    cy.get('[data-cy="email"] .pristine-error')
        .should('include.text', 'Este campo es requerido')
    cy.get('form .form-group:nth-child(2) .pristine-error')
        .should('include.text', 'Este campo es requerido')
  })
})
