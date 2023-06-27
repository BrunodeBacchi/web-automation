describe('template spec', () => {
  it('correct-login', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.title')
  })

  it('wrong-login', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('wrong_user')
    cy.get('[data-test="password"]').type('wrong_password')
    cy.get('[data-test="login-button"]').click()
    cy.get("[data-test='error']")
  })
})