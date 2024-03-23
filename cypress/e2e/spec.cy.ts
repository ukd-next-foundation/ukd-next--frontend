describe('template spec', () => {
  it('passes', () => {
    cy.viewport('iphone-6')
    cy.visit('http://localhost:4173/')
  })
})
