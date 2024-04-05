describe('Authentication flow', () => {
  it('should return user profile, after authentication', () => {
    cy.visit('/')
    cy.loginByGoogleApi()
  })
})
