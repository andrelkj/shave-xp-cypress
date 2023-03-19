describe('app', () => {
  it('Should be online', () => {
    cy.visit('http://localhost:3000')
  })
})