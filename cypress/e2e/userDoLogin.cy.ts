describe('Just another test describe...', () => {
  it('just another test', () => {
    cy.visit('/')
    cy.loginByGoogleApi()
  })
})
