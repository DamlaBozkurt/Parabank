

describe('Parabank demo site automation test', () => {
  it('basicScenarios', () => {
    cy.login()
    cy.mainPage()
    cy.register()
    cy.services()
    cy.forgotPassword()
    cy.contact()
    cy.forum()
    cy.admin()
    cy.aboutUs()
    cy.siteMap()
    cy.products()


})

  })