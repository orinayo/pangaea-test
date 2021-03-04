/// <reference types="cypress" />

context('Header', () => {
  const user = cy
  beforeEach(() => {
    user.visit('/')
  })

  it('displays a toggle bar on mobile screens, and the full header on tablet and large screens', () => {
    cy.viewport('macbook-15')
    cy.wait(200)
    cy.get('[data-cy=navbar]').should('be.visible')
    cy.viewport('iphone-6+')
    cy.wait(200)
    // the navbar should have collapse since our screen is smaller
    cy.get('[data-cy=navbar]').should('not.be.visible')
    cy.get('[data-cy=navbar-toggle]').should('be.visible').click()
    cy.get('.nav').find('a').should('be.visible')
  })
})
