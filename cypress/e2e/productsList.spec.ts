/// <reference types="cypress" />

context('ProductsList', () => {
  const user = cy
  beforeEach(() => {
    user.visit('/')
  })

  it('displays the products list as a grid of 2 items on mobile screens, and 3 items on tablet and desktop screens', () => {
    user.get('[data-cy=loading]').should('be.visible')
    user
      .get('[data-cy=product-list]')
      .should('have.css', 'grid-template-columns')
      .and('match', /184px 184px/)
    user.viewport('macbook-15')
    user
      .get('[data-cy=product-list]')
      .should('have.css', 'grid-template-columns')
      .and('match', /402\.656px 402\.656px 402\.656px/)
  })

  it('adds item to cart and opens the cart, shows cart items count', () => {
    const firstProduct = /no-nonsense charcoal cleanser/i
    user
      .findByText(firstProduct)
      .parent()
      .next()
      .findByText(/add to cart/i)
      .click()

    user.get('[data-cy=cart]').as('cart')
    user.get('@cart').wait(500).findByText(firstProduct).should('be.visible')
    user.get('@cart').get('[data-cy=cart-toggle]').click()
    user.scrollTo('top')
    user
      .get('[data-cy=navbar-toggle] button')
      .click()
      .get('[data-cy=mobile-menu]')
      .findByTitle('Cart')
      .parent()
      .next()
      .contains('1')
    user.viewport('macbook-15')
    user
      .get('[data-cy=navbar]')
      .findByTitle('Cart')
      .parent()
      .next()
      .contains('1')
  })
})
