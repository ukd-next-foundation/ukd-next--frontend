// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable {
    getEl(name: string): Chainable<JQuery<HTMLElement>>
    getAlt(name: string): Chainable<JQuery<HTMLElement>>
    loginByGoogleApi(): void
  }
}

Cypress.Commands.add('getEl', (name: string) => cy.get(`[data-cy="${name}"]`))
Cypress.Commands.add('getAlt', (name: string) => cy.get(`[alt="${name}"]`))

Cypress.Commands.add('loginByGoogleApi', () => {
  cy.setCookie('refresh_token', Cypress.env('REFRESH_TOKEN'))

  cy.request({
    method: 'GET',
    url: 'https://dev.ukd-next.site/api/v0/auth/refresh',
  }).then((response) => {
    window.localStorage.setItem('access-token', response.body.accessToken)
    cy.visit('/auth')
  })
})
