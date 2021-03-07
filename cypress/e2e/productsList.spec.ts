/// <reference types="cypress" />

context('ProductsList', () => {
  const user = cy
  beforeEach(() => {
    user.visit('/')
  })

  it("displays the products list as a grid of 2 items on mobile screens, and 3 items on tablet and desktop screens", () => {
    user.viewport('macbook-15')
    user.wait(200)
    user
      .get('[data-cy=product-list]')
      .should('have.class', 'grid grid-cols-2 md:grid-cols-3')
      .should('have.css', 'grid-template-columns')
      .and('match', /346\.656px 346\.656px 346\.656px/)
    user.viewport('iphone-6+')
    user.wait(200)
    user
      .get('[data-cy=product-list]')
      .should('have.css', 'grid-template-columns')
      .and('match', /191px 191px/)
  })
})