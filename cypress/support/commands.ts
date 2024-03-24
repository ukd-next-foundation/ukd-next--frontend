// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable {
    getEl(name: string): void
    getAlt(name: string): void
  }
}

Cypress.Commands.add('getEl', (name: string) => cy.get(`[data-cy="${name}"]`))
Cypress.Commands.add('getAlt', (name: string) => cy.get(`[alt="${name}"]`))
