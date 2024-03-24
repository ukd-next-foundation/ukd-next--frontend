describe('Authorization page testing', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
    cy.visit('http://localhost:4173/')
  })

  it('should return existabe img', () => {
    cy.get('img').should('be.visible')
  })

  it('should return existable title', () => {
    cy.get('h1').should('be.visible').and('not.be.empty')
  })

  it('should return existable text', () => {
    cy.get('p').should('be.visible').and('not.be.empty')
  })

  it('should return existable button', () => {
    cy.get('button').should('be.visible').and('not.be.disabled')
    cy.getAlt('auth-btn-icon').should('be.visible')
  })
})
