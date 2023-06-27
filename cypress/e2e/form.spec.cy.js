describe('First Cypress Test', () => {
  it('Personal info form', () => {
    cy.visit('https://itera-qa.azurewebsites.net/home/automation')
    cy.get('#name').type('Bruno de Bacchi')
    cy.get('#phone').type('12345678')
    cy.get('#email').type('envkt@example.com')
    cy.get('#password').type('12345678')
    cy.get('#address').type('12345678')
    cy.get('.card-body > .btn').click()
  })

  it('Testing checkboxes', () => {
    cy.visit('https://itera-qa.azurewebsites.net/home/automation')
    cy.get('#male').click()
    cy.get('#monday').click()
    cy.get('#tuesday').click()
    cy.get('#wednesday').click()
    cy.get('.custom-select').select(2)
  })

  it('Testing checkboxes and Radio button', () => {
    cy.visit('https://itera-qa.azurewebsites.net/home/automation')
    cy.get("input#2years.custom-control-input[name='customRadio']").click({force:true})
    cy.get("input#selenium").click({force:true})
    cy.get("input#serenity").click({force:true})
  })

  it('Testing file update', () => {
    cy.visit('https://itera-qa.azurewebsites.net/home/automation')
    cy.get('#inputGroupFile02').selectFile({
      contents: Cypress.Buffer.from('file contentes'),
      fileName: 'file.txt',
      lastModified: Date.now()
    })
    cy.get('.input-group-text').click()
  })
})