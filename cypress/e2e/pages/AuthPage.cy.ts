describe('Authorization page testing', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.viewport('iphone-6')
  })

  it('should return existable img', () => {
    cy.get('img').should('be.visible')
  })

  it('should return existable title', () => {
    cy.get('h1').should('be.visible').and('not.be.empty')
  })

  it('should return existable text', () => {
    cy.get('p').should('be.visible').and('not.be.empty')
  })

  it('should return existable button', () => {
    cy.get('button').should('be.visible').and('be.enabled')
    cy.getAlt('auth-btn-icon').should('be.visible')
  })
})
